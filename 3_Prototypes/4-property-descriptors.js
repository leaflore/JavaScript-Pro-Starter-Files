// JavaScript Pro - Learn JavaScript Essentials

// 4 - Property Descriptors

// Property descriptors are objects that describe the attributes of a property in JavaScript. They provide information about the property's characteristics, such as whether it is writable, enumerable, or configurable. Property descriptors are used to define and manipulate properties of objects in a more controlled manner.

import TopicResult from '../01_Project/00-Lib.js';


// -------------------

// Lesson

// Property descriptors can be accessed and modified using the Object.getOwnPropertyDescriptor() and Object.defineProperty() methods. These methods allow you to retrieve and define property descriptors for object properties.

// Syntactic sugar for instantiating a new object
let obj = {};
// Same as let obj = new Object();

// .__proto__ gives access to the prototype of the object. It allows 
// you to inspect and modify the prototype chain.
console.log(obj.__proto__);



// Exercise