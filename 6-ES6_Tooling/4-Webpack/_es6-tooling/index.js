// 


// A class representing a programmer with private experience field and public methods to be used in babel exercise for transpiling 
// modern JavaScript features
export class Programmer {
    role = 'developer';

    // Modern JavaScript private field for experience
    #experience;

    
    constructor(name, technology, experience) {
        this.name = name;
        this.technology = technology;
        // Assign the private experience field
        this.#experience = experience;
    }

    develop() {
        console.log(`${this.name} develops software using ${this.technology} with ${this.#experience} years of experience`);
    }

    getExperience() {
        return this.#experience;

    }
}