# Textify

Node.js library to textify text.

[![Build Status](https://travis-ci.org/flogvit/textify.png)](https://travis-ci.org/flogvit/textify)

You can use it like

	var textify = require('textify');
	console.log(textify.texturize('This is a test'));
	
Or you can use the cli command
	
	textify -t "This is a test"

Or you can add it to String proto

	var textify = require('textify');
	textify.prototypeString();
	console.log('This is a test'.texturize());

You can find the trello board at: [Trello](https://trello.com/board/node-anagram/50e04535a776c1812d001d07)

### texturize(text)

Huamns can eaisly raed txet wehre the middle leettrs are shulffed.

This will create text like that as result.

	textify -t "This is a test"
	Result: Tihs is a tset

### toBinary(text, wrap)

This will convert your text to 8 bit binary numbers. **wrap** is a number for where
to add a linebreak in the output. Without is (default 0) you will get all on one line.

### fromBinary(text)

This will take the 8 bit binary text and return it as ascii text. All linebreaks and
spaces will be removed.

### rot13(text)

This will return the rot13 of the text. "This is a test" = "Guvf vf n grfg"

### rot(text, num)

This will return the rot(num) of the text. If you use rot(1) a will be b etc.
rot(text, 13) is the same as rot13(text)

### toLeet(text)

Will return l33t text in uppercase

### fromLeet(text)

Will convert l33t text to uppercase normal text.

### toMorse(text)

This will return the text in morse code

### fromMorse(text)

This will return the morse code as text. You can use both / and | as word delimiters.

### toHex(text, space)

This will return the text as hex. If you set **space** to true, it will return a space
between each numbers.

### fromHex(text)

This will return the text from the hex numbers

### toRobberLanguage(text)

This will return the text in Robber Language

test = totesostot

### fromRobberLanguage(text)

This will return the robber language text as plain text

### toPigLatin(text)

This will return the text in Pig Latin

## Cli

You can use textify from cli too. The module will add textify as a program. If you add the
module to global (npm install -g texify) you can probably find it in your path.

### Usage


	textify [-x|--tobinary <text> [-w|--wrap <number>]] 
	        [-z|--frombinary <text>]
	        [-t|--texturize <text>]
	        [-r|--rot13 <text>]
	        [-o|--rot <text> -n|--num <number>]
	        [-q|--toleet <text>]
	        [-y|--fromleet <text>]
	        [-m|--tomorse <text>]
	        [-k|--frommorse <text>]
	        [-i|--tohex <text> [-s]]
	        [-p|--fromhex <text>]
	        [-e|--torobber <text>]
	        [-u|--fromrobber <text>]
	        [-j|--topiglatin <text>]

## License

GNU GENERAL PUBLIC LICENSE

Version 3, 29 June 2007

[GPLv3](http://www.gnu.org/licenses/gpl-3.0.html)

Copyright (c) 2012-2013 Vegard Hanssen <Vegard.Hanssen@menneske.no>