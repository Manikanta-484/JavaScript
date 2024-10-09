const recordvideoone = new Promise((resolve,reject)=>{
    resolve("video 1 recoreded");
});

const recordvideotwo = new Promise((resolve,reject)=>{
    resolve("video 2 recoreded");
});

const recordvideothree = new Promise((resolve,reject)=>{
    resolve("video 3 recoreded");
});

// Promise.all
// Resolves when all promises in the iterable are resolved or rejected. If any promise rejects,
// Promise.all will also reject.
Promise.all([
    recordvideoone,
    recordvideotwo,
    recordvideothree
]).then((messages) =>{
    console.log(messages)
})


//Promise.race
//Resolves as soon as any promise in the iterable is settled,
// regardless of whether it succeeds or fails. 
Promise.race([
    recordvideoone,
    recordvideotwo,
    recordvideothree
]).then((message) =>{
    console.log(message)
})