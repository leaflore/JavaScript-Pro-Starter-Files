
# Node Architecture

## Introduction to Node architecture

Runtime environment - A runtime environment is a setting where programs are executed it provides built-in libraries and manages the program's execution.

It offers various services such as handling input out requests, or network 
requests.

## JavaScript and Web Browsers

Each browswer comes with it's own javascript engine

Microsoft Edge -> Chakra
Firefox -> SpiderMoney
Google Chrome -> V8

## Document Object Model (DOM)

The **HTML DOM (Document Object Model)** is a structured representation of a web page that allows developers to access, modify, and control its content and structure using JavaScript. It powers most dynamic website interactions, enabling features like real-time updates, form validation, and interactive user interfaces.

The **HTML Document Object Model (DOM)** is a tree structure, where each HTML tag becomes a node in the hierarchy.
At the top, the `<html>` tag is the root element, containing both `<head>` and `<body>` as child elements.
These in turn have their own children, such as `<title>`, `<div>`, and nested elements like `<h1>`, `<p>`,`<ul>`, and`<li>`.
Elements that contain other elements are labeled as container elements, while elements that do not are simply child elements.
This hierarchy allows developers to navigate and manipulate web page content using JavaScript by traversing from parent to child and vice versa.

## Node.js

**Node.js** is a runtime environment that allows JavaScript to be executed outside of a web browser. It is built on the V8 JavaScript engine used by Google Chrome and provides a set of built-in modules for handling file systems, networking, and other server-side operations.

Node.js follows an event-driven, non-blocking I/O model, making it efficient and suitable for building scalable network applications. It uses a single-threaded event loop to handle multiple concurrent connections without creating multiple threads, which helps in reducing overhead and improving performance.

Node.js also has a rich ecosystem of third-party modules available through the Node Package Manager (NPM), which allows developers to easily extend its functionality and share reusable code across projects. This modular approach promotes code organization, maintainability, and collaboration within the Node.js community.

**fs.readFile** - can be used to read the contents of a file asynchronously. It takes the file path, encoding, and a callback function as arguments. The callback function receives an error object if an error occurs, and the file data if the operation is successful.

**http:createServer()** - can be used to create an HTTP server. It takes a request listener function as an argument, which is called every time an HTTP request is received. The request listener function receives the request and response objects, allowing the server to handle incoming requests and send responses back to clients.

**Node.js** is a runtime environment that allows JavaScript to be executed on the server side, outside of a web browser. It provides the necessary infrastructure and APIs to build scalable and efficient network applications using JavaScript.

## Important terms to be familiar with in Node.js

**Process** - The `process` object in Node.js provides information about, and control over, the current Node.js process. It allows developers to access environment variables, read command-line arguments, and handle process events such as exit or uncaught exceptions.

**Thread** - In Node.js, a thread represents a single sequence of execution within a process. Node.js primarily uses a single-threaded event loop for handling asynchronous operations, but it also provides a thread pool for executing certain tasks concurrently, such as file system operations and cryptographic functions. This allows Node.js to efficiently manage I/O-bound tasks while maintaining a non-blocking architecture.