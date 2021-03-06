exports.toLeet = toLeet;
exports.fromLeet = fromLeet;
exports.funcs = {  'toLeet': 1 
				 , 'fromLeet': 2
				 };
				 
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

