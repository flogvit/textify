exports.toPigLatin = toPigLatin;
exports.funcs = {  'toPigLatin': 1 
				 };
				 
var functions = require("./functions");

function toPigLatin(text) {
	if (typeof text !== 'string') {
		return '';
	}
	var words = functions.splitIntoWords(text, true);
    var result = '';
    var re = new RegExp("^(["+functions.consonants+"]+)(.*)$");
    for(var wordpos in words) {
    	var word = words[wordpos];
    	var r = word.replace(re, function(a, b, c) {
    		if (functions.isUpperCase(b.charAt(0))) {
    			return functions.firstToUpperCase(c)+functions.firstToLowerCase(b)+"ay";
    		}
        	return c+b+"ay";
		});
		// If word not starting on consonant, only add ay at the end
		if (word==r && functions.isVowel(r.charAt(0))) {
			// return ay on a, not aay
			if (word == "a") {
				r = "";
			}
			r += "ay";
		}
		result += r;
    }
    return result;
}
