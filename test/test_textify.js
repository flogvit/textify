
require('should');
require("assert");
var textify = require('../lib/textify'); 

describe('textify', function() {
	describe('#toBinary()', function() {
		it('should return 01100001 for a', function() {
			textify.toBinary('a').should.eql('01100001');
		});
		it('should return a long string with linebreak for this is a test', function() {
			textify.toBinary('this is a test', 8).should.eql("01110100011010000110100101110011001000000110100101110011\n00100000011000010010000001110100011001010111001101110100");
		});
		it('should return a long string without linebreak for this is a test', function() {
			textify.toBinary('this is a test').should.eql("0111010001101000011010010111001100100000011010010111001100100000011000010010000001110100011001010111001101110100");
		});
		
	});
	describe('#fromBinary()', function() {
		it('should return a for 01100001', function() {
			textify.fromBinary('01100001').should.eql('a');
		});
		it('should return this is a test', function() {
			textify.fromBinary('0111010001101000011010010111001100100000011010010111001100100000011000010010000001110100011001010111001101110100').should.eql('this is a test');
		});
		it('should return this is a test without linebreak', function() {
			textify.fromBinary('01110100011010000110100101110011001000000110100101110011\n00100000011000010010000001110100011001010111001101110100').should.eql('this is a test');
		});
	});
	
	describe('#texturize()', function() {
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
	});
	
	describe('#rot13()', function() {
		it('should return n for a', function() {
			textify.rot13('a').should.eql('n');
		});
		it('should return Guvf vf n grfg', function() {
			textify.rot13('This is a test').should.eql('Guvf vf n grfg');
		});
	});
	
	describe('#rot()', function() {
		it('should return b for a on rot(1)', function() {
			textify.rot('a', 1).should.eql('b');
		});
		it('should return the same for rot(13) as rot13()', function() {
			textify.rot('This is a test', 13).should.eql(textify.rot13('This is a test'));
		});
	});
});