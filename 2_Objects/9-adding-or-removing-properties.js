// JavaScript Pro - Learn Java Essentials

// Adding or Removing Properties

import TopicResult from '../01_Project/00-Lib.js';
// -------------------

// Lesson

const person = {
    name: 'Steven'
};

console.log(person); // { name: 'Steven' }

person.favoriteFood = 'tacos'; // Adding a new property to the object
console.log(person); // { name: 'Steven', favoriteFood: 'tacos' }

person['favoriteIceCream'] = 'chocolate'; // Adding a new property using bracket notation
console.log(person); // { name: 'Steven', favoriteFood: 'tacos', favoriteIceCream: 'chocolate' }

delete person.favoriteIceCream; // Removing a property from the object
console.log(person); // { name: 'Steven', favoriteFood: 'tacos' }

person.eat = function() {
    return `${this.name} eats ${this.favoriteFood}`;
};

person.eat(); // Steven eats tacos

let topicAddingOrRemovingProperties = 
    new TopicResult('Objects',
                    'Adding or Removing Properties',
                    {
                        ...person,
                        eat: person.eat()
                        // NOTE: Using the ... rest operator to revise the 
                        // object before it is called in the function is very 
                        // typical operation to preform in JavaScript.
                    }
);
    
topicAddingOrRemovingProperties.printResult();


// -------------------

// Exercise

function AddRemoveGroceryItem(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.display = function() {
        return `There are ${this.quantity} ${this.name} on your grocery list.`;
    };
}

const newGroceryItem = new AddRemoveGroceryItem('bananas', 3);

newGroceryItem.groceryAisle = 'Aisle 5'; // Adding a new property to the object

let topicAddingOrRemovingPropertiesExerciseResult = 
    new TopicResult('Objects',
                    'Adding or Removing Properties - Exercise',
                    {
                        ...newGroceryItem,
                        display: newGroceryItem.display()
                    }

    );

topicAddingOrRemovingPropertiesExerciseResult.printResult();
