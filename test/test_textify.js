
require('should');
require("assert");
var textify = require('../lib/textify'); 
textify.prototypeString();

describe('textify', function() {
	describe('#prototypeString()', function() {
		it('should not throw exception on redefining prototypeString()', function() {
			textify.prototypeString();
		});
	 });
});