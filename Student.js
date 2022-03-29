"use strict";

function toString(){ 
 return `${this.firstName} ${this.lastName}`;
}
function says(){
  return `${this.firstName}: Hello!`
}

function Student (firstName, lastName, age, isMale){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;  
}

function StudentPrototype(){
  this.toString = toString;
  this.says = says;
  this.say = function (stringToSay){
  return `Студент ${this.firstName} говорит: ${stringToSay}`;
}
}

Student.prototype = new StudentPrototype();

const student1 = new Student('Tester' ,'Testovich' , 18 ,true);
const student2 = new Student('Test' ,'Tester' , 20 ,true);