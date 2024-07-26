// Var,let and const

// //global scope 
var x = 1;
// let y = 2 ;
const z= 3;

console.log(`global: ${x}`);//1
console.log(`global: ${y}`);//2
console.log(`global: ${z}`);//3

function myFunc() {
    var x = 10;
    const z = 5;
    
    {
        var x = 11; // function scoped
        const z = 6; // block scoped
        console.log(`block: ${x}`);//11
        console.log(`block: ${y}`);//2
        console.log(`block: ${z}`);//6
    }

    console.log(`function: ${x}`);//11
    console.log(`function: ${y}`);//2
    console.log(`function: ${z}`);//5
}

myFunc();


