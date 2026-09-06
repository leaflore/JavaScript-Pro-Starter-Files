// JavaScript Pro - Learn JavaScript Essentials

// Prototypical Inheritance

// 7 - When to Use Inheritance

// In this lesson, we will discuss when it is appropriate to use inheritance in JavaScript and 
// when composition might be a better choice.

// -------------------

// Lesson

// Composition

// Composition represents a "has-a" relationship between objects.

// Composition allows objects to be built from other objects, promoting code reuse without relying 
// on inheritance.

// Composition can be achieved using techniques such as 
    // object delegation, 
    // mixins, 
    // or factory functions.


// Example of composition using a mixin

// Parent constructor function
function Employee(name) {
    this.name = name;
}

// Mixin for composition
const canCode = {
    code() {
        console.log(`${this.name} is coding.`);
    }
}

// Second mixin for composition
const canReview = {
    review() {
        console.log(`${this.name} is reviewing code.`);
    }
}

// Child constructor function
function Programmer(name) {
    Employee.call(this, name);

    // .assign() method copies properties from mixins to the instance
    // Compposing the object with necessary functionalities 
    Object.assign(this, canCode, canReview); 
}

// Second child constructor function
function Manager(name) {
    Employee.call(this, name);

    // Managers can review code but not necessarily code themselves
    // Composing the object with necessary functionalities
    Object.assign(this, canReview); 
}

const steven = new Programmer("Steven");
steven.code();
steven.review();


// Summary: 
// In this example, we used composition to give specific functionalities to different types of 
// employees.

// Programmers can both code and review code, while Managers can only review code.

// Composition allows us to create flexible and reusable objects without relying on a rigid 
// inheritance hierarchy.

// Inheritance can itnroduce uneccessary complexity.

// Therefore, prefer composition when you need flexible and reusable code structures.


// -------------------

// Exercise:
// Try creating a new type of employee, such as a Designer, who can only review code.
// Implement the Designer constructor function and use composition to give it the appropriate 
// functionality.

// What are the potential issues with inheritance?

