
/**
 * Modules included
 */
var modules = require("./modules/modules");
			
/**
  * Module objects
  */
var mods = {};

/**
  * All functions
  */
var funcs = {};

/**
 * Add methods to String prototype
 * 
 * Examples:
 *
 *		textify.prototypeString(); // prototype all methods
 *		textify.prototypeString("texturize"); // prototype texturize method
 *		'test'.texturize();
 *
 * @param {String} method
 * @return {null}
 */ 
 
function prototypeString(method) {
	for(var func in funcs) {
		if (method !== undefined && func != method) {
			continue;
		}
		var mod = funcs[func];
		var pcount = mods[mod].funcs[func];
		var exp = "String.prototype."+func+" = function(";
		var params = [];
		for(var n=1;n<pcount;n++) {
			params.push("p"+n);
		}
		exp += params.join(",");
		// TODO:
		// Need a rewrite of this for faster lookup
		exp += ") { return mods['"+mod+"']."+func+"(this.toString()";
		if (pcount>1) {
			exp += ", "+params.join(",");
		}
		exp += ") }";
		eval(exp);
	}
}

// Export the possibility to add the library to String object
exports.prototypeString = prototypeString;


// *********************************************
// Exports
// *********************************************

for(var modpos in modules) {
	mod = modules[modpos];
	mods[mod] = require("./modules/"+mod);
	for(var func in mods[mod].funcs) {
		funcs[func] = mod;
		var exp = "exports."+func+" = mods['"+mod+"']."+func;
		eval(exp);
	}
}

