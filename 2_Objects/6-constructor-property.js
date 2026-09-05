// JavaScript Pro - Learn JavaScript Essentials

// Constructors - Constructor Property

// The constructor property returns a reference to the Object constructor function that 
// created the instance object.

import TopicResult from '../01_Project/00-Lib.js';

function Programmer(name, preferredLanguage) {
    this.name = name;
    this.preferredLanguage = preferredLanguage;
    this.drinksCoffee = function() {
        return `${this.name} drinks coffee while coding1`;
    }
    this.writesCode = function() {
        return `${this.name} writes code in ${this.preferredLanguage}`;
    }
}

const newProgrammer = new Programmer('Alice', 'JavaScript');

let topicConstructorPropertyExample = {
    ConstructorProperty: newProgrammer.drinksCoffee(),
    ConstructorProperty2: newProgrammer.writesCode(),
    ConstructorProperty3: newProgrammer.constructor 
        // Constructor property
        // Returns a reference to the Object constructor function that created the instance object.
}

let constructorPropertyTopicResult =
    new TopicResult('Objects',
                    'Constructor Property',
                    topicConstructorPropertyExample
    );

constructorPropertyTopicResult.printResult();