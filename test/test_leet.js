
require('should');
require("assert");
var textify = require('../lib/textify'); 
textify.prototypeString();

describe('leet', function() {
	describe('#toLeet()', function() {
		it('should return blank for no text', function() {
			textify.toLeet().should.eql('');
		});
		it('should return correct word', function() {
			textify.toLeet('test').should.eql('7357');
		});
		it('should return all changed', function() {
			textify.toLeet('tisaeob').should.eql('7154308');
		});
		it('should return correct changed', function() {
			textify.toLeet('abcdefghijklmnopqrstuvwxyz').should.eql('48CD3FGH1JKLMN0PQR57UVWXYZ');
		});
		it('should return correct word on String object', function() {
			'test'.toLeet().should.eql('7357');
		});
		
	});
	
	describe('#fromLeet()', function() {
		it('should return blank for no text', function() {
			textify.fromLeet().should.eql('');
		});
		it('should return correct word', function() {
			textify.fromLeet('7357').should.eql('TEST');
		});
		it('should return all changed', function() {
			textify.fromLeet('0134578').should.eql('OIEASTB');
		});
		it('should return correct changed', function() {
			textify.fromLeet('48CD3FGH1JKLMN0PQR57UVWXYZ').should.eql('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
		});
		it('should return correct word on String object', function() {
			'7357'.fromLeet().should.eql('TEST');
		});
		
	});
});