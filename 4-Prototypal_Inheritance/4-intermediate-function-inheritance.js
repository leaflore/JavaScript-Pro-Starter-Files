// JavaScript Pro - Learn JavaScript Essentials

// Prototypical Inheritance

// 4 - Intermediate Function Inheritance

// In this lesson, we will explore intermediate concepts of function inheritance in 
// JavaScript, 
// including how to properly set up the prototype chain and inherit methods from parent 
// constructors.


// -------------------

// Lesson

// Parent constructor function
function Programmer(name) {
    this.name = name;
}

// Child constructor functions
Programmer.prototype.code = function() {
    console.log(`${this.name} starts coding.`);
};

// FrontEndProgrammer Child constructor function
function FrontEndProgrammer(name) {
    Programmer.call(this, name); // Call the parent constructor with the current context
}

// BackEndProgrammer Child constructor function
function BackEndProgrammer(name) {
    Programmer.call(this, name);
}

// Extend function to set up inheritance between child and parent constructors
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

// Invoking the extend function to set up inheritance
extend(FrontEndProgrammer, Programmer);
extend(BackEndProgrammer, Programmer);

// Creating instances of child constructors
const steven = new FrontEndProgrammer('Steven');
const alice = new BackEndProgrammer('Alice');

// Invoking methods on the instances of child constructors
steven.code();
alice.code();

// -------------------

// Summary: This lesson demonstrated how to set up intermediate function inheritance in 
// JavaScript, including creating child constructors, using an extend function, and 
// invoking inherited methods.

// -------------------

// Exercise

// 1. Create a new child constructor called FullStackProgrammer that inherits from 
//    Programmer.
// 2. Use the extend function to set up inheritance for FullStackProgrammer.
// 3. Create an instance of FullStackProgrammer and invoke the code method on it.

// Implementing the exercise

// FullStackProgrammer constructor function
function FullStackProgrammer(name) {
    Programmer.call(this, name); // Call the parent constructor with the current context
}

// Set up inheritance for FullStackProgrammer
extend(FullStackProgrammer, Programmer);

// Creating an instance of FullStackProgrammer
const bob = new FullStackProgrammer('Bob');

// Invoking the code method on the instance of FullStackProgrammer
bob.code(); // Output: "Bob starts coding."