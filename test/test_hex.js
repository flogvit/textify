
require('should');
require("assert");
var textify = require('../lib/textify'); 
textify.prototypeString();
describe('hex', function() {
	describe('#toHex()', function() {
		it('should return blank for no text', function() {
			textify.toHex().should.eql('');
		});
		it('should return 41 for A', function() {
			textify.toHex('A').should.eql('41');
		});
		it('should return correct on This is a test', function() {
			textify.toHex('This is a test').should.eql('5468697320697320612074657374');
		});
		it('should return correct with space on This is a test', function() {
			textify.toHex('This is a test', true).should.eql('54 68 69 73 20 69 73 20 61 20 74 65 73 74');
		});
		it('should return correct on linebreak', function() {
			textify.toHex('This\nis\na\ntest').should.eql('54686973\n6973\n61\n74657374');
		});
		it('should return 41 for A on String object', function() {
			'A'.toHex().should.eql('41');
		});
		
	});
	
	describe('#fromHex()', function() {
		it('should return blank for no text', function() {
			textify.fromHex().should.eql('');
		});
		it('should return A for 41', function() {
			textify.fromHex('41').should.eql('A');
		});
		it('should return correct on This is a test', function() {
			textify.fromHex('5468697320697320612074657374').should.eql('This is a test');
		});
		it('should return correct with space on This is a test', function() {
			textify.fromHex('54 68 69 73 20 69 73 20 61 20 74 65 73 74').should.eql('This is a test');
		});
		it('should return correct on linebreak', function() {
			textify.fromHex('54686973\n6973\n61\n74657374').should.eql('This\nis\na\ntest');
		});
		it('should work on both lowercase and uppercase', function() {
			textify.fromHex('f8').should.eql('ø');
			textify.fromHex('F8').should.eql('ø');
		});
		it('should return A for 41 on String object', function() {
			'41'.fromHex().should.eql('A');
		});
		
	});
});
