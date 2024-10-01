// var example
var x = 10;
if (true) {
  var x = 20; // Same variable, value gets overwritten
  console.log(x); // 20
}
console.log(x); // 20

// let example
let y = 10;
if (true) {
  let y = 20; // New variable in block scope
  console.log(y); // 20
}
console.log(y); // 10

// const example
const z = 30;
console.log(z); // 30
// z = 40; // Error: Assignment to constant variable