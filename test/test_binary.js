require('should');
require("assert");
var textify = require('../lib/textify'); 
textify.prototypeString();

describe('binary', function() {
	describe('#toBinary()', function() {
		it('should return blank for no text', function() {
			textify.toBinary().should.eql('');
		});
		it('should return 01100001 for a', function() {
			textify.toBinary('a').should.eql('01100001');
		});
		it('should return a long string with linebreak for this is a test', function() {
			textify.toBinary('this is a test', 8).should.eql("01110100011010000110100101110011001000000110100101110011\n00100000011000010010000001110100011001010111001101110100");
		});
		it('should return a long string without linebreak for this is a test', function() {
			textify.toBinary('this is a test').should.eql("0111010001101000011010010111001100100000011010010111001100100000011000010010000001110100011001010111001101110100");
		});
		it('should return 01100001 for a on string object', function() {
			'a'.toBinary().should.eql('01100001');
		});
		
	});
	describe('#fromBinary()', function() {
		it('should return blank for no text', function() {
			textify.fromBinary().should.eql('');
		});
		it('should return a for 01100001', function() {
			textify.fromBinary('01100001').should.eql('a');
		});
		it('should return this is a test', function() {
			textify.fromBinary('0111010001101000011010010111001100100000011010010111001100100000011000010010000001110100011001010111001101110100').should.eql('this is a test');
		});
		it('should return this is a test without linebreak', function() {
			textify.fromBinary('01110100011010000110100101110011001000000110100101110011\n00100000011000010010000001110100011001010111001101110100').should.eql('this is a test');
		});
		it('should return a for 01100001 on string object', function() {
			'01100001'.fromBinary().should.eql('a');
		});
		
	});
});