// JavaScript Pro - Learn JavaScript Essentials

// ES6 Classes

// 2 - Hoisting



// -------------------


// Lesson

// const dev = new HoistingProgrammer('Steve', 'JavaScrtipt');
// Class declarations are not hoisted (can not be hoisted)

class HoistingProgrammer {
    constructor(name, preferredLanguage) {
        this.name = name;
        this.preferredLanguage = preferredLanguage;
    }

    code() {
        console.log(`${this.name} is coding in ${this.preferredLanguage}`);
        
    }
}

// Example of hoisting
greet();


// Hoisted function
function greet() {
    console.log('Hello World');
    
}


// sayGoodbye(); 
//          Produces error with Quoka "Cannot access sayGoodby before intialization"

// -------------------

// Function Expressions are not hoisted
const sayGoodbye = function() {
    console.log('Goodbye');
}

// -------------------

// Class Expressions are not hoisted

const MyProgrammerClass = class {
    constructor(name, preferredLanguage) {
        this.name = name;
        this.preferredLanguage = preferredLanguage;
    }

    code() {
        console.log(`${this.name} is coding in ${this.preferredLanguage}`);
        
    }
}

const ProgrammerExpression = new MyProgrammerClass('Steven', 'JavScript');
ProgrammerExpression.code();



// Exercise

/* 
Question:
What is the main difference in behaviour between functions declarations and function 
expressions regarding hoisting in JavaScript?

Answer:

Quesiton:
Why is it important to understand hoisting rules when working with class declarations in JavaScript?

Answer:


*/