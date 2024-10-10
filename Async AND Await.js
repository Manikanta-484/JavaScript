function makeRequest(locaiton){
    return new Promise((resolve,reject) =>{
        console.log(`Making Request to ${location}`);
        if(locaiton === 'google'){
            resolve("google says hi");
        }else{
            reject("we can only talk to google");
        }
    })
}

function processRequest(response){
    return new Promise((resolve,reject)=>{
        console.log("processing response");
        resolve(`Extra Information ` +`${response}`)
    })
}

/*
makeRequest("facebook").then(response =>{
    console.log("response received")
    return processRequest(response)
}).then(processedResponse =>{
    console.log(processedResponse);
}).catch(err =>{
    console.log(err);
})

*/

// but we can easily do it with async and await 
//Async and Await

async function dowork() {
   try{
     const response= await makeRequest("google");
     console.log("response received");

     const processedrespose = await processRequest(response);
     console.log(processedrespose);
    }catch (err){
    console.log(err);
   }
}
dowork();

// to handle the error use try catch inside the async funciton 

