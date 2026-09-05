// JavaScript Pro - Learn JavaScript Essentials

// 2 - Prototypes and Prototypical Inheritance

// Prototypes are a fundamental concept in JavaScript that allows objects to inherit properties and 
// methods from other objects. Every JavaScript object has a prototype, which is another object that 
// it inherits properties and methods from. This allows for a powerful and flexible way to create 
// objects and share functionality between them.

import TopicResult from '../01_Project/00-Lib.js';


// -------------------

// Lesson

let user = {
    name: 'Brandon',
    surname: 'Kemp',
    email: 'br.kemp1@gmail.com',
    isActive: true,

    // Example: .fullName = 'Bruce Wayne'
    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    },

    get fullName() {
        return ` ${this.name} ${this.surname}`;
    },

    login() {
        console.log(`${this.fullName} has logged in`);
    },

    logout() {
        console.log(`${this.fullName} has logged out`);
    }  
};



let admin = {
    __proto__: user, // Inherit from user object
    isAdmin: true, // Make is it able to tell if the admin user has admin additional privileges
    manageUsers() {
        console.log(`${this.fullName} is managing users`);
    }

};

let guest = {
    __proto__: user, // Inherit from user object
    isGuest: true, // Make is it able to tell if the guest user has guest additional privileges
    browseContent() {
        console.log(`${this.fullName} is browsing content`);
    }
};

// Example of not setting the prototypical inheritance
let consultant ={
    isConsultant: true, // Make is it able to tell if the consultant user has consultant 
                        // additional privileges
    uploadFiles() {
        console.log(`${this.fullName} is uploading files`);
    }
};

// Set the prototype of consultant to user object after creation of the consultant object. This is an 
// example of setting the prototype after the object has been created.
consultant.__proto__ = user; // Set the prototype of consultant to user object


// -------------------

// Example of second level prototypical inheritance

let superAdmin = {
    __proto__: admin, // Inherit from admin object
    isSuperAdmin: true, // Make is it able to tell if the super admin user has super admin 
    manageAdmins() {
        console.log(`${this.fullName} is managing admins`);
    }
};

// Example of using the setter and getter methods

admin.fullName = 'Bruce Wayne';
console.log(admin.fullName); // Output: "Bruce Wayne"
console.log(user.fullName); // Output: "Brandon Kemp"

// -------------------

// Shows a list keys in the admin object, including inherited properties from the user object
for (let key in admin) {
    console.log(key); // Output: name, surname, email, isActive, fullName, login, logout, isAdmin, manageUsers
}

// Shows a list of own properties in the admin object, excluding inherited properties from the 
// user object
console.log(Object.keys(admin)); // Output: ["isAdmin", "manageUsers"] - only own properties of the admin object)

// Example

const programmerPrototype = {
    writeCode: function() {
        console.log(`Writing code in ${this.preferredLanguage}`);
    }
}

function Programmer(name, preferredLanguage) {
    let privateName = name; // private variable
}

     
//
for (let key in admin) {
    console.log(key); // Output: name, surname, email, isActive, fullName, login, logout, isAdmin, manageUsers
}

console.log(Object.keys(admin)); // Output: ["isAdmin", "manageUsers"] - 
//                                  only own properties of the admin object)


                                                                                                                                                                                                                 
// ___propt____ 
// - is a getter and setter for the prototype of an object. It allows you to access and modify the
// prototype of an object. When you set the __proto__ property of an object, you are changing its prototype, 
// which can affect the behavior of the object and its inheritance chain. When you get the __proto__ property 
// of an object, you are accessing its prototype, which can be useful for inspecting the object's inheritance 
// chain and understanding how it behaves.


// NOTE: JavaScript is a prototypal language, that objects can be created without other objects, and that objects 
// can inherit from other objects. In this exercise, we will create a prototype object for a programmer and then 
// create a constructor function that will allow us to create new programmer objects that inherit from the prototype.
    
// --------

// Exercise

const programmerPrototype2 = {
    writeCode: function() {
        console.log(`Writing code in ${this.preferredLanguage}`);
    },
    drinkCoffee: function() {
        console.log(`Drinking coffee while coding in ${this.preferredLanguage}`);
    } 
};

function Programmer2(name, preferredLanguage) {
    let privateName = name; // private property
    this.preferredLanguage = preferredLanguage; // public property

    Object.defineProperties(this, {
        'name': {
            get: function() {
                return privateName;
            },
            set: function(value) {
                privateName = value;
                // “The set syntax binds an object property to a function to be called when there is an attempt to set that property. 
                // It can also be used in classes.” 

                // Setters turn a property into an accessor property (or "virtual" property). Instead of using regular parentheses like 
                // a function call (e.g., user.setName('Alex')), you interact with it directly using the assignment operator (=).
            }
        }
    });

    // NOTE: Inheritance

    // -------------------
    
    // Inherit common behavior from the programmerPrototype2 object. This is the way 
    // JavaScript does object inheritance. The new object will have access to the methods 
    // defined in the programmerPrototype2 object.
    Object.setPrototypeOf(this, programmerPrototype2);
}

// Result
const jsProgrammer = new Programmer2('Brandon', 'JavaScript');
jsProgrammer.writeCode(); // Output: "Writing code in JavaScript"
jsProgrammer.drinkCoffee(); // Output: "Drinking coffee while coding in JavaScript"
console.log(jsProgrammer.name); // Output: "Brandon"
jsProgrammer.name = 'Bruce';
console.log(jsProgrammer.name); // Output: "Bruce"


// Protypal Inheritance Exercise

