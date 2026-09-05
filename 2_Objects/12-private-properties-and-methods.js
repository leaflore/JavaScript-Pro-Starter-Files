// JavaScript Pro - Learn JavaScript Essentials

// Private Properties and Methods

// In JavaScript, private properties and methods are not natively supported in the same way as in 
// some other programming languages. However, there are several ways to achieve privacy in JavaScript, 
// such as using closures, symbols, or the new class fields syntax.

// Closures are the link between the 

import TopicResult from '../01_Project/00-Lib.js';


// -------------------

// Lesson

function example() {
    const num = 5;

    function logNum() {
        console.log(num);
    }

    logNum(); // This will log 5, but num is not accessible outside of example function
}

example(); // This will log 5, but num is not accessible outside of example function


// Example 2

function example2() {
    const num = 5;

    return function logNum() {
        console.log(num);
    }
}

const innerFunction = example2(); // This will return the logNum function, but num is not accessible outside of example2 function
innerFunction(); // This will log 5, but num is not accessible outside of example2 function

// Example 3

function makeFunctions() {
    let privateNum = 0;

    function privateIncrement() {
        privateNum++;
    }

    return {
        logNum: () => console.log(privateNum),
        increment: () => {
            privateIncrement();
            console.log('Incremented!');
        }
    };
}

// Desctructuring syntax to get the functions from the returned object
const { logNum, increment } = makeFunctions();
logNum(); // This will log 0
increment(); // This will log 'Incremented!'
logNum(); // This will log 1

// The above example demonstrates how to turn variables from destructuring into methods that can be 
// called from outside the function, while still keeping the private variable private.


// Example 3: Using parameters in constructor function

function Programmer(name, preferredLanguage) {
    // Private propery
    let privateName = name; 
        // This property is not accessible outside of the Programmer function because it does not have
        // the this keyword. It is only accessible within the function and any inner functions (closures) 
        // that are defined within it.

    // Public property
    this.preferredLanguage = preferredLanguage;

    // Public method
    this.writeCode = function() {
        console.log(`${privateName} writes code in ${this.preferredLanguage};`);
    }

    // Private method
    function drinkCoffee() {
        console.log(`Gulp...`);
    }

    // Public method that uses a closure
    this.startDay = function() {
        drinkCoffee();
    }
}

const programmer = new Programmer('John', 'JavaScript');
programmer.writeCode();
programmer.startDay();

// Exercise

function bankAccount() {
    // TODO:
    // Private variable balance to store the account balance
    // Private property
    let accountBalance = 0;

    // TODO:
    // Private method to validate the amount deposited of withrdrawn
    const isValidAmount = function(amount) {
        try {
            if (typeof amount !== 'number' || amount <= 0) {
                throw new Error('Amount must be a positive number');
            } else {
                return true;
            }
        } catch (error) {
            console.error(error.message);
            return false;
        }
    }

    // TODO:
    // Public method to deposit money into the account
    // Public method
    this.deposit = function(amount) {
        try {
        if (isValidAmount(amount)) {
            accountBalance += amount;
            console.log(`Deposited: $${amount}. 
                        \nNew balance: $${accountBalance}`);
        }
        else {
            throw new Error('Deposit failed. Refer to the validation rules for the amount.');
        }
        } catch (error) {
            console.error(error.message);
        }
    }


    // TODO:
    // Public method to withdraw money from the account
    this.withdraw = function(amount) {
        try {
            if (isValidAmount(amount)) {
                if (amount > accountBalance) {
                    throw new Error('Insufficient funds for this withdrawal.');
                }
                else {
                    accountBalance -= amount;
                    console.log(`Withdrew: $${amount}.
                        \nNew balance: $${accountBalance}`);
                }
            }
            }
            catch (error) {
                console.error(error.message);
            }
    }

    // TODO:
    // Public method to check the account balance
    this.getBalance = function() {
        console.log(`Current balance: $${accountBalance}`);
    }
}

const myAccount = new bankAccount();
myAccount.deposit(100); // Deposited: $100. New balance: $100
myAccount.withdraw(50); // Withdrew: $50. New balance: $50
myAccount.getBalance(); // Current balance: $50
myAccount.withdraw(100); // Insufficient funds for this withdrawal.
myAccount.deposit(-20); // Amount must be a positive number. Deposit failed. Refer to the validation rules for the amount.