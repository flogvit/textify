var vocals = "aeiouyæøåAEIOUYÆØÅ";
var vocals_array = {};
var consonants = "bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVQWXZ";

for(var pos=0;pos<vocals.length;pos++) {
	vocals_array[vocals.substr(pos, 1)] = 1;
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

function isVocal(char) {
	if (vocals_array[char]) {
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

exports.splitIntoWords = splitIntoWords;
exports.shuffle = shuffle;
exports.isVocal = isVocal;
exports.isUpperCase = isUpperCase;
exports.isLowerCase = isLowerCase;
exports.firstToLowerCase = firstToLowerCase;
exports.firstToUpperCase = firstToUpperCase;
exports.consonants = consonants;