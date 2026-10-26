// JavaScript Pro - Learn JavaScript Essentials

// ES6 Tooling

// 1 - Transpilers

// Transpilers allow you to convert modern JavaScript code into a version compatible with older 
// environments.

// -------------------

// Bundler

// Bundlers allow you to combine multiple JavaScript files into a single file, making it easier to 
// manage dependencies and improve performance.

// Webpack 
// Webpack is a popular bundler that allows you to bundle JavaScript files along with other assets 
// like CSS and images.

// -------------------



// -----------------------------------------------------------------------------------------


// -------------------

// Lesson 1: Transpilers

// -------------------

// Active Recall

/** 

1. What is the primary function of a transpiler in modern JavaScript development, and why is it
    important?

Answer: 
    
A transpiler converts modern JavaScript code into a version compatible with older 
environments, ensuring that new features can be used without breaking functionality in older 
browsers or runtimes.

2. How does Babel help in making modern JavaScript features compatible with older browsers?

Answer: 
    
Babel is a popular JavaScript transpiler that converts modern JavaScript code into a version 
compatible with older browsers. It allows developers to use the latest JavaScript features while 
ensuring that the code runs correctly in environments that do not support those features.

3. What role does a bundler like Webpack play in optimizing web application performance and resource
    management?

Answer:

A bundler like Webpack helps optimize web application performance and resource management by combining 
multiple JavaScript files and other assets into a single bundle. This reduces the number of HTTP 
requests, improves load times, and allows for efficient dependency management and code splitting.

------ NOTE -----

Rollup is a module bundler for JavaScript that focuses on producing small and efficient bundles by 
using the ES6 module system. It is particularly well-suited for libraries and applications that need 
to optimize for performance and tree-shaking.

----- END NOTE -----

4. Why might Node.js applications generally not require transpilers like Babel, but still benefit from
    using bundlers like Webpack?

Answer:

Node.js applications generally run in a controlled environment where the version of JavaScript 
supported is known and consistent. Therefore, they often do not require transpilers like Babel to 
convert modern JavaScript features for compatibility. However, bundlers like Webpack can still be 
beneficial for Node.js applications by optimizing module loading, managing dependencies, and 
improving overall performance through techniques like code splitting and tree-shaking.


*/
