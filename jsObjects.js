/*
javascript has same objects like c++
syntax

const obj_name = {
    dataMember: "value",
    dataMember2: "value";
    
    dataMember3: function(params){
        return this.dataMember2+this.dataMember3;
    }
};   //remember

called as
name.dataMember,2,3; etc
 */

const person = {
    firstName: "test",
    lastName : "tset",
    id       : 1,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log(person.id);
  console.log(person.fullName());

// In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// The this keyword refers to different objects depending on how it is used:

//Object in Object
let student = {
  name: "Ashu",
  age: 19,
  address: {
            city: "indore",
            pincode: 452011
  },
  phoneNo: 9993234069
}
//print name, city and phoneNo
console.log(student.name + "\n" + student.address.city + "\n" + student.phoneNo)