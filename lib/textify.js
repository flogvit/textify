
function prototypeString() {
	String.prototype.texturize = function() { return texturize(this.toString()) };
	String.prototype.toBinary = function() { return binary.toBinary(this.toString()) };
	String.prototype.fromBinary = function() { return binary.fromBinary(this.toString()) };
	String.prototype.rot13 = function() { return rot.rot13(this.toString()) };
	String.prototype.rot = function(num) { return rot.rot(this.toString(), num) };
	String.prototype.toHex = function(space) { return hex.toHex(this.toString(), space) };
	String.prototype.fromHex = function() { return hex.fromHex(this.toString()) };
	String.prototype.toLeet = function() { return leet.toLeet(this.toString()) };
	String.prototype.fromLeet = function() { return leet.fromLeet(this.toString()) };
	String.prototype.toMorse = function() { return morse.toMorse(this.toString()) };
	String.prototype.fromMorse = function() { return morse.fromMorse(this.toString()) };
	String.prototype.toRobberLanguage = function() { return robberLanguage.toRobberLanguage(this.toString()) };
	String.prototype.fromRobberLanguage = function() { return robberLanguage.fromRobberLanguage(this.toString()) };
	String.prototype.toPigLatin = function() { return pigLatin.toPigLatin(this.toString()) };
}

// *********************************************
// Exports
// *********************************************

// Export the possibility to add the library to String object
exports.prototypeString = prototypeString;

// Exports of the modules
var texturize = require("./modules/texturize").texturize;
exports.texturize = texturize;

var binary = require("./modules/binary");
exports.toBinary = binary.toBinary;
exports.fromBinary = binary.fromBinary;

var rot = require("./modules/rot");
exports.rot13 = rot.rot13;
exports.rot = rot.rot;

var hex = require("./modules/hex");
exports.toHex = hex.toHex;
exports.fromHex = hex.fromHex;

var leet = require("./modules/leet");
exports.toLeet = leet.toLeet;
exports.fromLeet = leet.fromLeet;

var morse = require("./modules/morse");
exports.toMorse = morse.toMorse;
exports.fromMorse = morse.fromMorse;

var robberLanguage = require("./modules/robberLanguage");
exports.toRobberLanguage = robberLanguage.toRobberLanguage;
exports.fromRobberLanguage = robberLanguage.fromRobberLanguage;

var pigLatin = require("./modules/pigLatin");
exports.toPigLatin = pigLatin.toPigLatin;

