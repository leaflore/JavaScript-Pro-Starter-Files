// JavaScript Pro - Learn JavaScript Essentials

// 3 - Multilevel Inheritance

// Multilevel inheritance is a type of inheritance in which a class can inherit from another class, which in 
// turn can inherit from another class. This creates a chain of inheritance, where each class can access the 
// properties and methods of its parent classes.

import TopicResult from '../01_Project/00-Lib.js';


// -------------------

// Lesson


// Arrays have the prototype of Array.prototype (ArrayBase), which has the prototype of 
// Object.prototype (ObjectBase). This is an example of multilevel inheritance, where Array 
// inherits from ArrayBase, which inherits from ObjectBase.

let myArray = [];


// -------------------

// Exercise

console.log('myArray.__proto__ === Array.prototype:', 
            myArray.__proto__ === Array.prototype); // true