
require('should');
require("assert");
var textify = require('../lib/textify'); 
textify.prototypeString();

describe('pigLatin', function() {
	describe('#toPigLatin()', function() {
		it('should return blank for no text', function() {
			textify.toPigLatin().should.eql('');
		});
		it('should return ay on a', function() {
			textify.toPigLatin('a').should.eql('ay');
		});
		it('should return hey on h', function() {
			textify.toPigLatin('h').should.eql('hay');
		});
		it('should return esttey on test', function() {
			textify.toPigLatin('test').should.eql('esttay');
		});
		it('should return correct on This is a test', function() {
			textify.toPigLatin('This is a test').should.eql('Isthay isay ay esttay');
		});
		it('should return correct on egg', function() {
			textify.toPigLatin('egg').should.eql('eggay');
		});
		it('should return ay on a on String object', function() {
			'a'.toPigLatin().should.eql('ay');
		});
		
	});
});