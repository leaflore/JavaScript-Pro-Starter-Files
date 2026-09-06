// JavaScript Pro - Learn JavaScript Essentials

// Prototypical Inheritance

// 5 - Method Overriding

// In this lesson, we will explore method overriding in JavaScript, which allows child 
// constructors to provide their own implementation of methods inherited from parent 
// constructors.


// -------------------

// Lesson

// Lesson Base Code - code that is not main material but necessary for the lesson


// Extend Utility function
// Utility function to set up inheritance between child and parent constructors
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

// Parent constructor function for Programmer
function Programmer(name) {
    this.name = name;
}

// Add a method to the Programmer prototype
Programmer.prototype.work = function() {
    console.log(`${this.name} is working on programming tasks.`);
};

// Child constructor function for FrontEndProgrammer
function FrontEndProgrammer(name) {
    Programmer.call(this, name); // Call the parent constructor inside the FrontEndProgrammer 
                                 // constructor function
}

function BackEndProgrammer(name) {
    Programmer.call(this, name); // Call the parent constructor inside the BackEndProgrammer 
                                 // constructor function
}

// Use the `extend` utility function to set up inheritance

// Set up inheritance between FrontEndProgrammer and BackEndProgrammer with parent constructor 
// function Programmer
extend(FrontEndProgrammer, Programmer);
extend(BackEndProgrammer, Programmer);

// Overriding the `work` method in FrontEndProgrammer
FrontEndProgrammer.prototype.work = function() {
    console.log(`${this.name} is designing and coding the framewor.`);
};

// Overriding the `work` method in BackEndProgrammer
BackEndProgrammer.prototype.work = function() {
    console.log(`${this.name} is developing server-side logic.`);
};


// Instantiation of FrontEndProgrammer object
const steven = new FrontEndProgrammer('Steven');
const alice = new FrontEndProgrammer('Alice');

// -------------------


// Main Lesson Material

// Polymorphism in action
// Using polymorphism to call the `work` method on both FrontEndProgrammer instances

// Array of programmers
const programmers = [
    steven, 
    alice
];

// For loop to iterate over the array of programmers and call their `work` method
for (let programmer of programmers) {
    programmer.work();
}

// End of Main Lesson Material

// Summary

// Notes: Polymorphism allows objects of different types to be treated as objects of a common 
// super type. In this lesson, both FrontEndProgrammer and BackEndProgrammer override the `work` 
// method, demonstrating polymorphism in action.

// Inheritance should always have a "is-a" relationship between the child and parent constructor 
// functions.


// -------------------

// Exercise
// 1. Create a parent constructor function called `Animal` with a method `speak`.
// 2. Create a child constructor function called `Dog` that inherits from `Animal`.
// 3. Override the `speak` method in `Dog` to provide a different implementation.
// 4. Create instances of both `Animal` and `Dog` and call their `speak` methods to observe polymorphism.