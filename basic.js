// This is a single-line comment

/*
 This is a multi-line comment.
 Comments are used to explain the code and make it more readable.
*/

// Declaring variables using let
let myNumber = 10; // number data type
let myString = "Hello, world!"; // string data type
let myBoolean = true; // boolean data type

// Checking the data type of variables using typeof
console.log(typeof myNumber); // Output: number
console.log(typeof myString); // Output: string
console.log(typeof myBoolean); // Output: boolean

// Arithmetic operators
let sum = myNumber + 5; // addition
let difference = myNumber - 5; // subtraction
let product = myNumber * 2; // multiplication
let quotient = myNumber / 2; // division
let remainder = myNumber % 3; // modulus (remainder)

// Logging arithmetic operations to the console
console.log("Sum:", sum); // Output: Sum: 15
console.log("Difference:", difference); // Output: Difference: 5
console.log("Product:", product); // Output: Product: 20
console.log("Quotient:", quotient); // Output: Quotient: 5
console.log("Remainder:", remainder); // Output: Remainder: 1

// Boolean data type
let isJavaScriptFun = true; // boolean value true
let isBoring = false; // boolean value false

// Using alert to display a message
alert("Hello, this is an alert message!");

// Combining everything in a function to demonstrate usage
function basicJavaScriptDemo() {
  let a = 10;
  let b = 5;
  
  // Displaying a message using alert
  alert("Arithmetic Operations:\n" +
        "Addition: " + (a + b) + "\n" +
        "Subtraction: " + (a - b) + "\n" +
        "Multiplication: " + (a * b) + "\n" +
        "Division: " + (a / b) + "\n" +
        "Remainder: " + (a % b) + "\n");

  // Checking types
  console.log("Type of a:", typeof a); // Output: number
  console.log("Type of 'Hello':", typeof "Hello"); // Output: string
  console.log("Type of isJavaScriptFun:", typeof isJavaScriptFun); // Output: boolean
}

// Call the function to see the demo
basicJavaScriptDemo();
