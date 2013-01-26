exports.rot13 = rot13;
exports.rot = rot;

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
