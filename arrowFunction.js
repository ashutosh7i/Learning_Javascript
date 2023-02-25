//arrow function is a modified type of regular function
//used to write more advance function without increasing the understanding difficulty

//normal function
function addNumber(a,b){
    return a+b;
}

console.log(addNumber(1,2));
//gives out 3


//arrow function
let addArrow = (a,b) => {return a+b}

console.log(addArrow(1,2));

//more efficient way
let addArrowEfficient = (a,b) => a+b;

console.log(addArrowEfficient(1,2));
//does the same work but less lines and easy to understand.
