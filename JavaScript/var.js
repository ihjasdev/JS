// variable declaration
//var, let, const

//var
var Name="ihjas";
var age=25;
console.log(Name);
console.log(age);

// let
let FirstName;
FirstName ="Mohammed";
console.log(FirstName);

//const
const LastName="Ihjas";
console.log(LastName);
//can't change in const 
// LastName="test";
// console.log(LastName);

//can change const variable value in object and array
const person={
    Name: "safan",
    age: 26
   
}
person.Name='sara';
person.age=28
console.log(person);

//array
const number=[1,2,3,4]
number.push(5);
console.log(number);