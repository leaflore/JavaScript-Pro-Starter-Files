// JavaScript Pro - Learn JavaScript Essentials

// ES6 Classes

// 6 - Private Members using Weakmaps

// In this lesson, we will discuss mixins in JavaScript and how they can be used to achieve 
// composition and code reuse without relying on inheritance.

// -------------------

// Lesson 1

const _language = new WeakMap(); // Private storage for language property
const _work = new WeakMap(); // Private storage for work property

class WeakMapProgrammer {
    /**
     * 
     * @param {string} name 
     * @param {string} language 
     */
    constructor(name, language) {
        this.name = name;

        // Store language in WeakMap with 'this' as the key
        _language.set(this, language);

        // Store a private method in a WeakMap with 'this' as the key
        _work.set(this, () => {
            console.log(`${this.name} is coding in ${_language.get(this)}`)
        })
    }

    code() {
        // Access and invoke the private method
        _work.get(this)();
    }
}

// -------------------

// Lesson 2 - Private Members using WeakMaps

// WeakMaps provide a truly private mechanism for storing data associated with an object.

// Before class is created
const _weakMapLanguage = new WeakMap();
class WeakMapPrivateProgrammer {
    /**
     * @param {string} weakMapName //JSDoc description for weakMapName
     * @param {string} weakMapLanguage //JSDoc description for weakMapLanguage
     */
    constructor(weakMapName, weakMapLanguage) {
        
        // Store the language in the WeakMap with 'this' as the key
        // The this keyword is used as the key in the WeakMap to associate the private data with the instance of the class
        _weakMapLanguage.set(this, weakMapLanguage);
    }
}

// instance of WeakMapPrivateProgrammer
const wmProgrammer = new WeakMapPrivateProgrammer('Steven', 'JavaScript');
console.log(_weakMapLanguage.get(wmProgrammer));
 
// -------------------

//

// WeakMap for storing private properties of WeakMapTwoPrivateProgrammer instances
const privateProps = new WeakMap();

class WeakMapTwoPrivateProgrammer {
    /**
     * @param {string} name //JSDoc description for name
     * @param {string} language //JSDoc description for language
     */
    constructor(name, language) {
        // Store the private properties in the WeakMap with 'this' as the key
        // This ensures that the properties are only accessible within the class inside the weak map
        privateProps.set(this, {
            name: name,
            language: language,
            work: () => {
                console.log(`${privateProps.get(this).name} is coding in ${privateProps.get(this).language}`);
            }
        })
    }

    // code method that invokes the private work function stored in the WeakMap
    code() {
        privateProps.get(this).work();
    }
}

const wmTwoProgrammer = new WeakMapTwoPrivateProgrammer('Alice', 'JavaScript');
wmTwoProgrammer.code();

/*
----- Active Recall -----

Quesiton:

What are the benefits of using WeakMap in terms of garbage collection, and how does this prevent memoery leaks in JavaScript
applications?

Answer:

WeakMap allows the garbage collector to automatically remove entries when the key object is no longer reachable. 
This prevents memory leaks because the private data associated with an object will be cleaned up as soon as the object itself 
is no longer in use.

-------------------

Question:

What distinguishes WeakMap from the ES2022 # syntax for private properties and methods, and why might you choose to use 
WeakMap?

Answer: 

WeakMap provides a truly private mechanism for storing data associated with an object, as the keys are not 
accessible outside the WeakMap. In contrast, the ES2022 # syntax for private properties and methods is syntactic sugar 
that enforces privacy at the language level. You might choose to use WeakMap when you need to associate private data with
 objects without modifying their structure or when you need to manage private data for objects created outside your control.
*/
