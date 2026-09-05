// JavaScript Pro - Learn Java Essentials

// Abstaction

// Abstraction is a fundamental concept in programming that allows you to hide the complex 
// implementation details of a system and expose only the necessary parts to the user. In JavaScript, 
// abstraction can be achieved through various means, such as functions, classes, and modules.

import TopicResult from '../01_Project/00-Lib.js';


// -------------------

// Lesson

function Programmer(name, preferredLanguage) {
    this.name = name;
    this.preferredLanguage = preferredLanguage;


    // Public method


    this.writeCode = function() {
        console.log(`${this.name} writes code in ${this.preferredLanguage}`);
    }

    // Private method

    // In JavaScript, we can create private methods by defining them within the constructor 
    // function and not exposing them as properties of the object. This way, they can only be 
    // accessed from within the constructor function.

    const debugCode = function() {
        console.log(`${this.name} is debugging code in ${this.preferredLanguage}`);
    }.bind(this); // NOTE: Bind 'this' (the name of the current function) to the current instance

    // Public method that uses the private method
    this.startDay = function() {
        debugCode();
    } 
}

const programmer1 = new Programmer('Alice', 'JavaScript');
programmer1.writeCode();
programmer1.startDay();


// Summary: 
// It is good practice to only show what you need to. It is also good to use abstraction in your 
// code to make it more modular, maintainable, and easier to understand. By hiding the implementation 
// details and exposing only the necessary parts, you can create a cleaner and more user-friendly 
// interface for your code.


// -------------------

// Exercise

function GroceryItem(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.display = function() {
        console.log(`${this.quantity} x ${this.name}`);
    };
}

function GroceryList() {
    const items = []; // Private array to store grocery items

    // TODO: Implement the addItem method to add a new item to the grocery list
    this.addItem = function(name, quantity) {
        this.name = name;
        this.quantity = quantity;
        const newItem = new GroceryItem(this.name, this.quantity);
        items.push(newItem);
    }
    // TODO: Implement the removeItem method to remove an item from the grocery list by name
    this.removeItem = function(name) {
        this.name = name;
        const index = items.findIndex(item => item.name === this.name);
        if (index !== -1) {
            items.splice(index, 1); // Remove the item from the array`
        }
    }

    // TODO: Implement the displayItems method to display all items in the grocery list
    this.displayItems = function() {
        items.forEach(item => item.display());
    }
    
    // TODO: Implement the calculateTotalQuantity method to calculate the total quantity of items in 
    // the grocery list
    const calculateTotalQuantity = function() {
        return items.reduce((total, item) => total + item.quantity, 0);
    }

    // TODO: Implement the getTotalQuantity method to calculate the total quantity of items in the 
    // grocery list
    this.getTotalQuantity = function() {
        return calculateTotalQuantity();
    }
}

const myGroceryList = new GroceryList();
myGroceryList.addItem('Apples', 5);
myGroceryList.addItem('Bananas', 3);
myGroceryList.addItem('Oranges', 2);

console.log('Grocery List:');
myGroceryList.displayItems(); 
// Output:
// 5 x Apples
// 3 x Bananas
// 2 x Oranges

console.log(`Total quantity of items: ${myGroceryList.getTotalQuantity()}`); // Output: Total quantity of items: 10

myGroceryList.removeItem('Bananas');
console.log(`Total quantity of items after removing Bananas: ${myGroceryList.getTotalQuantity()}`);
            // Output: Total quantity of items after removing Bananas: 7
