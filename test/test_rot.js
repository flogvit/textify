
require('should');
require("assert");
var textify = require('../lib/textify'); 
textify.prototypeString();

describe('rot', function() {
	describe('#rot13()', function() {
		it('should return blank for no text', function() {
			textify.rot13().should.eql('');
		});
		it('should return n for a', function() {
			textify.rot13('a').should.eql('n');
		});
		it('should return Guvf vf n grfg', function() {
			textify.rot13('This is a test').should.eql('Guvf vf n grfg');
		});
		it('should return n for a on String object', function() {
			'a'.rot13().should.eql('n');
		});
		
	});
	
	describe('#rot()', function() {
		it('should return blank for no text', function() {
			textify.rot().should.eql('');
		});
		it('should return rot13 if not num is set', function() {
			textify.rot('a').should.eql('n');
		});
		it('should return b for a on rot(1)', function() {
			textify.rot('a', 1).should.eql('b');
		});
		it('should return the same for rot(13) as rot13()', function() {
			textify.rot('This is a test', 13).should.eql(textify.rot13('This is a test'));
		});
		it('should return b for a on rot(1) on String object', function() {
			'a'.rot(1).should.eql('b');
		});
		
	});
});