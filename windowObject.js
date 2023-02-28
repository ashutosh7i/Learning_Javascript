//window object is the master object for any browser.
//all methods like console.log, etc are actually running under window object
//window object is a global object i.e. it is there always
window.console.log("")
//is same as 
console.log("") //coz window is there

console.log(window)

//window resize event listener
window.addEventListener("resize",() =>
{
    window.alert("resized")
})