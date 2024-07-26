// Arrays

const myArray =[];

// add elements to an array 
 
myArray[0] = "Dave";
myArray[1] = 1001;
myArray[2] = false;

//refer to an array 

console.log(myArray);


//length property 
console.log(myArray.length);

//last element in aa array 
console.log(myArray[myArray.length-1])

console.log(myArray[1]);

// adding element at the end  of the array 

myArray.push("school");
console.log(myArray);

// adding element at the beginning of the array 

myArray.unshift(42);
console.log(myArray);

// removing element at the end  of the array 

myArray.pop();
console.log(myArray);

// removing element at the beginning of the array 
myArray.shift();
console.log(myArray);

// remove and replace 

// syntax:  .splice(startin index , no of elemets from startng , replcement element);
myArray.splice(1,2,   10 ,20);
console.log(myArray);

// note if u need to add elements without removing .splice(staet, 0 , adding elements);   count must be 0 
myArray.splice(1,0,  5,6,7,8,9);
console.log(myArray);


// SUB ARRAY
const myArray2 = ["A", "B","C","D","E"];

const newarray = myArray2.slice(2);
console.log(newarray);

//reversing array 
myArray2.reverse();
console.log(myArray2);


//  The join() method returns an array as a string
myArray2.reverse();
const newString = myArray2.join();
console.log(newString);

const newarray2 = newString.split(",");

console.log(newarray2);
 

// concat method 

const myarrayA = ['a','b','c'];
const myarrayB = ['d','e','f'];

const concatarray = myarrayA.concat(myarrayB);
console.log(concatarray);

    // we can also do this using spread operator (...) 3 dots

    const spreadarray = [...myarrayA,...myarrayB];
    console.log(spreadarray);


    // note if we dont use ... it will become different case it will be a array of lenght 2 with nested array A and B    
     const without3dots = [myarrayA,myarrayB];
     console.log(without3dots);


// nested Array 

const equipShelfA = ["baseball", "football", "volleyball"];
const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];

const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

console.log(equipShelfA[1]); //or
console.log(clothesShelfB[0]);

// 2 Dimension 
const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];


console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);  

// 3 Dimension 
const sportsStore = [equipDept, clothesDept];

console.log(sportsStore[0][0][1]);// football 
console.log(sportsStore[1][1][0]);//sweat tops










