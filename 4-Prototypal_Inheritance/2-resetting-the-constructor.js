// import TopicResult from '../01_Project/00-Lib.js';

// JavaScript Pro - Learn JavaScript Essentials

// Prototypical Inheritance

// 2 - Resetting the Constructor

// In JavaScript, when you create a new object using a constructor function, the constructor 
// property of the new object points to the constructor function itself. However, if you modify 
// the prototype of the constructor function, the constructor property may no longer point to the 
// original constructor. To reset the constructor property, you can explicitly set it back to the 
// original constructor function after modifying the prototype. This ensures that instances created 
// from the constructor function have the correct reference to their constructor.


// -------------------

// Lesson

function Programmer(name) {
    this.name = name;
    this.debug = function() {
        console.log(`${this.name} is debugging.`);
    }
}

Programmer.prototype.code = function() {
        console.log(`${this.name} starts coding.`);
    }

Programmer.prototype.meeting = function() {
        console.log(`${this.name} is attending meetings.`);
}

function FrontEndProgrammer(name) {
    Programmer.call(this, name);
}

function BackEndProgrammer(name) {
    Programmer.call(this, name)
}

// Setting up inheritance so we inherit methods
FrontEndProgrammer.prototype = Object.create(Programmer.prototype);

const steven = new FrontEndProgrammer("Steven");
console.log(FrontEndProgrammer.prototype.constructor === Programmer);

// the constructor will point to Programmer instead of FrontEndProgrammer because we overwrote the prototype
// To fix this, we need to reset the constructor property

FrontEndProgrammer.prototype.constructor = FrontEndProgrammer;
console.log(FrontEndProgrammer.prototype.constructor === FrontEndProgrammer);









// Exercise