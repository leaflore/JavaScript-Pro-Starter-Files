// JavaScript Pro - Learn JavaScript Essentials

import TopicResult from '../01_Project/00-Lib.js';

// Object Oriented Programming Principles
    // 1. Abstrction     - A
    // 2. Polymorphism   - P
    // 3. Inheritance.   - Ir
    // 4. Encapsulation  - E

// -------------------

// Object Literals

// Object literals are a way to define objects in JavaScript using a simple syntax. They allow you to 
// create objects with properties and methods without the need for a constructor function or class.


let programmer = {
    name: 'Steven',
    preferredLanguage: 'JavaScript',
    writeCode:function() {
        let resultWriteCode =`${this.name} writes ${this.preferredLanguage} code.`; 
                                // Output: Steven writes JavaScript code.
        return resultWriteCode;

    },
    drinkCoffee() {
        let resultDrinkCoffee = `${this.name} drinks coffee while using programming to design buildings.`;
                                // Output: Steven drinks coffee while using programming to design buildings.
        return resultDrinkCoffee;
    }
}

let topicObjectLiteral = {
    topicResultOne: programmer.writeCode(),
    topicResultTwo: programmer.drinkCoffee()
};

const topicResultObjectLiteral = new TopicResult(
    "Object Literals",
    "Object Literals",
    topicObjectLiteral
);

topicResultObjectLiteral.printResult();


// -------------------

// Object Literals - Example

// Factory Function Example

let groceryListItem = {
    name: 'Apple',
    quantity: 4,
    display: function() {
        let resultDisplay = `You have ${this.quantity} x ${this.name} on your grocery list.`;
        return resultDisplay;
    }
}

let topicObjectLiteralExample = {
    ObjectLiteralExample: groceryListItem.display()
}

const resultObjectLiteralExample = new TopicResult(
    "Object Literals",
    "Object Literal Example",
    topicObjectLiteralExample
);

resultObjectLiteralExample.printResult();