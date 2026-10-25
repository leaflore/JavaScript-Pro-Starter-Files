class ES6ToolingProgrammer {
    constructor(name, language) {
        this.name = name;
        this.language = language;
    }


    code() {
        console.log(`${this.name} is coding in ${this.language}`);
    }

}

class ES6Programmer2 {
      #name;
      constructor(name, language) {
          this.#name = name;
          this.language = language;
     }
 
      code() {
          console.log(`${this.#name} is coding in ${this.language}`);
     }
 }

// Export the Programmer class as the module's default export
export { ES6ToolingProgrammer, ES6Programmer2 };

// If you want to uses the export as named export, you cand do the following:
// 
// module.exports = ES6ToolingProgrammer;
