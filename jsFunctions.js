// JavaScript Function Syntax

// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

// Function Return

// When JavaScript reaches a return statement, the function will stop executing.

// If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

// Functions often compute a return value. The return value is "returned" back to the "caller":

//ex-

let a = 10,b = 20;

//declaring
function add(variable1,variable2){
return variable1+variable2;
}

//calling
console.log(add(a,b));

//we can use functions as varible values
let c = add(a,b);
console.log(c);
