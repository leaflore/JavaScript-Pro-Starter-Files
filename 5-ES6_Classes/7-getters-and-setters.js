// JavaScript Pro - Learn JavaScript Essentials

// ES6 Classes

// 7 - Getters and Setters

// In this lesson, we will discuss mixins in JavaScript and how they can be used to achieve 
// composition and code reuse without relying on inheritance.

// -----------------------------------------------------------------------------------------
// --------------------------- IMPORTANT ---------------------------
// On 10/04/2026 - I went to the jsconfig.json file not to check for JSDoc and Typescript configuration
// --------------------------- END IMPORTANT ---------------------------

// -------------------

// ----- Lesson -----

// Defines a WeakMap to store the language privately for each instance of GSProgrammer
const _gslanguage = new WeakMap();

class GSProgrammer {
    /**
     * 
     * @param {string} name 
     * @param {string} language 
     */
    constructor(name, language) {
        this.name = name;
        _gslanguage.set(this, language);
    }

    // Getter method for the language property
    getLanguage() {
        return _gslanguage.get(this);
    }
}

const gsProgrammer = new GSProgrammer("Alice", "JavaScript");
console.log(gsProgrammer.getLanguage());


// Example 2: If you want the property to be accessed like a regular property rather than a method, you can use a getter.

const _gslanguagewithgetter = new WeakMap();


class GSProgrammerWithObjectDefinedProperty {
    /** @type {string} */
    propertylanguage = "";

    /**
     * 
     * @param {string} name 
     * @param {string} language 
     */
    constructor(name, language) {
        this.name = name;
        _gslanguagewithgetter.set(this, language);
    

        // Define a getter for the 'language' property with a private backing field language
        /* This is a cleaner way to define a getter for the property without directly exposing the private WeakMap using ES^
        syntax. */
        Object.defineProperty(this, 'propertylanguage', {
            get: function() 
            {
                return _gslanguagewithgetter.get(this);
            }
        })
    }
}


const gsProgrammerWithObjectDefinedProperty = new GSProgrammerWithObjectDefinedProperty("Brandon", "JavaScript");
console.log(gsProgrammerWithObjectDefinedProperty.propertylanguage);

// -------------------

// Example 3: Using ES6 getter and setter syntax

const _gslanguagewithgettersetter = new WeakMap();
class GSProgrammerWithGetterSetter {
    constructor(name, language) {
        this.name = name;
        _gslanguagewithgettersetter.set(this, language);
    }

    // Getter and setter for the language property using ES6 syntax
    // Third level of using getters and setters in JavaScript classes

    // Getter method for the language property
    // --- IMPORTANT TOPIC TO REMEMBER ---
    get language() {
        return _gslanguagewithgettersetter.get(this);
    }

    // Setter method for the language property
    // --- IMPORTANT TOPIC TO REMEMBER ---
    // : The setter allows you to control how the language property is updated.
    set language(newLanguage) {
        if (!newLanguage) throw new Error("Language can not be empty.");
        _gslanguagewithgettersetter.set(this, newLanguage);
    }
}

const gsProgrammerwithGetterSetter = new GSProgrammerWithGetterSetter("Steven", "JavaScript");
console.log(gsProgrammerwithGetterSetter.language);

gsProgrammerwithGetterSetter.language = "TypeScript";
console.log(gsProgrammerwithGetterSetter.language);

// -------------------

// --------------------------- IMPORTANT ---------------------------
// Lesson Explanation:
/* In this lesson, we explored different ways to define and use getters and setters in JavaScript classes.
   We started with using a private WeakMap to store the language property and then defined a getter using Object.defineProperty.
   Finally, we used the ES6 getter and setter syntax to provide a more concise and readable way to access and update the 
   language property.
   
   ----- IMPORTANT -----
   Getters and setters allow us to encapsulate the internal representation of a property and control how it is accessed and 
   modified.

   One example is you can access a method as if it were a property, without needing to call it with parentheses. For instance:

   ```javascript
   console.log(gsProgrammerwithGetterSetter.language); // Accessing the language property using the getter
   gsProgrammerwithGetterSetter.language = "TypeScript"; // Updating the language property using the setter
   ```

   ----- END IMPORTANT -----

   In summary, getters and setters provide a way to define computed properties and encapsulate the internal state of an 
   object, making your code more maintainable and robust.
*/

// --------------------------- END IMPORTANT -----------------------
// ----- Active Recall -----

// 1. What are getters and setters in JavaScript classes?
// 2. How do you define a getter method in a class?
// 3. How do you define a setter method in a class?
// 4. What are the benefits of using getters and setters?
