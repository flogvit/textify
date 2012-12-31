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

exports.toBinary = toBinary;
exports.fromBinary = fromBinary;