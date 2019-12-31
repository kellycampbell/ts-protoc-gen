load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")

TypescriptProtoLibraryInfo = provider(
    fields = {
        "js_outputs": "The JS output files produced directly from the src protos",
        "dts_outputs": "Ths TS definition files produced directly from the src protos",
        "deps_js": "The transitive JS dependencies",
        "deps_dts": "The transitive dependencies' TS definitions",
    },
)

def validate_target(target):
    """
    Make sure the target is valid. We need to make sure all sources in the proto
    provided are 
    1) Proto files.
    2) From the same package (including workspace)
    """
    if len(target[ProtoInfo].direct_sources) == 0:
        return target.label

    owner = target[ProtoInfo].direct_sources[0].owner
    for src in target[ProtoInfo].direct_sources:
        if src.extension != "proto":
            fail("Input must be a proto file.")

        if src.owner.package != owner.package:
            fail("Inputs must all be in the same package.")

    return owner

def proto_path(proto):
    """
    The proto path is not really a file path
    It's the path to the proto that was seen when the descriptor file was generated.
    """
    path = proto.path
    root = proto.root.path
    ws = proto.owner.workspace_root
    # print(" path=%s, root=%s, ws=%s" % (path, root, ws))
    if path.startswith(root):
        path = path[len(root):]
    if path.startswith("/"):
        path = path[1:]
    if path.startswith(ws):
        path = path[len(ws):]
    if path.startswith("/"):
        path = path[1:]

    # Bazel creates symlinks to the .proto files under a directory called
    # "_virtual_imports/<rule name>" if we do any sort of munging of import
    # paths (e.g. using strip_import_prefix / import_prefix attributes)
    virtual_imports = "_virtual_imports/"
    if virtual_imports in path:
        path = path.split(virtual_imports)[1].split("/", 1)[1]

    return path

def _append_to_outputs(ctx, src, js_outputs, dts_outputs):
    output_extensions = ["_pb.d.ts", "_pb.js", "_grpc_pb.js", "_grpc_pb.d.ts"]

    file_name = src.basename[:-len(src.extension) - 1]
    output_dir = src.dirname
    # print("output_dir = %r" % output_dir)
    virtual_imports = "_virtual_imports/"
    if virtual_imports in output_dir:
        output_dir = output_dir.split(virtual_imports)[1].split("/", 1)[1] + '/'
        sibling = None
    else:
        output_dir = ''
        sibling = src

    for ext in output_extensions:
        output = ctx.actions.declare_file(output_dir + file_name + ext, sibling=sibling)
        # print("filename = %r, output = %r" % (file_name, output))

        if ext.endswith(".d.ts"):
            dts_outputs.append(output)
        else:
            js_outputs.append(output)

def _convert_js_files_to_amd_modules(ctx, owner, js_protoc_outputs):
    """
    Calls the convert_to_amd tool to convert the generated JS code into AMD modules.
    """

    js_outputs = []
    for js_file in js_protoc_outputs:
        file_path = "/".join([p for p in [
            owner.workspace_root,
            owner.package,
        ] if p])
        file_name = js_file.basename[:-len(js_file.extension) - 1]
        amd_output = ctx.actions.declare_file(file_name + "_amd." + js_file.extension)
        js_outputs.append(amd_output)
        ctx.actions.run(
            inputs = [js_file],
            outputs = [amd_output],
            arguments = [
                "--workspace_name",
                owner.workspace_root,
                "--input_base_path",
                file_path,
                "--output_module_name",
                file_name,
                "--input_file_path",
                js_file.path,
                "--output_file_path",
                amd_output.path,
            ],
            progress_message = "Creating AMD module for {}".format(ctx.label),
            executable = ctx.executable._convert_to_amd,
        )

    return js_outputs

def get_output_dir(ctx, owner):
    """
    Finds the proper root bin directory for the protoc tool.
    In the case of a local build, the bin-dir is sufficient. However,
    since the aspect runs in the context of external dependencies,
    it needs to account for this. For example, an external workspace
    with the following structure
    protos
    |- api
    |- |- service.proto
    |- |- BUILD
    |- WORKSPACE
    would have a package @protos//api/service.proto. In this case,
    the declared_output's directory would be bazel-bin/external/protos/api/
    and the package label would be api/. Since the protoc tool places
    its outputs based on the directory structure, we need to specify the
    proper external root. Using the raw bin_dir would end up placing this
    output file in bazel-bin/api, which is not what was declared.
    """

    # Remove the bin dir from the path of the output
    bin_dir_parts = ctx.bin_dir.path.split("/")
    parts = owner.workspace_root.split("/")
    for i in range(0, len(bin_dir_parts)):
        if bin_dir_parts[0] == parts[0]:
            bin_dir_parts.pop(0)
            parts.pop(0)
        else:
            break

    if parts[0] == "external":
        output_dir = ctx.bin_dir.path + "/" + "/".join(parts[:2])
        # output_dir = ctx.bin_dir.path 
    else:
        output_dir = ctx.bin_dir.path

    # print("output_dir = %r" % output_dir)
    return output_dir

def typescript_proto_library_aspect_(target, ctx):
    """
    A bazel aspect that is applied on every proto_library rule on the transitive set of dependencies
    of a typescript_proto_library rule.

    Handles running protoc to produce the generated JS and TS files.
    """
    js_protoc_outputs = []
    dts_outputs = []
    proto_inputs = []
    file_modifications = []

    owner = validate_target(target)
    # print("owner[%r] = %r" % (target, owner))
    inputs = []
    for src in target[ProtoInfo].direct_sources:
        # print("direct_source: %r" % src)
        normalized_file = proto_path(src)
        # print("normal_source: %r" % normalized_file)
        proto_inputs.append(normalized_file)
        _append_to_outputs(ctx, src, js_protoc_outputs, dts_outputs)

    outputs = dts_outputs + js_protoc_outputs
    # print("outputs = %r" % outputs)
    # print()

    inputs += target[ProtoInfo].direct_sources
    inputs += target[ProtoInfo].transitive_descriptor_sets.to_list()

    descriptor_sets_paths = [desc.path for desc in target[ProtoInfo].transitive_descriptor_sets.to_list()]

    protoc_output_dir = get_output_dir(ctx, owner)
    protoc_command = "%s" % (ctx.file._protoc.path)

    protoc_command += " --plugin=protoc-gen-ts=%s" % (ctx.files._ts_protoc_gen[1].path)
    protoc_command += " --ts_out=service=true:%s" % (protoc_output_dir)
    protoc_command += " --plugin=protoc-gen-grpc=%s" % (ctx.files._protoc_gen_grpc[1].path)
    protoc_command += " --grpc_out=%s" % (protoc_output_dir)
    protoc_command += " --js_out=import_style=commonjs,binary:%s" % (protoc_output_dir)
    protoc_command += " --descriptor_set_in=%s" % (":".join(descriptor_sets_paths))
    protoc_command += " %s" % (" ".join(proto_inputs))

    commands = [protoc_command] + file_modifications
    command = " && ".join(commands)

    tools = [ctx.file._protoc] + ctx.files._ts_protoc_gen + ctx.files._protoc_gen_grpc

    ctx.actions.run_shell(
        tools = tools,
        inputs = depset(inputs),
        outputs = outputs,
        progress_message = "Creating Typescript pb files %s" % ctx.label,
        command = command,
    )

    dts_outputs = depset(dts_outputs)
    if ctx.attr.module == "amd":
        js_outputs = depset(_convert_js_files_to_amd_modules(ctx, owner, js_protoc_outputs))
    else:
        js_outputs = depset(js_protoc_outputs)
    deps_js = []
    deps_dts = []

    for dep in ctx.rule.attr.deps:
        aspect_data = dep[TypescriptProtoLibraryInfo]
        deps_dts.append(aspect_data.dts_outputs)
        deps_dts.append(aspect_data.deps_dts)
        deps_js.append(aspect_data.js_outputs)
        deps_js.append(aspect_data.deps_js)

    return [TypescriptProtoLibraryInfo(
        dts_outputs = dts_outputs,
        js_outputs = js_outputs,
        deps_dts = depset(transitive = deps_dts),
        deps_js = depset(transitive = deps_js),
    )]

typescript_proto_library_aspect = aspect(
    implementation = typescript_proto_library_aspect_,
    attr_aspects = ["deps"],
    attrs = {
        "module": attr.string(values = ["amd", "commonjs"]),
        "_ts_protoc_gen": attr.label(
            allow_files = True,
            executable = True,
            cfg = "host",
            default = Label("@ts_protoc_gen//bin:protoc-gen-ts"),
        ),
        "_protoc_gen_grpc": attr.label(
            allow_files = True,
            executable = True,
            cfg = "host",
            default = Label("@ts_protoc_gen_deps//grpc-tools/bin:grpc_tools_node_protoc_plugin"),
        ),
        "_protoc": attr.label(
            # allow_files = True,
            allow_single_file = True,
            executable = True,
            cfg = "host",
            default = Label("@com_google_protobuf//:protoc"),
        ),
        "_convert_to_amd": attr.label(
            executable = True,
            cfg = "host",
            allow_files = True,
            default = Label("@ts_protoc_gen//src/bazel:convert_to_amd"),
        ),
    },
)

def _typescript_proto_library_impl(ctx):
    """
    Handles converting the aspect output into a provider compatible with the rules_typescript rules.
    """
    aspect_data = ctx.attr.proto[TypescriptProtoLibraryInfo]
    dts_outputs = aspect_data.dts_outputs
    js_outputs = aspect_data.js_outputs
    outputs = depset(transitive = [js_outputs, dts_outputs])

    js_transitive_srcs = depset(transitive = [js_outputs, aspect_data.deps_js])

    # print("providers = %r" % providers)
    return struct(
        typescript = struct(
            declarations = dts_outputs,
            transitive_declarations = depset(transitive = [dts_outputs, aspect_data.deps_dts]),
            type_blacklisted_declarations = depset([]),
            es5_sources = js_outputs,
            es6_sources = js_outputs,
            transitive_es5_sources = js_transitive_srcs,
            transitive_es6_sources = js_transitive_srcs,
        ),
        legacy_info = struct(
            files = outputs,
        ),
        providers = [
            DefaultInfo(files = outputs),
        ],
    )

typescript_proto_library = rule(
    attrs = {
        "proto": attr.label(
            mandatory = True,
            # allow_files = True,
            allow_single_file = True,
            providers = [ProtoInfo],
            aspects = [typescript_proto_library_aspect],
        ),
        "module": attr.string(
            default = "amd",
            values = ["amd", "commonjs"],
            doc = "Wrap the output js as an amd or leave it as a commonjs module"
        ),
        "_ts_protoc_gen": attr.label(
            allow_files = True,
            executable = True,
            cfg = "host",
            default = Label("@ts_protoc_gen//bin:protoc-gen-ts"),
        ),
        "_protoc_gen_grpc": attr.label(
            allow_files = True,
            executable = True,
            cfg = "host",
            default = Label("@ts_protoc_gen_deps//grpc-tools/bin:grpc_tools_node_protoc_plugin"),
        ),
        "_protoc": attr.label(
            # allow_files = True,
            allow_single_file = True,
            executable = True,
            cfg = "host",
            default = Label("@com_google_protobuf//:protoc"),
        ),
    },
    implementation = _typescript_proto_library_impl,
)

def typescript_proto_dependencies():
    """
    Installs ts-proto-gen dependencies.

    Usage:

    # WORKSPACE
    load("@ts_protoc_gen//:defs.bzl", "typescript_proto_dependencies")
    typescript_proto_dependencies()
    """

    if "net_zlib" not in native.existing_rules():
        http_archive(
            name = "net_zlib",
            build_file = "@com_google_protobuf//:third_party/zlib.BUILD",
            sha256 = "c3e5e9fdd5004dcb542feda5ee4f0ff0744628baf8ed2dd5d66f8ca1197cb1a1",
            strip_prefix = "zlib-1.2.11",
            urls = ["https://zlib.net/zlib-1.2.11.tar.gz"],
        )

    if "zlib" not in native.existing_rules():
        # Loading zlib could be replaced with protobuf/protobuf_deps.bzl, but it's not in the most recent release
        native.bind(
            name = "zlib",
            actual = "@net_zlib//:zlib",
        )

    if "com_google_protobuf" not in native.existing_rules():
        http_archive(
            name = "com_google_protobuf",
            sha256 = "f976a4cd3f1699b6d20c1e944ca1de6754777918320c719742e1674fcf247b7e",
            strip_prefix = "protobuf-3.7.1",
            urls = ["https://github.com/protocolbuffers/protobuf/archive/v3.7.1.zip"],
        )

    yarn_install(
        name = "ts_protoc_gen_deps",
        package_json = "@ts_protoc_gen//:package.json",
        # Don't use managed directories because these are internal to the library and the
        # dependencies shouldn't need to be installed by the user.
        symlink_node_modules = False,
        yarn_lock = "@ts_protoc_gen//:yarn.lock",
    )
