//event listerner are most used feature of js, used to detect events to perform tasks on them


const btn = document.querySelector('[data-btn]')
btn.addEventListener('click',() =>{
    console.log("clicked")
    window.alert("clicked")
})

//removing a event listerner
//btn.removeEventListener(id)

//an event listerner returns a object, we can use this object very efficiently to our advantage
btn.addEventListener("click",e =>{
    console.log(e)  //prints object with all methods
    console.log(e.timeStamp)    //prints timestamp.
})
