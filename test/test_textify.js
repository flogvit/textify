
require('should');
require("assert");
var textify = require('../lib/textify'); 

describe('textify', function() {
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
	});
	
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
	});
	
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
	});
	
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
	});
	
		
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
	});
	
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
	});
	
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
		
	});
});