//let a function to create an object for users

function createUser(name, age){
    return {    //returns an object
            name: name,
            age: age
    }
}

const user1 = createUser("ashu",19)
console.log(user1)  //creates a object

//this technique is fine, but to do the same thing more efficiently, we can use the "new and this" method.
//let us take the Date object as an example

const date = new Date   //create a object of Date
console.log(date)       // prints the standar date.
console.log(date.getDate()) //prints today's date.

function createUser2(name, age){
    this.name = name,
    this.age = age
}

const user2 = new createUser2("ashu2",19)
console.log(user2)  
//same as before but here the object has name an this method is easy to read and maintain hence a best practice