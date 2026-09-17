// JavaScript Pro - Learn JavaScript Essentials

// ES6 Classes

// 6 - Private Members using Weakmaps

// In this lesson, we will discuss mixins in JavaScript and how they can be used to achieve 
// composition and code reuse without relying on inheritance.

// -------------------

// Lesson 1

const _language = new WeakMap();
const _work = new WeakMap();

class WeakMapProgrammer {
    /**
     * 
     * @param {string} name 
     * @param {string} language 
     */
    constructor(name, language) {
        this.name = name;

        // Store lanuage in WeakMap with 'this' as the key
        _language.set(this, language);
    }
}

// -------------------

// Lesson 2 - Private Members using WeakMaps

// WeakMaps provide a truly private mechanism for storing data associated with an object.

// Before class is created
const _weakMapLanguage = new WeakMap();
class WeakMapPrivateProgrammer {
    /**
     * @param {string} weakMapName
     * @param {string} weakMapLanguage
     */
    constructor(weakMapName, weakMapLanguage) {
        _weakMapLanguage.set(this, weakMapLanguage);
    }
}

const wmProgrammer = new WeakMapPrivateProgrammer('Steven', 'JavaScript');
console.log(_weakMapLanguage.get(wmProgrammer));

// -------------------


//