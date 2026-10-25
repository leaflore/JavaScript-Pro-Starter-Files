// JavaScript Pro - Learn JavaScript Essentials

// ES6 Tooling

// 1 - Modules

// Modules allow you to break your code into separate files and import/export functionality 
// between them.

// -------------------

// -----------------------------------------------------------------------------------------


// -------------------

// Lesson 1: Modularity

/**
 * Modularity is the concept of breaking your code into smaller, reusable pieces called modules.
 * Each module can export its functionality and import functionality from other modules.
 */

/**
 * JavaScript Runtime Environment (JRE) Environment
 * 
 * JavaScript Runtime Environment (JRE) is the environment in which JavaScript code is executed. It provides the necessary environment 
 * for executing JavaScript code, including the global objects and APIs available. It is responsible for executing JavaScript code and 
 * providing the necessary environment for modules to work correctly. It ensures that modules can be loaded, executed, and interact with 
 * each other properly. It provides the necessary context for module resolution and dependency management. It ensures that the module 
 * system works seamlessly within the JavaScript runtime environment. It provides the necessary environment for handling module imports 
 * and exports correctly. It ensures that modules are executed in the correct order and that dependencies are resolved properly.It 
 * provides the necessary environment for handling module caching and ensuring efficient module loading.It ensures that modules are 
 * isolated and do not interfere with each other's scope. It provides the necessary environment for handling dynamic imports and 
 * asynchronous module loading. It ensures that modules can be properly unloaded and cleaned up when no longer needed.
 */


// Example 1:

// Importing modules using CommonJS syntax
// const ES6ToolingProgrammer = require('./_nodejs/Progammer');

import { ES6ToolingProgrammer, ES6Programmer2 } from './Progammer.js';

const toolingProgrammer = new ES6ToolingProgrammer('Steven', 'JavaScript');
toolingProgrammer.code();



const programmer = new ES6Programmer2('Steven', 'JavaScript');
programmer.code();


// programmer.#name; // Error: Private field '#name' must be declared in an enclosing class
/**
 * Encapsulation and Privacy:
 *
 * Encapsulation is the concept of bundling data (properties) and methods (functions) that operate on that data within a single unit, such as a class.
 * It helps in restricting direct access to some of the object's components, which is a means of preventing unintended interference and misuse.
 * Privacy in JavaScript can be achieved using private fields (denoted by #) within classes, ensuring that certain properties or methods are not accessible from outside the class.
 *
 * Example:
 *
 * class Programmer {
 *     #name;
 *     constructor(name, language) {
 *         this.#name = name;
 *         this.language = language;
 *     }
 *
 *     code() {
 *         console.log(`${this.#name} is coding in ${this.language}`);
 *     }
 * }
 *
 * const programmer = new Programmer('Steven', 'JavaScript');
 * programmer.code();
 * // programmer.#name; // Error: Private field '#name' must be declared in an enclosing class
 * This ensures that sensitive data within the class remains protected and cannot be accessed or modified directly from outside the class.
 * This demonstrates how encapsulation and privacy can be implemented in JavaScript classes to protect sensitive data.
 * In summary, encapsulation and privacy are key principles in object-oriented programming that help maintain the integrity and security of class data.
 * This is particularly important in larger codebases where maintaining control over how data is accessed and modified is crucial for code reliability and security.
 * In essence, encapsulation and privacy contribute to creating robust and maintainable code by clearly defining the boundaries of class data and behavior.
 * In practice, this means that developers can design classes with a clear understanding of which parts of the class are meant to be public and which are meant to be private, leading to more predictable and secure code.
 * Overall, encapsulation and privacy are fundamental concepts that help developers create well-structured, secure, and maintainable JavaScript applications.
 * 
 */

// ------ Exercise ------

/**
 * Create a file named GroceryItem.js and implement a GroceryItem class with the properties of 
 * name and quantity. Then implement a display method.
 */

import { GroceryItem } from './GroceryItem.js';

const orange = new GroceryItem('Orange', 5);
orange.display();

// ------ Leson 2: ES6 Modules ------

import { PSProgrammer } from './ProgrammerSkillsProgrammer.js';
const dev = new PSProgrammer('Steven', 'JavaScript');
dev.code();

// --------------------------- END IMPORTANT -----------------------

// ----- Active Recall -----
/**
 * Active Recall Questions:
 *
 * 0. Why is high cohesion important in software modules, and how does it contribute to the 
 * maintainability and understandability of the code?
 * 
 * Answer: 
 * 
 * High cohesion ensures that a module focuses on a single responsibility or closely 
 * related set of responsibilities. This makes the module easier to understand, maintain, and test. 
 * When modules have high cohesion, changes in one part of the system are less likely to impact 
 * unrelated parts, leading to more reliable and maintainable code.
 * 
 * 1. What is encapsulation in JavaScript classes?
 * 
 * Answer: 
 * 
 * Encapsulation is the concept of bundling data (properties) and methods (functions) that 
 * operate on that data within a single unit, such as a class. It helps in restricting direct 
 * access to some of the object's components, which is a means of preventing unintended 
 * interference and misuse.
 * 
 * 2. How can you achieve privacy for class properties in JavaScript?
 *
 * Answer: 
 * 
 * Privacy for class properties in JavaScript can be achieved using private fields, denoted 
 * by the # symbol. Private fields are only accessible within the class they are defined in and 
 * cannot be accessed or modified from outside the class.
 * 
 * 3. Why is it important to restrict direct access to certain class components?
 *
 * Answer: 
 * 
 * Restricting direct access to certain class components helps maintain the integrity and 
 * security of the class data. It prevents unintended interference and misuse, ensuring that the 
 * class behaves as intended and that sensitive data is protected.
 * 
 * 4. How does using private fields (#) help in maintaining class integrity?
 *
 * Answer: Using private fields (#) ensures that certain properties or methods are only 
 * accessible within the class, preventing external code from directly modifying them. This helps 
 * maintain the integrity of the class by controlling how its data is accessed and modified.
 * 
 * 5. Can you access a private field from outside the class? Why or why not?
 *
 * Answer: 
 * 
 * No, you cannot access a private field from outside the class. Private fields are 
 * designed to be accessible only within the class they are defined in, ensuring encapsulation and 
 * protecting the class's internal state from external interference.
 * 
 */