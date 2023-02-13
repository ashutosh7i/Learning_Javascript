/**
 * Strings are a datatype used for storing and maniputlating text.
 * let text = "this is a string";
 * let text2 = 'this is a string too';
 * 
 * String properties-
 * string has several properties and they can be found using several methods-
 * 
 * Sting length- to find the length of a string.
 * let text = "atext";
 * let length = text.length;
 * Escape Character

Because strings must be written within quotes, JavaScript will misunderstand this string:
let text = "We are the so-called "Vikings" from the north.";

The string will be chopped to "We are the so-called ".

The solution to avoid this problem, is to use the backslash escape character.

The backslash (\) escape character turns special characters into string characters:
Code 	Result 	Description
\' 	' 	Single quote
\" 	" 	Double quote
\\ 	\ 	Backslash

The sequence \"  inserts a double quote in a string:

Example
let text = "We are the so-called \"Vikings\" from the north.";

The sequence \'  inserts a single quote in a string:

Example
let text= 'It\'s alright.';

The sequence \\  inserts a backslash in a string:

Example
let text = "The character \\ is called backslash.";

Six other escape sequences are valid in JavaScript:
Code 	Result
\b 	Backspace
\f 	Form Feed
\n 	New Line
\r 	Carriage Return
\t 	Horizontal Tabulator
\v 	Vertical Tabulator

*************************
string Methods- Self Explaiatory
String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
	String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()