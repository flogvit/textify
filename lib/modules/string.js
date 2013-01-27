/**
  * This module is for standard string prototyping
  * 
  */
  
exports.reverse = reverse;
exports.trim = trim;
exports.stripNonAlpha = stripNonAlpha;
exports.stripVocals = stripVocals;
exports.stripConsonants = stripConsonants;
exports.funcs = {  'reverse': 1
				 , 'trim': 1
				 , 'stripNonAlpha': 1
				 , 'stripVocals': 1
				 , 'stripConsonants': 1
				};
	
/**
  * Init
  *
  */
var functions = require('./functions');
var vocals_re = new RegExp("["+functions.vocals+" ]+", "g");
var consonants_re = new RegExp("["+functions.consonants+" ]+", "g");
	
/**
  * Reverse the text
  *
  * @param {String} text
  * @return {String}
  */		
function reverse(text) {
	if (typeof text !== 'string') {
		return '';
	}
	return text.split( '' ).reverse().join( '' );
}

/**
  * Trim the text
  *
  * @param {String} text
  * @return {String}
  */	
function trim(text) {
	if (typeof text !== 'string') {
		return '';
	}
	return text.replace(/^\s*/, "").replace(/\s*$/, "");
}

/**
  * Strip of all other than a-z in the text
  *
  * @param {String} text
  * @return {String}
  */	

function stripNonAlpha(text) {
	if (typeof text !== 'string') {
		return '';
	}
	return text.replace(/[^A-Za-z ]+/g, "");
}

/**
  * Strip of all vocals in the text
  *
  * @param {String} text
  * @return {String}
  */	

function stripVocals(text) {
	if (typeof text !== 'string') {
		return '';
	}
	return text.replace(vocals_re, function(a,b) {
		return "";
	});
}

/**
  * Strip of all consonants in the text
  *
  * @param {String} text
  * @return {String}
  */	

function stripConsonants(text) {
	if (typeof text !== 'string') {
		return '';
	}
	return text.replace(consonants_re, function(a,b) {
		return "";
	});
}
