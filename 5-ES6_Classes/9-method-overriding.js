// JavaScript Pro - Learn JavaScript Essentials

// ES6 Classes

// 9 - Method Overriding

// Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its superclass.

// -------------------

// -----------------------------------------------------------------------------------------


// -------------------

// Lesson 1: Basics of Method Overriding


// Example 1:
class MethodOverridingProgrammer {
    constructor(name) {
        this.name = name;
    }

    work() {
        console.log(`${this.name} is solving problems.`);
    }
}

class MethodOverridingFrontEndProgrammer extends MethodOverridingProgrammer {
    constructor(name) {
        super(name); // Initialize the base class part of the object

    }

    work() {
        super.work(); // ----- Calls the base class method ------
        console.log(`${this.name} is also designing and implementing UI components.`)
    }
}

const steven = new MethodOverridingFrontEndProgrammer("Steven");

steven.work();

// -------------------

// --------------------------- IMPORTANT ---------------------------
// Lesson Explanation:

/**
 * Method lookup in JavaScript starts from the object's own class and moves up the prototype chain until it finds the method.
 * The super keyword allows a subclass to call methods from its superclass.
 */


// --------------------------- END IMPORTANT -----------------------

// ----- Active Recall -----
/**
 * 1. What is method overriding in JavaScript?
 *
 * Answer:
 * 
 * Method overriding is when a subclass provides a specific implementation of a method that is already defined in its superclass.
 * 
 * 2. How does the super keyword work in the context of method overriding?
 * 
 * Answer:
 * 
 * The super keyword allows a subclass to call the method from its superclass, enabling the subclass to extend or modify the behavior of the 
 * inherited method.
 * 
 * 3. In what order does JavaScript look for methods when a method is called on an object?
 * 
 * Answer:
 * 
 * JavaScript first looks for the method in the object's own class, and if not found, it moves up the prototype chain to the superclass, continuing 
 * until it finds the method or reaches the top of the chain.
 * 
 * 4. What happens if a method is not found in the object's class or any of its superclasses?
 * 
 * Answer:
 * 
 * If a method is not found in the object's class or any of its superclasses, JavaScript throws a TypeError indicating that the method is not a 
 * function.
 * 
*/