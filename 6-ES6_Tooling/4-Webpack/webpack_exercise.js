// JavaScript Pro - Learn JavaScript Essentials

// ES6 Tooling - Webpack

// 1 - Setting up Webpack

// Webpack 
// Webpack is a popular bundler that allows you to bundle JavaScript files along with other assets 
// like CSS and images.

// -------------------



// -----------------------------------------------------------------------------------------


// -------------------

// Lesson 1: Webpack

// -------------------

/**
 * 
 *  1. Install Webpack and its CLI
 *      a. Run npm install webpack webpack-cli babel-loader --save-dev --legacy-peer-deps
 *      b. This will install Webpack, its CLI, and the Babel loader as development dependencies.
 *          1. webpack: The core Webpack library.
 *              Webpack is responsible for bundling your JavaScript files and other assets.
 *          2. webpack-cli: Command-line interface for Webpack.
 *              Webpack CLI allows you to run Webpack commands from the terminal.
 *          3. babel-loader: Loader for integrating Babel with Webpack.
 *              Babel loader allows Webpack to transpile modern JavaScript code using Babel.
 *          4. save-dev: Ensures that the dependencies are installed as development dependencies rather than production 
 *              dependencies.
 *          5. legacy-peer-deps: Ensures that peer dependencies are installed in a way compatible with older versions of npm.
 *  2. Create a Webpack configuration file
 *      a. Create a file named webpack.config.js in the root of your project.
 *      b. This file will contain the configuration for Webpack, specifying entry and output points, loaders, and other settings.
 *           // import path module for resolving file paths
            const path = require('path');

            // export webpack configuration object
            module.exports = {
                mode: 'development', // set the mode to development for better debugging
                entry: './src/index.js', // specify the entry point for the application
                output: {
                    path: path.resolve(__dirname, 'dist'), // specify the output directory for the bundled files
                    filename: 'main.js' // specify the name of the output bundle file
                },
                module: {
                    rules: [
                        {
                            test: /\.js$/, // apply this rule to JavaScript files
                            exclude: /node_modules/, // exclude node_modules from being processed by this rule
                            use: {
                                loader: 'babel-loader', // use Babel loader to transpile JavaScript files
                            }
                        }
                    ]
                }
            }
 *

 */
// Active Recall