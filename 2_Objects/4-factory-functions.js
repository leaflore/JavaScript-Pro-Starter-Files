// JavaScript Pro - Learn JavaScript Essentials

import TopicResult from '../01_Project/00-Lib.js';

// Factories - Factory Functions

/* Factory functions are a way to create objects in JavaScript using a function that returns an 
   object. They allow you to create multiple instances of an object with similar properties and 
   object. They allow you to create multiple instances of an object with similar properties and
   methods without the need for a constructor function or class. 
*/


// -------------------

// Factory Function Example

function createProgrammer(name, preferredLanguage) {
   return {
      name,
      preferredLanguage,
      writeCode() {
         return `${this.name} writes ${this.preferredLanguage} code.`;
      },
      drinkCoffee() {
         return `${this.name} drinks coffee while using programming to design buildings.`;
      }
   }
}

const newProgrammer = createProgrammer('Alice', 'JavaScript');


let topicFactoryFunctionExample = {
    FactoryFunctionExample: newProgrammer.writeCode()
}

const resultFactoryFunctionExample = new TopicResult(
    "Factory Functions",
    "Factory Function Example",
    topicFactoryFunctionExample
);

resultFactoryFunctionExample.printResult();


// -------------------

// Factory Function - Additional Example

function createGroceryListItem(name, quantity) {
   return {
      name,
      quantity,
      display() {
         return `You need ${this.quantity} x ${this.name}.`;
      },
   }
}

const newGroceryItem = createGroceryListItem('Apples', 4);


let topicFactoryFunctionAdditionalExample = {
    FactoryFunctionAdditionalExample: newGroceryItem.display()
}

const resultFactoryFunctionAdditionalExample = new TopicResult(
    "Factory Functions",
    "Factory Function - Additional Example",
    topicFactoryFunctionAdditionalExample
);

resultFactoryFunctionAdditionalExample.printResult();