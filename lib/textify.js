function texturize(text) {
		var words = text.split(/([\s,!.-]+)/);
        var result = '';
        for(var word in words) {
                result += texturize_word(words[word], 0);
        }
        return result;
}

function toBinary(text, wrap) {
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
	text = text.replace(" ", ""); // Remove spaces
	text = text.replace("\n", ""); // Remove linebreaks
	text = text.replace("\r", "");
	
	var result = '';
	var len = text.length;
	for(var pos=0;pos<len;pos+=8) {
		var char = String.fromCharCode(parseInt(text.substr(pos, 8), 2));
		result += char;
	}
	return result;
};

function rot13(text) {
	return rot(text, 13);
}

function rot(text, num) {
  return text.replace(/[a-zA-Z]/g, function(c) {
    return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + num) ? c : c - (num*2));
  });
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