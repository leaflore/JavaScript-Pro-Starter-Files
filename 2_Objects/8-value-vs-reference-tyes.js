// JavaScript Pro - Learn JavaScript Essentials

// Value vs Reference Types

/* JavaScript supports eight different data types:
   1. Number
   2. String
   3. Boolean
   4. BigInt
   5. Undefined
   6. Null
   7. Symbol
   8. Object
*/

// In JavaScript, there are two types of data: value types and reference types. 
// Value types are primitive data types that are stored directly in memory, while 
// reference types are objects that are stored as references to memory locations.

import TopicResult from '../01_Project/00-Lib.js';


// -------------------

// Lesson

// Value Types

let a = 10;
let b = a; // b is a copy of a and is stored in a different memory location
b = 20; // changing b does not affect a

console.log( a ); // 10
console.log( b ); // 20


// -------------------

// Reference Types: Passed by Reference

let aValue = { value: 20 };
let bValue = aValue; // bValue is a reference to the same object in memory as aValue
bValue.value = 30; // changing bValue also changes aValue

// -------------------

// Exercise