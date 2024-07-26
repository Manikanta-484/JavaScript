// alert("hello world");   //only okay option


// confirm("ok===true \n cancel===false");  // two options ok and cancel



// let name = prompt("enter your name ");
// console.log(name); // alows user to enter text

// let name = prompt("enter your name ");
// console.log(name??"you didnt enter your name ");//if user presses cancerl without entering

//if user press ok without entering anyting 
let name2=prompt("enter your name ");
if(name.lenght){
    console.log(name??"you didnt enter your name ");
}else{
    console.log("you didnt enter your name.");
}