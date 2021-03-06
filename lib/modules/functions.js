var vowels = "aeiouyæøåAEIOUYÆØÅ";
var vowels_array = {};
var consonants = "bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVQWXZ";
var consonants_array = {};

for(var pos=0;pos<vowels.length;pos++) {
	vowels_array[vowels.substr(pos, 1)] = 1;
}

for(var pos=0;pos<consonants.length;pos++) {
	consonants_array[consonants.substr(pos, 1)] = 1;
}

function prototypeString(funcs) {
	for(var func in funcs) {
	    Object.defineProperty(String.prototype, func,
	    {
			value: function() { 
				return func(this.toString()) 
			},
			enumerable: false
		});
	}
}

function splitIntoWords(text, include) {
	if (include) {
		return text.split(/([\s,!.-]+)/);
	}
	return text.split(/[\s,!.-]+/);
}

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function isVowel(char) {
	if (vowels_array[char]) {
		return true;
	}
	return false;
}

function isConsonant(char) {
	if (consonant_array[char]) {
		return true;
	}
	return false;
}

function isUpperCase(char) {
	if (char==char.toUpperCase()) {
		return true;
	}
	return false;
}

function isLowerCase(char) {
	if (char==char.toLowerCase()) {
		return true;
	}
	return false;
}

function firstToLowerCase(line) {
	return line.charAt(0).toLowerCase()+line.substr(1);
}

function firstToUpperCase(line) {
	return line.charAt(0).toUpperCase()+line.substr(1);
}

function consonants() {
	return consonants;
}

function vowels() {
	return vowels;
}

exports.splitIntoWords = splitIntoWords;
exports.shuffle = shuffle;
exports.isVowel = isVowel;
exports.isConsonant = isConsonant;
exports.isUpperCase = isUpperCase;
exports.isLowerCase = isLowerCase;
exports.firstToLowerCase = firstToLowerCase;
exports.firstToUpperCase = firstToUpperCase;
exports.consonants = consonants;
exports.vowels = vowels;
exports.prototypeString = prototypeString;