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

function IteratingProgrammer(name, preferredLanguage) {
    this.name = name;                           // Example own property
    this.preferredLanguage = preferredLanguage; // Example own property
}

const programmer = new IteratingProgrammer(`Steven`, `JavaScript`);

// Example prototype property (.writeCode property that has a function assigned to it)
IteratingProgrammer.prototype.writeCode = function() {
    console.log(`${this.name} writes code in ${this.preferredLanguage}`);
};

programmer.writeCode();

// Enumerating over properties of an object
for (let key in programmer) {
    console.log(key); // This will log only the instance properties, not the prototype 
                      // methods.
}

console.log(programmer.hasOwnProperty(`name`)); // true
console.log(programmer.hasOwnProperty(`writeCode`)); // false

// What happens to instances of an object when a prototype method is added?

// Answer:

// When a prototype method is added, all existing instances of the object will have access 
// to the new method through the prototype chain. This means that even instances created 
// before the method was added can use it.

// What is the difference between and own property and a prototype property?

// Answer:

// An own property is a property that is directly defined on the instance of an object.
// A prototype property is a property that is defined on the prototype of the constructor
// function and is shared among all instances of that constructor.

// -------------------

// Avoid Extending the Built-in Objects
Array.prototype.shuffle = function() {
    // Implementation of a shuffle method
    console.log('shuffle');
}

const notExtendArray = [];
notExtendArray.shuffle();

// Note: Extending built-in objects like Array can lead to unexpected behavior and conflicts 
// with other code. It's generally recommended to avoid doing this in production code.

// Utitliy Function

// Utility functions for array manipulation can be defined separately instead of extending 
// the built-in Array prototype.

function shuffleArray(array) {
    // Implementation of a shuffle function
    console.log('shuffle');
}

const utilityArray = [];
const shuffledArray = shuffleArray(utilityArray);

if (typeof Array.prototype.shuffle !== 'function') {
    console.log('shuffle');
}

// What is the significance of prototypes and prototypical inheritance in JavaScript?

// Answer:

// Prototypes and prototypical inheritance in JavaScript allow objects to inherit properties 
// and methods from other objects. This enables code reuse and the creation of hierarchical 
// relationships between objects. By using prototypes, JavaScript can efficiently share 
// methods among all instances of a constructor without duplicating them for each instance.

// How do property descripotors manage the behavior of object properties?

// Answer:

// Property descriptors in JavaScript provide detailed information about the attributes of 
// a property, such as whether it is writable, enumerable, or configurable. They allow 
// developers to control and customize the behavior of object properties, including 
// defining getter and setter functions for more advanced property management.

