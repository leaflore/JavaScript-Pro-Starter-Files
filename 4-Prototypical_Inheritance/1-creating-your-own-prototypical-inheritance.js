// import TopicResult from '../01_Project/00-Lib.js';

// JavaScript Pro - Learn JavaScript Essentials

// Prototypical Inheritance

// 1 - Creating Your Own Prototypical Inheritance

// In JavaScript, prototypical inheritance allows objects to inherit properties and methods from other objects. 
// You can create your own prototypical inheritance by defining a constructor function and using the prototype 
// property to add shared methods or properties. This enables you to create multiple instances of an object that 
// share common behavior while still allowing for unique instance-specific properties.



// -------------------

// Lesson

function Programmer(name) {
    this.name = name;
    this.debug = function() {
        console.log(`${this.name} is debugging.`);
    }
}

const alice = new Programmer('Alice');
const steven = new Programmer('Steven');

// alice.code();
// steven.code();

console.log(alice.code === steven.code);

// The above comparison will log 'false' because each instance has its own copy of 
// the 'code' method. 
// To share methods among all instances, you should define them on the prototype 
// instead.

// Prototype-based method sharing for efficent memory ussage

Programmer.prototype.code = function() {
        console.log(`${this.name} starts coding.`);
    }

const bob = new Programmer('Bob');
bob.code();
console.log(bob.code === alice.code); // This will log 'true' because the 'code'  method is now shared via t
//                                       he prototype.

Programmer.prototype.meeting = function() {
        console.log(`${this.name} is attending meetings.`);
    }

alice.code();
steven.code();


// -------------------

// Exercise

// FrontEndProgammer and BackEndProgrammer should inherit from Programmer's prototype
console.log(alice.code === steven.code);

function FrontEndProgrammer(name) {
    Programmer.call(this, name);
}

function BackEndProgrammer(name) {
    Programmer.call(this, name)
}

FrontEndProgrammer.prototype = Object.create(Programmer.prototype);
BackEndProgrammer.prototype = Object.create(Programmer.prototype);

FrontEndProgrammer.prototype.constructor = FrontEndProgrammer; // Reset the constructor property after overwriting the prototype
BackEndProgrammer.prototype.constructor = BackEndProgrammer; // Reset the constructor property after overwriting the prototype

// When developers implement object inheritance or add multiple methods, they often overwrite the entire prototype 
// object with a new object.

// When you assign a completely new object to prototype, the default object is wiped out, and the .constructor 
// property is lost.

// To fix this side effect, developers explicitly reset the constructor property so that any created instances can 
// still accurately identify what function created them.

const joe = new FrontEndProgrammer('Joe');
joe.code(); // Joe should be able to use the shared 'code' method from Programmer's prototype.
joe.debug(); // Joe should also be able to use the shared 'debug' method from Programmer's prototype.
joe.meeting(); // Joe should also be able to use the shared 'meeting' method from Programmer's prototype.

const jen = new BackEndProgrammer('Jen');
jen.code();
jen.debug();
jen.meeting();

