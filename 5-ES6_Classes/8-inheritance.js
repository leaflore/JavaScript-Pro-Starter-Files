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
 * 
 * 
 */


// --------------------------- END IMPORTANT -----------------------

// ----- Active Recall -----

/** 
 * 
*/