
// JavaScript has 8 Datatypes

// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object
// The Object Datatype

// The object data type can contain:

// 1. An object
// 2. An array
// 3. A date

// JavaScript Types are Dynamic

// JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
// Example
// let x;       // Now x is undefined
// x = 5;       // Now x is a Number
// x = "John";  // Now x is a String 

// JavaScript Strings

// A string (or a text string) is a series of characters like "John Doe".

// Strings are written with quotes. You can use single or double quotes:
// Example
// // Using double quotes:
// let carName1 = "Volvo XC60";

// // Using single quotes:
// let carName2 = 'Volvo XC60';

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
// Example
// // Single quote inside double quotes:
// let answer1 = "It's alright";

// // Single quotes inside double quotes:
// let answer2 = "He is called 'Johnny'";

// // Double quotes inside single quotes:
// let answer3 = 'He is called "Johnny"';


// // With decimals:
// let x1 = 34.00;

// // Without decimals:
// let x2 = 34; 

// Exponential Notation

// Extra large or extra small numbers can be written with scientific (exponential) notation:
// Example
// let y = 123e5;    // 12300000
// let z = 123e-5;   // 0.00123 

// JavaScript BigInt is a new datatype (2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.
// Example
// let x = BigInt("123456789012345678901234567890");

// JavaScript Arrays
// JavaScript arrays are written with square brackets.
// Array items are separated by commas.
// The following code declares (creates) an array called cars, containing three items (car names):
// Example
// const cars = ["Saab", "Volvo", "BMW"];
// Array indexes are zero-based, which means the first item is [0], second is [1], and so on.

// JavaScript Objects
// JavaScript objects are written with curly braces {}.
// Object properties are written as name:value pairs, separated by commas.
// Example
let variable = 10;
const person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};//same as c++

console.log(person.firstName+"\n"+person.age);

// The typeof Operator
// You can use the JavaScript typeof operator to find the type of a JavaScript variable.
// The typeof operator returns the type of a variable or an expression:
// Example
console.log(typeof variable);
console.log(typeof person);