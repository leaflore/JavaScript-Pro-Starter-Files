// JavaScript Pro - Learn JavaScript Essentials

// ES6 Classes

// 4 - The This keyword

// -------------------

// Lesson
'use strict'; // Enforce strict mode to make `this` undefined in detached functions

/**
 * 
 * @param {string} name 
 */
function thisProgrammer(name) {
    this.name = name;
    this.code = function() {
        console.log(this);
        
    }
}

const theThisProgrammer = new thisProgrammer('Steven');
theThisProgrammer.code();

// Detached code example

// Because the function is detached from its object, `this` will refer to the global object (or `undefined` in strict mode).

// In a browser, this will typically refer to the `window` object. In a Node.js environment, it will refer to the `global` object.

const detachedCode = theThisProgrammer.code;
detachedCode();

class StrictProgrammer {
    /**
     * 
     * @param {string} name 
     */
    constructor(name) {
        this.name = name;
    }

    code() {
        console.log(this);
    }
}

const theStrictProgrammer = new StrictProgrammer('Steven');
theStrictProgrammer.code();

// Detached code example for StrictProgrammer
const detachedStrictCode = theStrictProgrammer.code;
detachedStrictCode(); //

// Active memory recall

/*
Active memory recall:

1. What does `this` refer to inside a method of an object?
2. What happens when a method is detached from its object and called?
3. How does strict mode affect the value of `this` in detached functions?
4. How does `this` behave inside an ES6 class method?

5. What are the potential consequences of detaching a method from its object context in JavaScript?

    It can  cause `this` lose reference to its original object, causing it to refer to the global object or be `undefined` in strict 
    mode, leading to unexpected behavior.

6. How does strict mode in JavaScript enhance code safety and consistency, particularly in the context of class bodies?

    Strict mode ensures that `this` is `undefined` in detached functions, preventing accidental global variable creation and making 
    the behavior of `this` more predictable within class methods.

    This helps prevent common bugs related to the `this` keyword and ensures that class methods behave consistently regardless of 
    how they are called.

*/
