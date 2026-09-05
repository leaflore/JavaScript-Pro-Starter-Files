// JavaScript Pro - Learn JavaScript Essentials

// 13 - Getters and Setters

// Getters and setters are special methods that allow you to define how to access and modify the 
// properties of an object. They provide a way to encapsulate the internal representation of an object 
// and control how its properties are accessed and modified.

import TopicResult from '../01_Project/00-Lib.js';


// -------------------

// Lesson

// Getter example

function Programmer(name, preferredLanguage) {

    // Private property
    let privateName = name;

    // Getter method
    Object.defineProperties(this, {
        'name': {
            get: function() {
                return privateName;
            },

            // Setter method
             // Can implementation rules
            set: function(newName) {
                if (!newName) {
                    console.log('Name cannot be empty.');
                    return;
                } else {
                    privateName = newName;
                }
            }
        }
    })

    // Public property
    this.preferredLanguage = preferredLanguage;

    // Public method
    this.writeCode = function() {
        console.log(`${privateName} is writing code in ${this.preferredLanguage}`);
    }

    // Private metheod
    function privateMethod() {
        console.log('This is a private method');
    }
}

const programmer = new Programmer('Alice', 'JavaScript');
console.log(programmer.name)

// Setter example
programmer.name = 'Bob';
console.log(programmer.name);

// Exercise