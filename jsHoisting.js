//hoisting is a technique or way in javascript, which on excecution all declarations are moved to the top.
//this is know as hoisting
//ex-

function sum(a, b){
    return a+b
}

console.log(sum(1,2))
//this works fine.

//but
console.log(sum2(1,3))

function sum2(A,B){
    return A+B
}
//this also works the same, because at the time of excecution the function defination moves to top

//also ArrowFunctions dont support hoisting
//variables never get hoisted