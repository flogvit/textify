exports.toMorse = toMorse;
exports.fromMorse = fromMorse;
exports.funcs = {  'toMorse': 1 
				 , 'fromMorse': 1
				 };
				 
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
