exports.toRobberLanguage = toRobberLanguage;
exports.fromRobberLanguage = fromRobberLanguage;
exports.funcs = {  'toRobberLanguage': 1 
				 , 'fromRobberLanguage': 1
				 };
				 
var functions = require("./functions");

function toRobberLanguage(text) {
	if (typeof text !== 'string') {
		return '';
	}
	var re = new RegExp("["+functions.consonants+"]", "g");
	return text.replace(re, function(c) {
		return c+"o"+c.toLowerCase();
	});
}

function fromRobberLanguage(text) {
	if (typeof text !== 'string') {
		return '';
	}
	return text.replace(/.[oO]./g, function(c) {
		return c.charAt(0).toLowerCase()==c.charAt(2).toLowerCase() ? c.charAt(0) : c;
	});	
}
