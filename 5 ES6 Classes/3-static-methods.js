

// JavaScript Pro - Learn JavaScript Essentials

// ES6 Classes

// 3 - Static methods

// 

// -------------------

/**
 * @typedef {Object} StaticProgrammerProperties
 * @property {string} name
 * @property {string} preferredLanguage
 */

// Lesson
class StaticProgrammer {
    /**
     * @param {string} name
     * @param {string} preferredLanguage
     */
    constructor(name, preferredLanguage) {
        this.name = name;
        this.preferredLanguage = preferredLanguage;
    }

    // Instance methods
    code() {
        console.log(`${this.name} is coding in ${this.preferredLanguage}`);
    }

    /**
     * @param {StaticProgrammerProperties} programmer1
     * @param {StaticProgrammerProperties} programmer2
     * @returns {boolean}
     */
    static compareSkill(programmer1, programmer2) {
        return programmer1.preferredLanguage === programmer2.preferredLanguage;
    }
}

const dev = new StaticProgrammer('Steven', 'JavaScript');
dev.code();

const dev2 = new StaticProgrammer('Alice', 'JavaScript');
dev2.code();

// Static method example
console.log(StaticProgrammer.compareSkill(dev, dev2));

// Static methods are particularly useful for utility functions

// Active Memory Recall

/* 
What is the difference between instance and static methods

Why are static methods useful in JavaScript, and when should they be used instead of instance 
methods.

Answer: ...useful for general utility functions used on multiple instances of the class


*/

// Exercise

class ExerciseGroceryItem {
    /**
     * 
     * @param {string} name 
     * @param {number} quantity 
     */
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    code() {
        console.log(`You have ${this.name} x ${this.quantity} on your grocery list`);
    }

    /**
     * 
     * @param {ExerciseGroceryItem} exerciseGroceryItem1 
     * @param {ExerciseGroceryItem} exerciseGroceryItem2 
     * @returns {Object}
     */
    static compareQuantities(exerciseGroceryItem1, exerciseGroceryItem2) {
        const sameQuantity = exerciseGroceryItem1.quantity === exerciseGroceryItem2.quantity;
        console.log('You have the same quantities of each item');
        return sameQuantity;
    }
}

const apple = new ExerciseGroceryItem('Apples', 4);
const orange = new ExerciseGroceryItem('Orange', 4);

console.log(ExerciseGroceryItem.compareQuantities(apple, orange));

// Repeat the same exercise with a series of if else statements