
require('should');
require("assert");
var textify = require('../lib/textify'); 
textify.prototypeString();

describe('string', function() {
	describe('#reverse()', function() {
		it('should return blank for no text', function() {
			textify.reverse().should.eql('');
		});
		it('should return reverse of test', function() {
			textify.reverse('test').should.eql('tset');
		});
		it('should return reverse of test on String object', function() {
			'test'.reverse().should.eql('tset');
		});
	});
	
	describe('#trim()', function() {
		it('should return blank for no text', function() {
			textify.trim().should.eql('');
		});
		it('should return trim of test', function() {
			textify.trim(' test ').should.eql('test');
		});
		it('should return trim of test on String object', function() {
			' test '.trim().should.eql('test');
		});
	});
	
	describe('#ltrim()', function() {
		it('should return blank for no text', function() {
			textify.ltrim().should.eql('');
		});
		it('should return ltrim of test', function() {
			textify.ltrim(' test ').should.eql('test ');
		});
		it('should return ltrim of test on String object', function() {
			' test '.ltrim().should.eql('test ');
		});
	});

	describe('#rtrim()', function() {
		it('should return blank for no text', function() {
			textify.rtrim().should.eql('');
		});
		it('should return rtrim of test', function() {
			textify.rtrim(' test ').should.eql(' test');
		});
		it('should return rtrim of test on String object', function() {
			' test '.rtrim().should.eql(' test');
		});
	});

	describe('#stripNonAlpha()', function() {
		it('should return blank for no text', function() {
			textify.stripNonAlpha().should.eql('');
		});
		it('should return strip of 111test111', function() {
			textify.stripNonAlpha('111test111').should.eql('test');
		});
		it('should return strip of 111test111 on String object', function() {
			'111test111'.stripNonAlpha().should.eql('test');
		});
	});

	describe('#stripVowels()', function() {
		it('should return blank for no text', function() {
			textify.stripVowels().should.eql('');
		});
		it('should return strip of abcdefghijklmnopqrstuvwxyz', function() {
			textify.stripVowels('abcdefghijklmnopqrstuvwxyz').should.eql('bcdfghjklmnpqrstvwxz');
		});
		it('should return strip of abcdefghij on String object', function() {
			'abcdefghij'.stripVowels().should.eql('bcdfghj');
		});
	});

	describe('#stripConsonants()', function() {
		it('should return blank for no text', function() {
			textify.stripConsonants().should.eql('');
		});
		it('should return strip of abcdefghijklmnopqrstuvwxyz', function() {
			textify.stripConsonants('abcdefghijklmnopqrstuvwxyz').should.eql('aeiouy');
		});
		it('should return strip of abcdefghi on String object', function() {
			'abcdefghij'.stripConsonants().should.eql('aei');
		});
	});
	
});