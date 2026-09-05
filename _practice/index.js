// JavaScript - Pro - Learn JavaScript Essentials

// This file is for practice and testing of code snippets from the course.

// -------------------


// Property Descriptors

// Lesson

let person = {
    name: 'Steven'
}

console.log(person);

// -------------------

// Iterating through keys

// for (let key in person) {
//     console.log(key);
// }

// // Base object and attributes not displayed when logging keys of created object. Only the keys of the 
// // created object are displayed when iterating through keys.
// console.log(Object.keys(person));

// -------------------

// Get property descriptor of object base
let objectBase = Object.getPrototypeOf(person);
const propertyDescriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

// The .getOwnPropertyDescriptor() method returns a property descriptor for an own property (that is, 
// one directly present on an object and not in the object's prototype chain) of a given object.

console.log(propertyDescriptor);


// -------------------

// Constructor Prototypes

// .defineProperty() method - can define properties of an object

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false, // Now will not show up when iterating through keys of the object using a 
                       // an Object.keys() method call or a for in loop

    configurable: true

    // writable: false - means the property cannot be changed
    // enumerable: false - means the property will not show up when iterating through keys of the 
    // object
    // configurable: true - means the property can be deleted or changed to a different type of 
    // property
});

for (let key in person) {
    console.log(key); // There will be no enumerable keys in the developer's console log terminal.
}

// -------------------

// .__proto__ gives access to the prototype of the object. It allows 
// you to inspect and modify the prototype chain.
let obj ={}; // syntactic sugar for creating a new object
// let obj = new Object(); // Same as let obj = {};

console.log(obj.__proto__);
console.log(Object.prototype);

// -------------------

// Prototype vs Instance Members

// Prototypes

function Programmer(name, preferredLanguage) {
    this.name = name;
    this.preferredLanguage = preferredLanguage;
}

Programmer.prototype.writeCode = function() {
    console.log(`${this.name} writes code in ${this.preferredLanguage}`);
}

Programmer.prototype.toString = function() {
    return `Programmer: ${this.name}, Language: ${this.preferredLanguage}`;
};

const jsProgrammer = new Programmer(`Alice`, `JavaScript`);
console.log(jsProgrammer);
jsProgrammer.writeCode();
console.log(jsProgrammer.toString());

// Advantages of using prototypes:
// 1. Memory efficiency: Methods defined on the prototype are shared among all instances.
// 2. Dynamic behavior(Flexibility): You can add or modify methods on the prototype, and 
//    all instances will reflect the changes.
// 3. Inheritance (Overriding methods): Prototypes enable inheritance, allowing objects to 
//    share behavior.
// 4. Manageability: Prototypes allow you to centralize method definitions, making it easier 
//    to maintain and update code.
// 5. Prototype Members: Properties and methods defined on the prototype are shared among 
//    all instances of the constructor function. 


// -------------------

// Iterating Instance Prototype Members




