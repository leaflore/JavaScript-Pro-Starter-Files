 // JavaScript Pro - Learn JavaScript Essentials

// Object Exercise Class Library

// Result Print Class
export default class TopicResult {
    constructor(sectionString, methodString, result) {
        this.sectionString = sectionString;
        this.methodString = methodString;
        this.result = result;
    }

    // Print result objects' properties in a formatted manner
    printObjectProperties() {
        try {
            for (const [key, value] of Object.entries(this.result)) {
                console.log(`\n${key}: ${value}`);
            }
        } catch (error) {
            console.error('Error printing object properties:', error);
        }
    }


    printResult() {
        try {
            console.log("\n---------------------------------------");
            console.log(`Section: ${this.sectionString}
                         \nMethod: ${this.methodString}\n`);
            this.printObjectProperties();
        } catch (error) {
            console.error('Error printing result:', error);
        } finally {
            console.log("---------------------------------------\n");
        }
    }
}