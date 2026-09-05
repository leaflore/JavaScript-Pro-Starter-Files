// JavaScript Pro - Learn Java Essentials

// Enumerating Properties

// Enumerating properties of an object is a common task in JavaScript. You can use various methods 
// to iterate over the properties of an object, such as `for...in` loops, `Object.keys()`, 
// `Object.values()`, and `Object.entries()`.

import TopicResult from '../01_Project/00-Lib.js';

// -------------------


// Lesson

let numbers = [1, 2, 3, 4, 5];

for(const element of numbers) {
    console.log(element); // Logs each number in the array
}

const dog = {
    name: 'Max',
    age: 5,
    eyeColor: 'blue'
}

for (const key in dog) {
    console.log(key);
}

const keys = Object.keys(dog);
for (const key of keys) {
    console.log(key);
}

const values = Object.values(dog);
for (const value of values) {
    console.log(value);
}

const entries = Object.entries(dog);
for (const entry of entries) {
    console.log(`Key: ${entry[0]} => Value: ${entry[1]}`);
}

// Exercise

const groceryList = {
    apples: 4,
    bananas: 6,
    oranges: 3
}

let GroceryListKey  = Object.keys(groceryList);

let GroceryListKeys = Object.values(groceryList);

let GroceryListEntries = Object.entries(groceryList);

for (const key of GroceryListKey) {
    console.log(key);
}

for (const value of GroceryListKeys) {
    console.log(value);
}

for (const entry of GroceryListEntries) {
    console.log(entry);
}

