// JavaScript Pro - Learn JavaScript Essentials

// ES6 Classes

// 5 - Private Members using Symbols

// -------------------

// Lesson 1

// Private Propeteries with the underscore symbol
class PrivateMemberProgrammer {
    /**
     *
     * @param {string} name
     * @param {string} language
     */
    constructor(name, language) {
        // Not truly private, just a naming conventions
        this._language = language;
    }
}

const privateMemberProgrammer = new PrivateMemberProgrammer('Steven', 'JavaScript');
console.log(privateMemberProgrammer._language);

// -------------------

// Lesson 2

// Private Properties with ES6 symbols

//Before class is created
const _actualLanguage = Symbol();

class ActualPrivateProgrammer {
    /**
     * @param {string} actualPrivateName
     * @param {string} actualPrivateLanguage
     */
    constructor(actualPrivateName, actualPrivateLanguage) {
        // More private but still accessible through reflections
        this[_actualLanguage] = actualPrivateLanguage;
    }
}

const  apProgrammer = new ActualPrivateProgrammer('Steven', 'JavaScript');
console.log(Object.getOwnPropertySymbols(apProgrammer));
const languageSymbol = Object.getOwnPropertySymbols(apProgrammer)[0];

console.log(/** @type {any} */ (apProgrammer)[languageSymbol]);

// Symbols provide a pseudo private mechanism as they are not accessible through normal property
// access, but can still be accessed using reflection methods like Object.getOwnPropertySymbols.

// They can be accessed through Object.getOwnPropertySymbols, so they are not truly private.


// -------------------

// Lesson 3

// Private Methods using ES6 Sybols


const _methodLanguage = Symbol();
const _code = Symbol(); // A unique value

class SymbolPrivateMethodProgrammer {
    /**
     *
     * @param {string} methodName
     * @param {string} methodLanguage
     */
    constructor(methodName, methodLanguage) {
        this.methodName = methodName;
        this[_methodLanguage] = methodLanguage;
    }

    // Private method
    [_code]() {
        console.log(`${this.methodName} is coding in ${this[_methodLanguage]}`);

    }
}

const symbolProgrammer = new SymbolPrivateMethodProgrammer('Steven', 'JavaScript');
symbolProgrammer[_code]();



// -------------------

// Lesson 4.1  New # Syntax

class HashPrivateSyntaxExample {
    #hashLanguage;

    /**
     *
     * @param {string} hashName
     * @param {string} hashLanguage
     */
    constructor(hashName, hashLanguage) {
        this.hashName = hashName;
        this.#hashLanguage = hashLanguage;
    }

    //Truly private method
    #code() {
        console.log(`Coding in ${this.#hashLanguage}`);

    }

    displayCode() {
        return this.#code();
    }
}

const hashExample = new HashPrivateSyntaxExample('Steven', 'JavaScript');
// hashExample.#code(); // This would result in a syntax error as #code is private
hashExample.displayCode(); // This will call the private #code method internally

// -------------------


// Lesson 4.2 - Private Members using the new # syntax (ES2022)

// Example of using the new # syntax for private members
class HashPrivateProgrammer {
    #language;

    // JSODocs Annotations
    // These are used to define the type of the variables instead of using TypeScript or other type systems.

    /**
     * @param {string} name
     * @param {string} language
     */
    constructor(name, language) {
        this.#language = language;
    }

    getLanguage() {
        return this.#language;
    }
}

const hashProgrammer = new HashPrivateProgrammer('Steven', 'JavaScript');
console.log(hashProgrammer.getLanguage());

// -------------------


/*
---- Active Recall ----

1. What are the benefits and limitations of using Symbols for creating private properties in
JavaScript classes?

Answer:
Symbols provide a way to create pseudo-private properties that are not accessible through
normal property access. However, they can still be accessed using reflection methods like
Object.getOwnPropertySymbols, so they are not truly private.

2. How do private class fields introducted in ES2022 improve data encapsulation compared to previous
approaches?

Answer:
The # syntax allows defining private class fields that are truly encapsulated and cannot be
accessed or modified from outside the class.
*/

// -------------------



// -------------------
/*

---- Summary ----
1. ES6 Symbols can be used to create pseudo-private properties and methods.
2. Symbols are not accessible through normal property access but can be accessed using reflection
methods like Object.getOwnPropertySymbols.

3. The new # syntax (ES2022) provides true private members that are not accessible outside the
class.

*/
