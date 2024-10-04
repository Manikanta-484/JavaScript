// JSON:  JavaScript object Notation 
/*
    json is used to send and receive data
    json is a text format that is completely language independent.
    Meaning JSON is used to send and receive data in many languages
    ...... not just in JavaScript

  */

 const myobj ={
    name : "mani",
    hobbies : ["eat","sleep","code"],

    hello: function(){
      console.log("Hello!");
    }
 };


 console.log(myobj);
 console.log(myobj.name);
 myobj.hello();
 console.log(typeof myobj);


 const sendJSON = JSON.stringify(myobj);
 console.log(sendJSON); // thsi contains only sting and array it doesnt contain funciton 
// JSON doesnt send functions
// sendJSON will be a type of string befor myobj was obj after send to JSON it will convert it to string as mentioned at the top ;
console.log(typeof sendJSON);
// when we receive the JSON it will be a type of object

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON); // object 

