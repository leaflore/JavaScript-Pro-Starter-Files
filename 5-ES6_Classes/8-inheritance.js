// JavaScript Pro - Learn JavaScript Essentials

// ES6 Classes

// 8 - Inheritance

// In this lesson, we will discuss mixins in JavaScript and how they can be used 
// to achieve composition and code reuse without relying on inheritance.

// -----------------------------------------------------------------------------------------

// --------------------------- IMPORTANT ---------------------------

class InheritanceProgrammer {
    constructor(name) {
        this.name = name;
    }

    code() {
        console.log(`${this.name} starts coding.`);
    }
}

// Inherited class example
class FrontendProgrammer extends InheritanceProgrammer {
    constructor(name, tools) {
        // Call the superclass constructor with the name parameter
        super(name);
        // Additional property specific to FrontendProgammer
        this.tools = tools;
    }

    code() {
        super.code(); // Call the generic code method from Programmer
        console.log(`${this.name} codes with ${this.tools}`);
    }

    design() {
        console.log(`${this.name} also designs the user interface.`);
    }
}

const frontendDev =  new FrontendProgrammer('Steven', 'React');
frontendDev.code();
frontendDev.design();



// --------------------------- END IMPORTANT ---------------------------

// -------------------

// ----- Lesson -----


// Lesson

// Example 2:


// -------------------

// Example 3:

// -------------------

// --------------------------- IMPORTANT ---------------------------
// Lesson Explanation:
/**
 * In summary, inheritance allows a class to inherit properties and methods from another class, promoting code 
 * reuse and establishing a hierarchical relationship between classes.This enables the creation of specialized 
 * subclasses that extend the functionality of a base class while maintaining a consistent interface.
 */


// --------------------------- END IMPORTANT -----------------------

// ----- Active Recall -----

/** 
 * Active Recall:
 * 1. How is the supper keyword used in the FrontendProgrammer class?
 * 
 * Answer: The super keyword is used in the FrontendProgrammer class to call the constructor and method of the 
 * parent class (InheritanceProgrammer) constructor and methods.
 * 
 * 2. What are the benefits of using inheritance when exteneding the Programmer class to create the
 * FrontendProgrammer class? 
 * 
 * Answer: The benefits of using inheritance when extending the Programmer class to create the 
 * FrontendProgrammer class include code reuse, maintaining a consistent interface, and the ability to add 
 * specialized functionality specific to frontend development without duplicating the generic programming 
 * behavior.
*/