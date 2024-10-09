// JavaScript Promises 

let p =  new Promise((resolve, reject) => {
    let a = 1 + 1;
    if(a ==2){
        resolve("success");
    }else{
        reject("Failed");
    }
});


// anything inside .then is going to run for resolve
//catch is called when the promis is rejected 

p.then((message) => {
    console.log("this is in the then " + message);
}).catch((message)=>{
    console.log("this is in catch "+ message);
})

