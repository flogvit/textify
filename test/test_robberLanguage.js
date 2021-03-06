
require('should');
require("assert");
var textify = require('../lib/textify'); 
textify.prototypeString();

describe('robberLanguage', function() {
	describe('#toRobberLanguage()', function() {
		it('should return blank for no text', function() {
			textify.toRobberLanguage().should.eql('');
		});
		it('should return bob on b', function() {
			textify.toRobberLanguage('b').should.eql('bob');
		});
		it('should return Bob on B', function() {
			textify.toRobberLanguage('B').should.eql('Bob');
		});
		it('should return correct on This is a test', function() {
			textify.toRobberLanguage('This is a test').should.eql('Tothohisos isos a totesostot');
		});
		it('should return linebreak etc', function() {
			textify.toRobberLanguage('This.\nis\na\ntest').should.eql('Tothohisos.\nisos\na\ntotesostot');
		});
		it('should return bob on b on String object', function() {
			'b'.toRobberLanguage().should.eql('bob');
		});
		
	});
	
	describe('#fromRobberLanguage()', function() {
		it('should return blank for no text', function() {
			textify.fromRobberLanguage().should.eql('');
		});
		it('should return b on bob', function() {
			textify.fromRobberLanguage('bob').should.eql('b');
		});
		it('should return B on Bob', function() {
			textify.fromRobberLanguage('Bob').should.eql('B');
		});
		it('should return B on BOB', function() {
			textify.fromRobberLanguage('BOB').should.eql('B');
		});
		it ('should return bob on bobobob', function() {
			textify.fromRobberLanguage('bobobob').should.eql('bob');
		});
		it('should return correct on This is a test', function() {
			textify.fromRobberLanguage('Tothohisos isos a totesostot').should.eql('This is a test');
		});
		it('should return linebreak etc', function() {
			textify.fromRobberLanguage('Tothohisos.\nisos\na\ntotesostot').should.eql('This.\nis\na\ntest');
		});
		it('should return b on bob on String object', function() {
			'bob'.fromRobberLanguage().should.eql('b');
		});
		
	});
});