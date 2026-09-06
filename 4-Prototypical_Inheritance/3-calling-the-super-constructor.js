// JavaScript Pro - Learn JavaScript Essentials

// Prototypical Inheritance

// 3 - Calling the Super Constructor

// In JavaScript, when you create a new object using a constructor function, you can call the super 
// constructor (the constructor of the parent class) using the call() method. This allows you to 
// initialize the properties of the parent class within the child class constructor. By calling the 
// super constructor, you ensure that the child class inherits the properties and behavior of the 
// parent class correctly.


// -------------------

// Lesson

function Programmer(name, specialization) {
    this.name = name;
    this.specialization = specialization;
}

function FrontEndProgrammer(name, specialization, preferredFramework) {
    Programmer.call(this, name, specialization);
    this.preferredFramework = preferredFramework;
}

const steven = new FrontEndProgrammer('Steven', 'Front-End', 'React');

console.log(steven.name);
console.log(steven.specialization);
console.log(steven.preferredFramework);

// The new keyword is used to create an instance of an object that has a constructor 
// function. It ensures that the constructor function is called with the correct context 
// (this) and that the resulting object inherits from the constructor's prototype.


// Exercise