// import path module for resolving file paths
const path = require('path');

// export webpack configuration object
module.exports = {
    mode: 'production', // set the mode to production for optimized output
    // set the mode to development for better debugging
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