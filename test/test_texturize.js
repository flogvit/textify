
require('should');
require("assert");
var textify = require('../lib/textify'); 
textify.prototypeString();

describe('texturize', function() {
	describe('#texturize()', function() {
		it('should return blank for no text', function() {
			textify.texturize().should.eql('');
		});
		it('should return the same for short words as a, be, let', function() {
			textify.texturize('a').should.eql('a');
			textify.texturize('be').should.eql('be');
			textify.texturize('let').should.eql('let');
		});
		it('should not equal the same word', function() {
			textify.texturize('testing').should.not.eql('testing');
		});
		it('should equal the same for split', function() {
			textify.texturize('let it be').should.eql('let it be');
		});
		it('should remember sentence split', function() {
			textify.texturize('let, it! be.').should.eql('let, it! be.');
		});
		it('should not be the same for sentence with words longer than 3 characters', function() {
			textify.texturize('This is a test').should.not.eql('This is a test');
		});
		it('should return the same for 4 letters with same characters in the middle', function() {
			textify.texturize('izzy').should.eql('izzy');
		});
		it('should return swap on middle letters with 4 letters', function() {
			textify.texturize('test').should.eql('tset');
		});
		it('should return texturized text on string object', function() {
			'test'.texturize().should.eql('tset');
		});
	});
});