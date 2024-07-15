// STRING
const myvariable="Mathematics";

console.log("mani".length);//4

console.log(myvariable.indexOf("Mat"));//0
console.log(myvariable.charAt(0));//M
console.log(myvariable.lastIndexOf("m")); //5
console.log(myvariable.substring(0,3));  //Mat



//NUMBERS

const mynumber = 42;
const myfloat = 42.01;

console.log(myfloat); //42.01
const mystring="42";

console.log(mynumber===myfloat);//false
console.log(mynumber===mystring);//false
console.log(mystring+3);//423


console.log(Number(mystring));//42--number

console.log(Number(mystring)+3);//45--number

console.log(Number(mystring)===mynumber);//true




//Number Methods
console.log(Number.isInteger(mynumber)); //true
console.log(Number.isInteger(myfloat)); //false

console.log(Number.parseFloat(mynumber)); //42 --float
console.log(Number.parseFloat(myfloat)); //42.01 --float
console.log(Number.parseFloat(mystring)); //42 --float

let mynewfloat = "42.123abc"
console.log(Number.parseFloat(mynumber)); //42 --float
console.log(Number.parseFloat(mynewfloat)); //42.124 --float   removes abc at the end 
console.log(Number.parseFloat(mynewfloat).toFixed(2)); //42.12 --float 

console.log(Number.parseInt(myfloat)); //42

console.log(typeof myfloat.toString()); //string




// NAN  (not a number)
console.log(Number("mani")); // NaN (not a number)

console.log(Number(undefined)); // NaN (not a number)

console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log(Number.isNaN("mani"));  //false
console.log(isNaN("mani")); //true


//Math property

console.log(Math.PI); //3.141592653589793
console.log(Math.PI.toFixed(2)); //3.14


console.log(Math.trunc(Math.PI));  // 3 -- rempoves the decimal 
console.log(Math.round(Math.PI));  //3 roundsoff to nearest number 

console.log(Math.round(3.5));  //4

console.log(Math.ceil(Math.PI)); // 4 round the value up 

console.log(Math.floor(Math.PI));// 3 round the value down 

console.log(Math.pow(2,4)); //(base,exponent)   16

console.log(Math.min(10,4,5));// minimum number 4 

console.log(Math.max(10,4,5));// minimum number 10

console.log(Math.floor((Math.random()* 10))); // range 9
console.log(Math.floor((Math.random()* 10) +1));  // range 10
 



