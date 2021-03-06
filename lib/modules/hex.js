exports.toHex = toHex;
exports.fromHex = fromHex;
exports.funcs = {  'toHex': 2 
				 , 'fromHex': 1
				 };
				 
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
