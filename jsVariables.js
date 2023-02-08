/* 
variables are container to store data.

in js there are 3 type of variables
let,var and const.

var is older way , it was used before js es6, so we should avoid it
var has global scope, but let and const are block scoped

js uses blocks,

ex-
{
    this is a block
}
this is not a block

ex-
var a = 10;
{
var a = 20;
console.log(a);
}
console.log(a);
both will print 20

but 
let a = 10;
{
    let a = 20;
    console.log(a);
}
console.log(a);
will print 10,20

const used for constant data.

redeclaring with var dont loses its value
var a = 10;
var a;
a is 10;
 let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10 



let is block scoped, cannot be redeclared, but redefined.
//verdict- use let and const most of time.

name of variables are called identifiers and
identifier name should be discriptive

in js "$","_" are considered as a letter, so varible names can have it.
let $ = 1;
let $a = 2;
let _c = 3;

datatypes supported-
1,1.2,"name",'name',bool,NULL,undefined;


*/

//hoisting
//you can use variables before it is declared

a = 10;
console.log(a);

//example of let
let b = 20;
console.log(b);

//example of const
const c = 30;
console.log(c);
// Use const when you declare:

//     A new Array
//     A new Object
//     A new Function
//     A new RegExp

// Because of this you can NOT:

//     Reassign a constant value
//     Reassign a constant array
//     Reassign a constant object

//     But you CAN:
//     Change the elements of constant array
//     Change the properties of constant object

// Constant Arrays

// You can change the elements of a constant array:

// Example
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

// But you can NOT reassign the array:
// Example
const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR 

// Constant Objects

// You can change the properties of a constant object:
// Example
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
// But you can NOT reassign the object: