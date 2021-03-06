exports.texturize = texturize;
exports.funcs = {  'texturize': 1 
				 };
				 
var functions = require("./functions");

function texturize(text) {
	if (typeof text !== 'string') {
		return '';
	}
		var words = functions.splitIntoWords(text, true);
        var result = '';
        for(var word in words) {
                result += texturize_word(words[word], 0);
        }
        return result;
}


function texturize_word(text, docount) {
		if (text.length<4) {
			return text;
		}
		if (text.length==4) {
			return text.charAt(0)+text.charAt(2)+text.charAt(1)+text.charAt(3);
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
        chars = functions.shuffle(chars);
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


