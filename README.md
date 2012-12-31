# Textify

Node.js library to textify text.

[![Build Status](https://travis-ci.org/flogvit/textify.png)](https://travis-ci.org/flogvit/textify)

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

## Cli

You can use textify from cli too. The module will add textify as a program. If you add the
module to global (npm install -g texify) you can probably find it in your path.

### Usage


	textify [-x|--tobinary <text> [-w|--wrap <number>]] 
	        [-z|--frombinary <text>]
	        [-t|--texturize <text>]
	        [-r|--rot13 <text>]
	        [-o|--rot <text> -n|--num <number>]

## License

GNU GENERAL PUBLIC LICENSE

Version 3, 29 June 2007

[GPLv3](http://www.gnu.org/licenses/gpl-3.0.html)

Copyright (c) 2012-2013 Vegard Hanssen <Vegard.Hanssen@menneske.no>