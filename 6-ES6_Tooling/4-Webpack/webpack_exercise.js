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
 * 3. Create script
 *      a. Open your package.json file.
 *      b. Add a build script to run Webpack:
 *          "scripts": {
 *              "build": "webpack"
 *          }
 *      c. This allows you to run npm run build to bundle your JavaScript files using Webpack.
 * 
 * 4. Create an HTML file to include the bundled JavaScript
 *      a. Create an index.html file in the root of your project.
 *      b. Include a script tag to load the bundled JavaScript file:
 *          <script src="./dist/main.js"></script>
 *      c. This ensures that your bundled JavaScript is included in the HTML file and can be executed in the browser.
 * 
 * 5. Run the build script
 *      a. Open your terminal and navigate to the root of your project.
 *      b. Run the build script using npm:
 *          npm run build
 *      c. This will execute Webpack and generate the bundled JavaScript file in the dist directory.
 * 
 * 6. May need to run this script if package dependencies do not have permissions.
 *      a. chmod +x /Users/brandonkemp/Documents/00-J-Repositories/00-G01-JS-Advcd-Files/JavaScript-Pro-Starter-Files/6-ES6_Tooling/4-Webpack/_es6-tooling/node_modules/.bin/webpack
 * 
 *      b. This script changes the file permissions to make the Webpack binary executable on your Mac.
 * 7. Explanation of the chmod command
 *      a. Here is the exact breakdown of what each part of the command does:
 *          • chmod: Short for Change Mode. It is a system command used to change the access permissions of files and folders.
 *          • +x: This flag stands for +eXecutable. It tells the operating system to grant "execute" permissions to the file, allowing it to run as a program or script.
 *          • /Users/.../webpack: This is the absolute file path pointing to the specific Webpack binary inside your project's local node_modules folder.
 *
 *      b. Why was it needed?
 *          When you try to run a command line tool like Webpack, macOS checks if the file has an "executable" flag. If that flag is missing
 *          (often caused by copy-pasting folders, switching across different operating systems, or npm installation glitches), the system 
 *          blocks it and throws the "Permission denied" error you saw earlier. Running this script flags the file as safe to run.
 *
 *  8. Press Go Live
 *      a. If you are using a code editor like Visual Studio Code with the Live Server extension, click on the "Go Live" button.
 *      b. This will start a local development server and open your index.html file in the browser.
 *      c. You should see your bundled JavaScript being executed in the browser.
 * 
 */
// Active Recall