/**
  * This module is for standard string prototyping
  * 
  */
  
exports.reverse = reverse;
exports.trim = trim;
exports.ltrim = ltrim;
exports.rtrim = rtrim;
exports.stripNonAlpha = stripNonAlpha;
exports.stripVowels = stripVowels;
exports.stripConsonants = stripConsonants;
exports.funcs = {  'reverse': 1
				 , 'trim': 1
				 , 'ltrim': 1
				 , 'rtrim': 1
				 , 'stripNonAlpha': 1
				 , 'stripVowels': 1
				 , 'stripConsonants': 1
				};
	
/**
  * Init
  *
  */
var functions = require('./functions');
var vowels_re = new RegExp("["+functions.vowels+" ]+", "g");
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
  * Left trim the text
  *
  * @param {String} text
  * @return {String}
  */	
function ltrim(text) {
	if (typeof text !== 'string') {
		return '';
	}
	return text.replace(/^\s*/, "");
}

/**
  * Right trim the text
  *
  * @param {String} text
  * @return {String}
  */	
function rtrim(text) {
	if (typeof text !== 'string') {
		return '';
	}
	return text.replace(/\s*$/, "");
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
  * Strip of all vowels in the text
  *
  * @param {String} text
  * @return {String}
  */	

function stripVowels(text) {
	if (typeof text !== 'string') {
		return '';
	}
	return text.replace(vowels_re, function(a,b) {
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
