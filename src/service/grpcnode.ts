import {filePathToPseudoNamespace, normaliseFieldObjectName, replaceProtoSuffix, getPathToRoot} from "../util";
import {ExportMap} from "../ExportMap";
import {Printer} from "../Printer";
import {CodePrinter} from "../CodePrinter";
import {
  FileDescriptorProto, MethodDescriptorProto,
  ServiceDescriptorProto
} from "google-protobuf/google/protobuf/descriptor_pb";
import {WellKnownTypesMap} from "../WellKnown";
import {getFieldType, MESSAGE_TYPE} from "../ts/FieldTypes";
import {CodeGeneratorResponse} from "google-protobuf/google/protobuf/compiler/plugin_pb";

export function generateGrpcNodeService(filename: string, descriptor: FileDescriptorProto, exportMap: ExportMap): CodeGeneratorResponse.File[] {
  let shortFilename = filename.slice(0, filename.length - 3);
  return [
    createFile(generateTypescriptDefinition(descriptor, exportMap), `${shortFilename}_grpc_pb.d.ts`),
  ];
}

function createFile(output: string, filename: string): CodeGeneratorResponse.File {
  const file = new CodeGeneratorResponse.File();
  file.setName(filename);
  file.setContent(output);
  return file;
}

type CallingTypes = {
  requestType: string
  responseType: string
};

function getCallingTypes(method: MethodDescriptorProto, exportMap: ExportMap): CallingTypes {
  return {
    requestType: getFieldType(MESSAGE_TYPE, method.getInputType().slice(1), "", exportMap),
    responseType: getFieldType(MESSAGE_TYPE, method.getOutputType().slice(1), "", exportMap),
  };
}

function isUsed(fileDescriptor: FileDescriptorProto, pseudoNamespace: string, exportMap: ExportMap) {
  return fileDescriptor.getServiceList().some(service => {
    return service.getMethodList().some(method => {
      const callingTypes = getCallingTypes(method, exportMap);
      const namespacePackage = pseudoNamespace + ".";
      return (
        callingTypes.requestType.indexOf(namespacePackage) === 0 ||
        callingTypes.responseType.indexOf(namespacePackage) === 0
      );
    });
  });
}

type ImportDescriptor = {
  readonly namespace: string
  readonly path: string
};

type RPCMethodDescriptor = {
  readonly nameAsPascalCase: string,
  readonly nameAsCamelCase: string,
  readonly functionName: string,
  readonly serviceName: string,
  readonly requestStream: boolean
  readonly responseStream: boolean
  readonly requestType: string
  readonly responseType: string
};

class RPCDescriptor {
  private readonly grpcService: GrpcWebServiceDescriptor;
  private readonly protoService: ServiceDescriptorProto;
  private readonly exportMap: ExportMap;

  constructor(grpcService: GrpcWebServiceDescriptor, protoService: ServiceDescriptorProto, exportMap: ExportMap) {
    this.grpcService = grpcService;
    this.protoService = protoService;
    this.exportMap = exportMap;
  }
  get name(): string {
    return this.protoService.getName();
  }

  get qualifiedName(): string {
    return (this.grpcService.packageName ? `${this.grpcService.packageName}.` : "") + this.name;
  }

  get methods(): RPCMethodDescriptor[] {
    return this.protoService.getMethodList()
      .map(method => {
        const callingTypes = getCallingTypes(method, this.exportMap);
        const nameAsCamelCase = method.getName()[0].toLowerCase() + method.getName().substr(1);
        return {
          nameAsPascalCase: method.getName(),
          nameAsCamelCase,
          functionName: normaliseFieldObjectName(nameAsCamelCase),
          serviceName: this.name,
          requestStream: method.getClientStreaming(),
          responseStream: method.getServerStreaming(),
          requestType: callingTypes.requestType,
          responseType: callingTypes.responseType,
        };
      });
  }
}

class GrpcWebServiceDescriptor {
  private readonly fileDescriptor: FileDescriptorProto;
  private readonly exportMap: ExportMap;
  private readonly pathToRoot: string;

  constructor(fileDescriptor: FileDescriptorProto, exportMap: ExportMap) {
    this.fileDescriptor = fileDescriptor;
    this.exportMap = exportMap;
    this.pathToRoot = getPathToRoot(fileDescriptor.getName());
  }

  get filename(): string {
    return this.fileDescriptor.getName();
  }

  get packageName(): string {
    return this.fileDescriptor.getPackage();
  }

  get imports(): ImportDescriptor[] {
    const dependencies = this.fileDescriptor.getDependencyList()
      .filter(dependency => isUsed(this.fileDescriptor, filePathToPseudoNamespace(dependency), this.exportMap))
      .map(dependency => {
        const namespace = filePathToPseudoNamespace(dependency);
        if (dependency in WellKnownTypesMap) {
          return {
            namespace,
            path: WellKnownTypesMap[dependency],
          };
        } else {
          return {
            namespace,
            path: `${this.pathToRoot}${replaceProtoSuffix(replaceProtoSuffix(dependency))}`
          };
        }
      });
    const hostProto = {
      namespace: filePathToPseudoNamespace(this.filename),
      path: `${this.pathToRoot}${replaceProtoSuffix(this.filename)}`,
    };
    return [ hostProto ].concat(dependencies);
  }

  get services(): RPCDescriptor[] {
    return this.fileDescriptor.getServiceList()
      .map(service => {
        return new RPCDescriptor(this, service, this.exportMap);
      });
  }
}

function generateTypescriptDefinition(fileDescriptor: FileDescriptorProto, exportMap: ExportMap) {
  const serviceDescriptor = new GrpcWebServiceDescriptor(fileDescriptor, exportMap);
  const printer = new Printer(0);

  // Header.
  printer.printLn(`// GENERATED CODE -- DO NOT EDIT!`);
  printer.printLn(`// package: ${serviceDescriptor.packageName}`);
  printer.printLn(`// file: ${serviceDescriptor.filename}`);
  printer.printEmptyLn();

  if (serviceDescriptor.services.length === 0) {
    return printer.getOutput();
  }

  // Import statements.
  serviceDescriptor.imports
    .forEach(importDescriptor => {
      printer.printLn(`import * as ${importDescriptor.namespace} from "${importDescriptor.path}";`);
    });
  printer.printLn(`import * as grpc from "grpc";`);
  printer.printEmptyLn();

  // Services.
  serviceDescriptor.services
    .forEach(service => {

      // Method Type Definitions
      service.methods.forEach(method => {
        printer.printLn(`type ${method.serviceName}${method.nameAsPascalCase} = {`);
        printer.printIndentedLn(`readonly path: string;`);
        printer.printIndentedLn(`readonly requestStream: ${method.requestStream};`);
        printer.printIndentedLn(`readonly responseStream: ${method.responseStream};`);
        printer.printIndentedLn(`readonly requestType: typeof ${method.requestType};`);
        printer.printIndentedLn(`readonly responseType: typeof ${method.responseType};`);
        printer.printIndentedLn(`readonly requestSerialize: grpc.serialize<${method.requestType}>;`);
        printer.printIndentedLn(`readonly responseSerialize: grpc.serialize<${method.responseType}>;`);
        printer.printIndentedLn(`readonly requestDeserialize: grpc.deserialize<${method.requestType}>;`);
        printer.printIndentedLn(`readonly responseDeserialize: grpc.deserialize<${method.responseType}>;`);

        printer.printLn(`};`);
        printer.printEmptyLn();
      });

      printer.printLn(`export class ${service.name}Service {`);
      service.methods.forEach(method => {
        printer.printIndentedLn(`static readonly ${method.nameAsCamelCase}: ${method.serviceName}${method.nameAsPascalCase};`);
      });
      printer.printLn(`}`);
      printer.printEmptyLn();
    });

  // Add a client stub that talks with any standard grpc server
  serviceDescriptor.services
    .forEach(service => {
      printServiceStubTypes(printer, service);
      printer.printEmptyLn();
    });

  return printer.getOutput();
}

function printServiceStubTypes(methodPrinter: Printer, service: RPCDescriptor) {
  const printer = new CodePrinter(0, methodPrinter);

  printer
           .printLn(`export class ${service.name}Client extends grpc.Client {`)
        .indent()
        .printEmptyLn()
             .printLn(`constructor(address: string, credentials?: grpc.ChannelCredentials, options?: grpc.RpcOptions);`)
        .printEmptyLn();

  service.methods.forEach((method: RPCMethodDescriptor) => {
    if (method.requestStream && method.responseStream) {
      printBidirectionalStubMethodTypes(printer, method);
    } else if (method.requestStream) {
      printClientStreamStubMethodTypes(printer, method);
    } else if (method.responseStream) {
      printServerStreamStubMethodTypes(printer, method);
    } else {
      printUnaryStubMethodTypes(printer, method);
    }
    printer.printEmptyLn();
  });
  printer.dedent().printLn("}");
}

function printUnaryStubMethodTypes(printer: CodePrinter, method: RPCMethodDescriptor) {
  printer
             .printLn(`${method.nameAsCamelCase}(`)
      .indent().printLn(`requestMessage: ${method.requestType},`)
               .printLn(`metadata: grpc.Metadata,`)
               .printLn(`callback: (error: ServiceError|null, responseMessage: ${method.responseType}|null) => void`)
    .dedent().printLn(`): grpc.ClientUnaryCall;`)
             .printLn(`${method.nameAsCamelCase}(`)
      .indent().printLn(`requestMessage: ${method.requestType},`)
               .printLn(`callback: (error: ServiceError|null, responseMessage: ${method.responseType}|null) => void`)
    .dedent().printLn(`): grpc.ClientUnaryCall;`);
}

function printServerStreamStubMethodTypes(printer: CodePrinter, method: RPCMethodDescriptor) {
  printer.printLn(`${method.nameAsCamelCase}(requestMessage: ${method.requestType}, metadata?: grpc.Metadata): grpc.ClientReadableStream<${method.responseType}>;`);
}

function printClientStreamStubMethodTypes(printer: CodePrinter, method: RPCMethodDescriptor) {
  printer.printLn(`${method.nameAsCamelCase}(metadata?: grpc.Metadata): grpc.ClientWritableStream<${method.requestType}>;`);
}

function printBidirectionalStubMethodTypes(printer: CodePrinter, method: RPCMethodDescriptor) {
  printer.printLn(`${method.nameAsCamelCase}(metadata?: grpc.Metadata): grpc.ClientDuplexStream<${method.requestType}, ${method.responseType}>;`);
}
