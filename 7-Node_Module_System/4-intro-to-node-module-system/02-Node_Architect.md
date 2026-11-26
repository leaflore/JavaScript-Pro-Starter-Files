
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

The HTML DOM (Document Object Model) is a structured representation of a web page that allows developers to access, modify, and control its content and structure using JavaScript. It powers most dynamic website interactions, enabling features like real-time updates, form validation, and interactive user interfaces.

The HTML Document Object Model (DOM) is a tree structure, where each HTML tag becomes a node in the hierarchy.
At the top, the `<html>` tag is the root element, containing both `<head>` and `<body>` as child elements.
These in turn have their own children, such as `<title>`, `<div>`, and nested elements like `<h1>`, `<p>`,`<ul>`, and`<li>`.
Elements that contain other elements are labeled as container elements, while elements that do not are simply child elements.
This hierarchy allows developers to navigate and manipulate web page content using JavaScript by traversing from parent to child and vice versa.

