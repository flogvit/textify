
require('should');
require("assert");
var textify = require('../lib/textify'); 

describe('textify', function() {
	describe('#toBinary()', function() {
		it('should return 01100001 for a', function() {
			textify.toBinary('a').should.eql('01100001');
		});
	});
});