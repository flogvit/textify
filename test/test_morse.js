
require('should');
require("assert");
var textify = require('../lib/textify'); 
textify.prototypeString();

describe('morse', function() {
	describe('#toMorse()', function() {
		it('should return blank for no text', function() {
			textify.toMorse().should.eql('');
		});
		it('should return the correct morse for a', function() {
			textify.toMorse('a').should.eql('.-');
		});
		it('should return the correct morse for this is a test', function() {
			textify.toMorse('This is a test').should.eql('- .... .. ... / .. ... / .- / - . ... -');
		});
		it('should handle linebreak correctly', function() {
			textify.toMorse('This\nis\na\ntest').should.eql('- .... .. ...\n.. ...\n.-\n- . ... -');
		});
		it('should return the correct morse for a on String object', function() {
			'a'.toMorse().should.eql('.-');
		});
		
	});
	
	describe('#fromMorse()', function() {
		it('should return blank for no text', function() {
			textify.fromMorse().should.eql('');
		});
		it('should return a for the morse .-', function() {
			textify.fromMorse('.-').should.eql('a');
		});
		it('should return correct line for morse this is a test', function() {
			textify.fromMorse('- .... .. ... / .. ... / .- / - . ... -').should.eql('this is a test');
		});
		it('should handle linebreak correctly', function() {
			textify.fromMorse('- .... .. ...\n.. ...\n.-\n- . ... -').should.eql('this\nis\na\ntest');
		});
		it('should return a for the morse .- on String object', function() {
			'.-'.fromMorse().should.eql('a');
		});
		
	});
});