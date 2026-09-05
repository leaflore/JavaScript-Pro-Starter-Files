// JavaScript Pro - Learn JavaScript Essentials

// Functions are Objects

// In JavaScript, functions are first-class objects. This means that functions can be 
// treated like any other object. They can be assigned to variables, passed as arguments 
// to other functions, and returned from functions.

import TopicResult from '../01_Project/00-Lib.js';

// -------------------

// Functions are Objects - Example
function add(num1, num2) {
    return num1 + num2;
}

const n = add;

const result = n(5, 10);
const parameterLength = n.length;

let topicFunctionsAreObjects = {
    FunctionsAreObjects: result,
    ParameterLength: parameterLength
}

let topicFunctionsAreObjectsResult = 
    new TopicResult('Objects',
                    'Functions are Objects',
                    topicFunctionsAreObjects
    );

topicFunctionsAreObjectsResult.printResult();

// -------------------

// Functions are Objects - Example 2

const ProgrammerFunc = new Function(`name`, `
    this.name = name;
    this.writeCode = function() {
        return this.name + ' is writing code.';
    };
`);

const programmer = new ProgrammerFunc('Alice');

let topicFunctionsAreObjectsExample2 = {
    ProgrammerName: programmer.name,
    WriteCodeResult: programmer.writeCode()
}

let topicFunctionsAreObjectsExample2Result =
    new TopicResult('Objects',
                    'Functions are Objects - Example 2',
                    topicFunctionsAreObjectsExample2
    );

topicFunctionsAreObjectsExample2Result.printResult();


// -------------------

// Functions are Objects - Quiz

function GroceryItem2(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.display = function() {
        return `There are ${this.quantity} ${this.name} on your grocery list.`;
    };
}
const newItem = new GroceryItem2('apples', 5);


function calculatePrice(groceryItem, price) {
    return `The cost of ${groceryItem.quantity} ${groceryItem.name} is $${groceryItem.quantity * price}`;
};

const priceFunction = calculatePrice;

const costOfApples = priceFunction(newItem, 0.85); // 5 apples for $4.25

let topicFunctionsAreObjectsExercise = {
    CostOfApples: costOfApples
};

let topicFunctionsAreObjectsExerciseResult =
    new TopicResult('Objects',
                    'Functions are Objects - Exercise',
                    topicFunctionsAreObjectsExercise
    );

topicFunctionsAreObjectsExerciseResult.printResult();
