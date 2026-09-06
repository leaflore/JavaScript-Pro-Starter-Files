// JavaScript Pro - Learn JavaScript Essentials

// Prototypical Inheritance

// 8 - Mixins

// In this lesson, we will discuss mixins in JavaScript and how they can be used to achieve 
// composition and code reuse without relying on inheritance.

// -------------------


// Lesson

// Reusable mixin function
function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

// 3 Mixins: canEat, canWalk, canCode

// 1 Define the canEat mixin
const canEat = {
    eat: function() {
        this.hunger--;
        console.log(`${this.name} is eatting.`);
    }
};

// 2 Define the canWalk mixin
const canWalk = {
    walk: function() {
        console.log(`${this.name} is walking.`);
    }
};

// 3 Define the canCode mixin
const canCode = {
    code: function() {
        console.log(`${this.name} is coding.`);
    }
};

// Constructor function for Programmer
function Programmer(name) {
    this.name = name;
    this.hunger = 100; // Initial hunger level for the programmer
}

// Mixin functionalities into Programmer's prototype

// Create an instance of Programmer and demonstrate mixin functionalities

// 1. Log the initial state of the programmer instance (before any actions i.e. their properties)
const programmer = new Programmer('Steven');

// Traditional way to use mixins
//      Object.assign(Programmer.prototype, canEat, canWalk, canCode);

// Use the mixin function to add functionalities to the programmer instance
mixin(programmer, canEat, canWalk, canCode);



// 2. Perform actions using the mixin methods
console.log(programmer);
programmer.eat();
programmer.walk();
programmer.code();


// Summary:


// Exercise