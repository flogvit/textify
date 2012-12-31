# Textify

Node.js library to textify text.

[![Build Status](https://travis-ci.org/flogvit/textify.png)](https://travis-ci.org/flogvit/textify)


### toBinary(text, wrap)

This will convert your text to 8 bit binary numbers. **wrap** is a number for where
to add a linebreak in the output. Without is (default 0) you will get all on one line.

### fromBinary(text)

This will take the 8 bit binary text and return it as ascii text. All linebreaks and
spaces will be removed.
