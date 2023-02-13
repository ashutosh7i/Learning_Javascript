/**
 *  JavaScript date object let us work with  dates-
 * 
 * 
 * 
 */
const d = new Date();

console.log(d);
// Date objects are static. The "clock" is not "running".
// The computer clock is ticking, date objects are not.

// JavaScript counts months from 0 to 11:
// January = 0.
// December = 11.

//When you display a date object in HTML, it is automatically converted to a string, with the toString() method.
console.log(d.toString());

//The toDateString() method converts a date to a more readable format:
console.log(d.toDateString());
