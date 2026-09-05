// JavaScript Pro - Learn JavaScript Essentials

import TopicResult from '../01_Project/00-Lib.js';

// Constructors - Constructor Functions

function Programmer(name, preferredLanguage) {
    this.name = name;
    this.preferredLanguage = preferredLanguage;
    this.writeCode = function() {
        return `${this.name} writes code in ${this.preferredLanguage}`;
    }
    this.drinksCoffee = function() {
        return `${this.name} drinks coffee while coding`;
    }
}

const newProgrammer = new Programmer('Alice', 'JavaScript');

let topicconstructorFunctionExample = {
    ConstructorWriteCode: newProgrammer.writeCode(),
    ConstructorDrinksCoffee: newProgrammer.drinksCoffee()
}

let constructorTopicResult = 
    new TopicResult('Constructors',
                    'Constructor Functions',
                     topicconstructorFunctionExample
    );

constructorTopicResult.printResult();

// -------------------

// Constructor Function - Exercise

function GroceryItem(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.display = function() {
        return `You need ${this.quantity} x ${this.name}`;
    }
}

const newGroceryItem = new GroceryItem('Apples', 5);

let topicConstructorFunctionExercise = {
    GroceryItemDisplay: newGroceryItem.display()
}

let constructorFunctionExerciseResult = 
    new TopicResult('Constructors',
                    'Constructor Function - Exercise',
                    topicConstructorFunctionExercise
    );

constructorFunctionExerciseResult.printResult();