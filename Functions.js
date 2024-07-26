//Functions 

//function Declaration syntax:

function sum(num1 ,num2){
    console.log("number 1: "+ num1);
    console.log("number 2: "+num2);
    if(num2==undefined){
        return num1+num1;
    }
     return num1+num2;
}

console.log("sum = "+ sum(1));


function getusernamefromemail(email){
    return email.slice(0,email.indexOf("@"));
}


let email= "manikanta@gmail.com";
console.log(getusernamefromemail(email));


//annonomous function 

const getname =function (email){
    return email.slice(0,email.indexOf("@"));
};

console.log(getname("manikanta@gmail.com"));


//arrow function 
 
const getname2 =(email)=>{
    return email.slice(0,email.indexOf("@"));
};

console.log(getname2("manikanta@gmail.com"));




const toProperCase = (name)=>{
    return name.charAt(0).toUpperCase()+name.slice(1,name.length).toLowerCase();
};

console.log(toProperCase("manikANta"));

