// **********************************************************
// Init variables
// **********************************************************

var toLeetArray = {  'T': '7'
				   , 'I': '1'
				   , 'S': '5'
				   , 'A': '4'
				   , 'E': '3'
				   , 'O': '0'
				   , 'B': '8'
				   };
var fromLeetArray = {};
for(var key in toLeetArray) {
	fromLeetArray[toLeetArray[key]] = key;
}

var morseFrom = {  '.-': 'a'
                 , '-...': 'b'
                 , '-.-.': 'c'
                 , '-..': 'd'
                 , '.': 'e'
                 , '..-.': 'f'
                 , '--.': 'g'
                 , '....': 'h'
                 , '..': 'i'
                 , '.---': 'j'
                 , '-.-': 'k'
                 , '.-..': 'l'
                 , '--': 'm'
                 , '-.': 'n'
                 , '---': 'o'
                 , '.--.': 'p'
                 , '--.-': 'q'
                 , '.-.': 'r'
                 , '...': 's'
                 , '-': 't'
                 , '..-': 'u'
                 , '...-': 'v'
                 , '.--': 'w'
                 , '-..-': 'x'
                 , '-.--': 'y'
                 , '--..': 'z'
                 , '-----': '0'
                 , '.----': '1'
                 , '..---': '2'
                 , '...--': '3'
                 , '....-': '4'
                 , '.....': '5'
                 , '-....': '6'
                 , '--...': '7'
                 , '---..': '8'
                 , '----.': '9'
                 , '.-.-.-': '.'
                 , '--..--': ','
                 , '..--..': '?'
                 , '.----.': "'"
                 , '-.-.--': '!'
                 , '-..-.': '/'
                 , '-.--.': '('
                 , '-.--.-': ')'
                 , '.-...': '&'
                 , '---...': ':'
                 , '_._._.': ';'
                 , '-...-': '='
                 , '.-.-.': '+'
                 , '-....-': '-'
                 , '..--.-': '_'
                 , '.-..-.': '"'
                 , '...-..-': '$'
                 , '.--.-.': '@'
                 , '.-.-': 'æ'
                 , '.--.-': 'å'
                 , '---.': 'ø'
                };

var morseTo = {};
for(var key in morseFrom) {
	morseTo[morseFrom[key]] = key;
}

// ***********************************************************
// Export functions
// ***********************************************************

function texturize(text) {
	if (typeof text !== 'string') {
		return '';
	}
		var words = text.split(/([\s,!.-]+)/);
        var result = '';
        for(var word in words) {
                result += texturize_word(words[word], 0);
        }
        return result;
}

function toHex(text, space) {
	if (typeof text !== 'string') {
		return '';
	}
	if (space === undefined) {
		space = false;
	}
	if (typeof space !== 'boolean') {
		space = false;
	}
	text = text.replace(/\r/g, '');
	var result = '';
	var len = text.length;
	var notFirstChar = false;
	for(var pos=0;pos<len;pos++) {
		var char = text.charCodeAt(pos);
		if (char == 10) {
			result += "\n";
			notFirstChar = false;
		} else {
			if (space && notFirstChar) {
				result += " ";
			}
			notFirstChar = true;
			result += char.toString(16);
		}
	}
	return result;
	
}

function fromHex(text) {
	if (typeof text !== 'string') {
		return '';
	}
	text = text.replace(/ /g, ""); // Remove spaces
	text = text.replace(/\r/g, "");
	var result = '';
	var lines = text.split("\n");
	for(var lpos in lines) {
		if (lpos>0) {
			result += "\n";
		}
		var line = lines[lpos];
		var len = line.length;
		for(var pos=0;pos<len;pos+=2) {
			var char = String.fromCharCode(parseInt(line.substr(pos, 2), 16));
			result += char;
		}
	}
	return result;
};

function toBinary(text, wrap) {
	if (typeof text !== 'string') {
		return '';
	}
	if (wrap === undefined) {
		wrap = 0;
	}
	var result = '';
	var len = text.length;
	for(var pos=0;pos<len;pos++) {
		var num = text.charCodeAt(pos).toString(2);
		while(num.length<8) num = '0'+num;
		result += num;
		if (wrap>0 && ((pos+1)%(wrap-1))==0) {
			if (pos<len-1) { // Don't add linebreak as last character
				result += "\n";
			}
		}	
	}
	return result;
};

function fromBinary(text) {
	if (typeof text !== 'string') {
		return '';
	}
	text = text.replace(/ /g, ""); // Remove spaces
	text = text.replace(/\n/g, ""); // Remove linebreaks
	text = text.replace(/\r/g, "");
	
	var result = '';
	var len = text.length;
	for(var pos=0;pos<len;pos+=8) {
		var char = String.fromCharCode(parseInt(text.substr(pos, 8), 2));
		result += char;
	}
	return result;
};

function rot13(text) {
	if (typeof text !== 'string') {
		return '';
	}
	return rot(text, 13);
}

function rot(text, num) {
 	if (typeof text !== 'string') {
		return '';
	}
	if (num === undefined) {
		num = 13;
	}
  	return text.replace(/[a-zA-Z]/g, function(c) {
    	return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + num) ? c : c - (num*2));
  	});
}

function toLeet(text) {
	if (typeof text !== 'string') {
		return '';
	}
	return text.toUpperCase().replace(/[TISAEOB]/g, function(c) {
		return toLeetArray[c];
	});
}

function fromLeet(text) {
	if (typeof text !== 'string') {
		return '';
	}
	return text.toUpperCase().replace(/[0134578]/g, function(c) {
		return fromLeetArray[c];
	});
	
}

function toMorse(text) {
	if (typeof text !== 'string') {
		return '';
	}
	var result = '';
	text = text.replace(/\r/g, '');
	text = text.toLowerCase();
	var len = text.length;
	var lastIsLetter = false;
	for(var pos=0;pos<len;pos++) {
		var char = text.charAt(pos);
		if (char in morseTo) {
			if (lastIsLetter) {
				result += " ";
			}
			result += morseTo[char];
			lastIsLetter = true;
		} else if (char == "\n") {
			result += "\n";
			lastIsLetter = false;
		} else if (char == " ") {
			result += " / ";
			lastIsLetter = false;
		} else {
			result += "?";
			lastIsLetter = false;
		}
	}
	return result;
}

function fromMorse(text) {
	if (typeof text !== 'string') {
		return '';
	}
	text = text.replace(/\|/g, '/');
	text = text.replace(/\r/g, "");
	text = text.replace(/_/g, "-");
	
	var result = '';
	var lines = text.split("\n");
	for(var pos in lines) {
		if (pos>0) {
			result += "\n";
		}
		var words = lines[pos].split("/");
		for(var wpos in words) {
			if (wpos>0) {
				result += " ";
			}
			var letters = words[wpos].split(" ");
			var lc = 0;
			for(var lpos in letters) {
				if(letters[lpos] in morseFrom) {
					result += morseFrom[letters[lpos]];
				}
			}
		}
	}
	return result;
}

// *********************************************
// Helper functions
// *********************************************

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function texturize_word(text, docount) {
		if (text.length<4) {
			return text;
		}
        var result = '';
        var last = '';
        var count = 2;
        if (text.length<6) { count=1; }
        var chars = text.split("");
        for(var i=0;i<count;i++) {
                result += chars.shift();
        }
        for(var i=0;i<count;i++) {
        		if (chars.length>0) {
                	last += chars.pop()+last;
                }
        }
        chars = shuffle(chars);
        for(var char in chars) {
                result += chars[char];
        }
        if (last.length>0) {
        	result += last;
        }
        
        // If we get the same text back, try 5 times to change again
        if (docount<5 && text.length>(count*2)+1) {
                if (text == result) {
                        result = texturize_word(text, docount+1);
                }
        }
        return result;
}


// *********************************************
// Exports
// *********************************************

exports.toBinary = toBinary;
exports.fromBinary = fromBinary;
exports.texturize = texturize;
exports.rot13 = rot13;
exports.rot = rot;
exports.toLeet = toLeet;
exports.fromLeet = fromLeet;
exports.toMorse = toMorse;
exports.fromMorse = fromMorse;
exports.toHex = toHex;
exports.fromHex = fromHex;