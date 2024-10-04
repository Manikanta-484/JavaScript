// JavaScript Errors and Error Handling 

name = "mani";
console.log(name);// this works without error 
// as we traditionally use const name = "mani" 
// but we can also write like this 
//but if we use "use strict "  we have to write in traditional way 

"use strict";

// name = "main";
// consol.log(name); Uncaught referenceError

const makeError = () => {
  let i=1;

  while(i<=5){
    try{
      if(i%2 !==0){
        throw new Error("odd number!!");
      }
      console.log("Even number");
    }catch(err){
      console.log(err.stack);
    }finally{

      console.log("...finalluy executed");
      i++;
    }
  }
};

makeError();