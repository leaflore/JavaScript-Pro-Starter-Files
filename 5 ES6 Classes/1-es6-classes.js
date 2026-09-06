// JavaScript Pro - Learn JavaScript Essentials

// ES6 Classes

// 1 - ES6 Classes

// ES6 - ECMAScript 2015

// -------------------


// ---- Lesson ----

// Tradition Constructor function to make an object with function syntax
function Programmer(name, preferredLanguage) {
    this.name = name;
    this.preferredLanguage = preferredLanguage;

    this.code = function() {
        conosole.log(`${this.name} is coding in ${this.preferredLanguage}`);
    }
}

const programmer = new Programmer('Steven', 'JavaScript');
programmer.code();



// ---- ES6 Class creation ----
class ClassProgrammer {
    // ---- Class constructor function ----
    // This is the function that is called when you use the new keyword
    constructor(name, preferredLanguage) {
        this.name = name;
        this.preferredLanguage = preferredLanguage;
    }

    // ---- Method creation ----
    // Creates a method inside a class
    code() {
        console.log(`${this.name} is coding in ${this.preferredLanguage}`);
    }
}

const classProgrammer = new ClassProgrammer('Steven', 'JavaScript');
classProgrammer.code();

console.log(typeof ClassProgrammer);


// ---- Summary: ----

// Even though the class keyword is being used, under the hood a constructor function is still 
// being created

/* JavaScript module Babel
    // Support ES5 conversion for compatibility
*/

/* Benefits of using class are:
        Clarity and Simplicity
        Encapsulation
        Standardization
*/

// -------------------

// Active Memory Recall

/*
    How does the class syntax in modern JavaScript improve the process of defining constructor
    functions and managing prototypical inheritance?

    What are the benefits of using class syntax over traditional constructor functions in 
    JavaScript?

    Answer:
        Clarity, Enscapsulation, Standardization
*/


// -------------------

// Exercise