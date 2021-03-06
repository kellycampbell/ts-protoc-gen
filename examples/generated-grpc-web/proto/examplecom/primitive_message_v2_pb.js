/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.examplecom.PrimitiveMessageV2', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.examplecom.PrimitiveMessageV2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.examplecom.PrimitiveMessageV2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.examplecom.PrimitiveMessageV2.displayName = 'proto.examplecom.PrimitiveMessageV2';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.examplecom.PrimitiveMessageV2.prototype.toObject = function(opt_includeInstance) {
  return proto.examplecom.PrimitiveMessageV2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.examplecom.PrimitiveMessageV2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.examplecom.PrimitiveMessageV2.toObject = function(includeInstance, msg) {
  var f, obj = {
    myDouble: +jspb.Message.getField(msg, 1),
    myFloat: +jspb.Message.getField(msg, 2),
    myInt32: jspb.Message.getField(msg, 3),
    myInt64: jspb.Message.getField(msg, 4),
    myUint32: jspb.Message.getField(msg, 5),
    myUint64: jspb.Message.getField(msg, 6),
    mySint32: jspb.Message.getField(msg, 7),
    mySint64: jspb.Message.getField(msg, 8),
    myFixed32: jspb.Message.getField(msg, 9),
    myFixed64: jspb.Message.getField(msg, 10),
    mySfixed32: jspb.Message.getField(msg, 11),
    mySfixed64: jspb.Message.getField(msg, 12),
    myBool: jspb.Message.getField(msg, 13),
    myString: jspb.Message.getField(msg, 14),
    myBytes: msg.getMyBytes_asB64(),
    optDouble: jspb.Message.getOptionalFloatingPointField(msg, 16),
    optFloat: jspb.Message.getOptionalFloatingPointField(msg, 17),
    optInt32: jspb.Message.getField(msg, 18),
    optInt64: jspb.Message.getField(msg, 19),
    optUint32: jspb.Message.getField(msg, 20),
    optUint64: jspb.Message.getField(msg, 21),
    optSint32: jspb.Message.getField(msg, 22),
    optSint64: jspb.Message.getField(msg, 23),
    optFixed32: jspb.Message.getField(msg, 24),
    optFixed64: jspb.Message.getField(msg, 25),
    optSfixed32: jspb.Message.getField(msg, 26),
    optSfixed64: jspb.Message.getField(msg, 27),
    optBool: jspb.Message.getField(msg, 28),
    optString: jspb.Message.getField(msg, 29),
    optBytes: msg.getOptBytes_asB64(),
    optNumber: jspb.Message.getField(msg, 31)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.examplecom.PrimitiveMessageV2}
 */
proto.examplecom.PrimitiveMessageV2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.examplecom.PrimitiveMessageV2;
  return proto.examplecom.PrimitiveMessageV2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.examplecom.PrimitiveMessageV2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.examplecom.PrimitiveMessageV2}
 */
proto.examplecom.PrimitiveMessageV2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMyDouble(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMyFloat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMyInt32(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMyInt64(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMyUint32(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMyUint64(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readSint32());
      msg.setMySint32(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readSint64());
      msg.setMySint64(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setMyFixed32(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setMyFixed64(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setMySfixed32(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setMySfixed64(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMyBool(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setMyString(value);
      break;
    case 15:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMyBytes(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOptDouble(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setOptFloat(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOptInt32(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOptInt64(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOptUint32(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOptUint64(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readSint32());
      msg.setOptSint32(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readSint64());
      msg.setOptSint64(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setOptFixed32(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setOptFixed64(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setOptSfixed32(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setOptSfixed64(value);
      break;
    case 28:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOptBool(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setOptString(value);
      break;
    case 30:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOptBytes(value);
      break;
    case 31:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOptNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.examplecom.PrimitiveMessageV2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.examplecom.PrimitiveMessageV2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.examplecom.PrimitiveMessageV2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.examplecom.PrimitiveMessageV2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeSint32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeSint64(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeFixed32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeFixed64(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeSfixed32(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeSfixed64(
      12,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBool(
      13,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeBytes(
      15,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeDouble(
      16,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeFloat(
      17,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeInt32(
      18,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeInt64(
      19,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeUint32(
      20,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeUint64(
      21,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeSint32(
      22,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeSint64(
      23,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeFixed32(
      24,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeFixed64(
      25,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 26));
  if (f != null) {
    writer.writeSfixed32(
      26,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 27));
  if (f != null) {
    writer.writeSfixed64(
      27,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 28));
  if (f != null) {
    writer.writeBool(
      28,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 29));
  if (f != null) {
    writer.writeString(
      29,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 30));
  if (f != null) {
    writer.writeBytes(
      30,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 31));
  if (f != null) {
    writer.writeInt32(
      31,
      f
    );
  }
};


/**
 * required double my_double = 1;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getMyDouble = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setMyDouble = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearMyDouble = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasMyDouble = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required float my_float = 2;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getMyFloat = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setMyFloat = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearMyFloat = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasMyFloat = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int32 my_int32 = 3;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getMyInt32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setMyInt32 = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearMyInt32 = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasMyInt32 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required int64 my_int64 = 4;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getMyInt64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setMyInt64 = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearMyInt64 = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasMyInt64 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * required uint32 my_uint32 = 5;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getMyUint32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setMyUint32 = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearMyUint32 = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasMyUint32 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * required uint64 my_uint64 = 6;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getMyUint64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setMyUint64 = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearMyUint64 = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasMyUint64 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * required sint32 my_sint32 = 7;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getMySint32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setMySint32 = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearMySint32 = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasMySint32 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * required sint64 my_sint64 = 8;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getMySint64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setMySint64 = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearMySint64 = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasMySint64 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * required fixed32 my_fixed32 = 9;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getMyFixed32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setMyFixed32 = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearMyFixed32 = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasMyFixed32 = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * required fixed64 my_fixed64 = 10;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getMyFixed64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setMyFixed64 = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearMyFixed64 = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasMyFixed64 = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * required sfixed32 my_sfixed32 = 11;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getMySfixed32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setMySfixed32 = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearMySfixed32 = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasMySfixed32 = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * required sfixed64 my_sfixed64 = 12;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getMySfixed64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setMySfixed64 = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearMySfixed64 = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasMySfixed64 = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * required bool my_bool = 13;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getMyBool = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 13, false));
};


/** @param {boolean} value */
proto.examplecom.PrimitiveMessageV2.prototype.setMyBool = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearMyBool = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasMyBool = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * required string my_string = 14;
 * @return {string}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getMyString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.examplecom.PrimitiveMessageV2.prototype.setMyString = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearMyString = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasMyString = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * required bytes my_bytes = 15;
 * @return {!(string|Uint8Array)}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getMyBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * required bytes my_bytes = 15;
 * This is a type-conversion wrapper around `getMyBytes()`
 * @return {string}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getMyBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMyBytes()));
};


/**
 * required bytes my_bytes = 15;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMyBytes()`
 * @return {!Uint8Array}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getMyBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMyBytes()));
};


/** @param {!(string|Uint8Array)} value */
proto.examplecom.PrimitiveMessageV2.prototype.setMyBytes = function(value) {
  jspb.Message.setField(this, 15, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearMyBytes = function() {
  jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasMyBytes = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional double opt_double = 16;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getOptDouble = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 16, 0.0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setOptDouble = function(value) {
  jspb.Message.setField(this, 16, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearOptDouble = function() {
  jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasOptDouble = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional float opt_float = 17;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getOptFloat = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 17, 0.0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setOptFloat = function(value) {
  jspb.Message.setField(this, 17, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearOptFloat = function() {
  jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasOptFloat = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional int32 opt_int32 = 18;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getOptInt32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setOptInt32 = function(value) {
  jspb.Message.setField(this, 18, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearOptInt32 = function() {
  jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasOptInt32 = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional int64 opt_int64 = 19;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getOptInt64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setOptInt64 = function(value) {
  jspb.Message.setField(this, 19, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearOptInt64 = function() {
  jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasOptInt64 = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional uint32 opt_uint32 = 20;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getOptUint32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setOptUint32 = function(value) {
  jspb.Message.setField(this, 20, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearOptUint32 = function() {
  jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasOptUint32 = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional uint64 opt_uint64 = 21;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getOptUint64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setOptUint64 = function(value) {
  jspb.Message.setField(this, 21, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearOptUint64 = function() {
  jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasOptUint64 = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional sint32 opt_sint32 = 22;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getOptSint32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setOptSint32 = function(value) {
  jspb.Message.setField(this, 22, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearOptSint32 = function() {
  jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasOptSint32 = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional sint64 opt_sint64 = 23;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getOptSint64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setOptSint64 = function(value) {
  jspb.Message.setField(this, 23, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearOptSint64 = function() {
  jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasOptSint64 = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional fixed32 opt_fixed32 = 24;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getOptFixed32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setOptFixed32 = function(value) {
  jspb.Message.setField(this, 24, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearOptFixed32 = function() {
  jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasOptFixed32 = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional fixed64 opt_fixed64 = 25;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getOptFixed64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setOptFixed64 = function(value) {
  jspb.Message.setField(this, 25, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearOptFixed64 = function() {
  jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasOptFixed64 = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional sfixed32 opt_sfixed32 = 26;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getOptSfixed32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setOptSfixed32 = function(value) {
  jspb.Message.setField(this, 26, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearOptSfixed32 = function() {
  jspb.Message.setField(this, 26, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasOptSfixed32 = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional sfixed64 opt_sfixed64 = 27;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getOptSfixed64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setOptSfixed64 = function(value) {
  jspb.Message.setField(this, 27, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearOptSfixed64 = function() {
  jspb.Message.setField(this, 27, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasOptSfixed64 = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional bool opt_bool = 28;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getOptBool = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 28, false));
};


/** @param {boolean} value */
proto.examplecom.PrimitiveMessageV2.prototype.setOptBool = function(value) {
  jspb.Message.setField(this, 28, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearOptBool = function() {
  jspb.Message.setField(this, 28, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasOptBool = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional string opt_string = 29;
 * @return {string}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getOptString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/** @param {string} value */
proto.examplecom.PrimitiveMessageV2.prototype.setOptString = function(value) {
  jspb.Message.setField(this, 29, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearOptString = function() {
  jspb.Message.setField(this, 29, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasOptString = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional bytes opt_bytes = 30;
 * @return {!(string|Uint8Array)}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getOptBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * optional bytes opt_bytes = 30;
 * This is a type-conversion wrapper around `getOptBytes()`
 * @return {string}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getOptBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOptBytes()));
};


/**
 * optional bytes opt_bytes = 30;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOptBytes()`
 * @return {!Uint8Array}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getOptBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOptBytes()));
};


/** @param {!(string|Uint8Array)} value */
proto.examplecom.PrimitiveMessageV2.prototype.setOptBytes = function(value) {
  jspb.Message.setField(this, 30, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearOptBytes = function() {
  jspb.Message.setField(this, 30, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasOptBytes = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional int32 opt_NUMBER = 31;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV2.prototype.getOptNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/** @param {number} value */
proto.examplecom.PrimitiveMessageV2.prototype.setOptNumber = function(value) {
  jspb.Message.setField(this, 31, value);
};


proto.examplecom.PrimitiveMessageV2.prototype.clearOptNumber = function() {
  jspb.Message.setField(this, 31, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.PrimitiveMessageV2.prototype.hasOptNumber = function() {
  return jspb.Message.getField(this, 31) != null;
};


goog.object.extend(exports, proto.examplecom);
