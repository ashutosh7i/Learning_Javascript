/**
 * An array is a special variale which can hold more than one value, contigious list of elements.
 * syntax-
 * const cars = ["honda",
 *               "Mahindra",
 *               "Audi"];
 * It is a common practice to declare arrays with the const keyword.
 * 
 * You can also create an array, and then provide the elements:
Example
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
 * 
 const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];

Note: Array indexes start with 0.

[0] is the first element. [1] is the second element.

Changing an Array Element

This statement changes the value of the first element in cars:
cars[0] = "Opel";

***
Access the Full Array

With JavaScript, the full array can be accessed by referring to the array name:
Example
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;

JavaScript Array Methods-
Converting Arrays to Strings

The JavaScript method toString() converts an array to a string of (comma separated) array values.
Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

Result:
Banana,Orange,Apple,Mango

*********
JavaScript Array length

The length property provides an easy way to append a new element to an array:
Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";

**********

Merging (Concatenating) Arrays

The concat() method creates a new array by merging (concatenating) existing arrays:
Example (Merging Two Arrays)
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

Splicing and Slicing Arrays

The splice() method adds new items to an array.

The slice() method slices out a piece of an array.
JavaScript Array splice()

The splice() method can be used to add new items to an array:
Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items:
Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
Using splice() to Remove Elements

With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);

The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (1) defines how many elements should be removed.

The rest of the parameters are omitted. No new elements will be added.
JavaScript Array slice()

The slice() method slices out a piece of an array into a new array.

This example slices out a part of an array starting from array element 1 ("Orange"):
Example
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
Note

The slice() method creates a new array.

The slice() method does not remove any elements from the source array.

This example slices out a part of an array starting from array element 3 ("Apple"):
Example
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);

The slice() method can take two arguments like slice(1, 3).

The method then selects elements from the start argument, and up to (but not including) the end argument.

***
Automatic toString()

JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

This is always the case when you try to output an array.

These two examples will produce the same result:
Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

 */

//arrays of Arrays
//print 1, 7, 12
const a = [
            [1,2,3,4],
            [5,6,7,8],
            [9,10,11,12]
]

console.log(a[0][0])
console.log(a[1][2])
console.log(a[2][3])