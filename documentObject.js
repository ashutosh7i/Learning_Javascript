//document object allows us to 
//  1. allow to get element from HTML
//  2. modify the HTML
//  3. create new elements to add into the HTML

console.log(document)   //prints all methods in document object
console.log(document.body)  //prints the body of html

const element = document.createElement("span")
element.innerText = "this is created using JS"
document.body.appendChild(element)
//created a element, sets innter data of that element, appends that into html body

//now accessing existing element of a page
const divWithId = document.getElementById("div-id")
//console.log(divWithId)
divWithId.style.color="red" //modifing that element

const divWithClass = document.getElementsByClassName("div-class")
//we cannot edit all element at once, lets use array for it 
const divWithClassArray = Array.from(divWithClass)

//using a function and forEach for it
divWithClassArray.forEach(element => {
    element.style.color="green"
});

//or else use this
divWithClassArray[1].style.color="teal"