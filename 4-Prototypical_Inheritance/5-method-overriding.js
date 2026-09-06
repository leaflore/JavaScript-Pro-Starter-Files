// JavaScript Pro - Learn JavaScript Essentials

// Prototypical Inheritance

// 5 - Method Overriding

// In this lesson, we will explore method overriding in JavaScript, which allows child 
// constructors to provide their own implementation of methods inherited from parent 
// constructors.


// -------------------

// Lesson

// Parent constructor function
function Programmer(name) {
    this.name = name; // Assign the name property to the instance
}

// Add a method to the Programmer prototype 

// (i.e. the constructor function itself (the blueprint for instances). The traditional 
// way to create a class in JavaScript before ES6 was to use constructor functions and 
// prototypes.)

Programmer.prototype.code = function() {
    console.log(`${this.name} starts coding.`); // What the method does
};

// Child constructor function
// Set up the prototype chain so that FrontEndProgrammer inherits from Programmer
function FrontEndProgrammer(name) {
    Programmer.call(this, name); // Call the parent constructor with the current instance 
                                 // and name
}

// Extend function

// Utility function to set up inheritance between child and parent constructors
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype); 
        // Set the prototype of the child to an object created from the parent's prototype
    Child.prototype.constructor = Child; 
        // Correct the constructor property on the child's prototype
}

// Invoke the extend function 

// to set up inheritance between FrontEndProgrammer and Programmer

extend(FrontEndProgrammer, Programmer);

// Override the code method for FrontEndProgrammer
FrontEndProgrammer.prototype.code = function() {
    Programmer.prototype.code.call(this); // Call the parent method - shows old behavior
    console.log(`${this.name} is coding in HTML/CSS/JavaScript.`);
    // (Overriding the parent method) Behavior specific to FrontEndProgrammer
};

const steven = new FrontEndProgrammer("Steven"); // Create an instance of FrontEndProgrammer
steven.code(); // Call the overridden code method for the FrontEndProgrammer instance



// Exercise