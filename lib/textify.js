
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
		if (!String.prototype.hasOwnProperty(func)) {
			var proto = "Object.defineProperty(String.prototype, "
				+"'"+func+"',"
				+"{value: function(params){ return mods['"+mod+"']."+func+"(this.toString(), params);},"
				+"enumerable: false})";
			eval(proto);
		}
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

