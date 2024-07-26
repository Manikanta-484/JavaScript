// Var,let and const

// //global scope 
// var x = 1;
// // let y = 2 ;
// const z= 3;

// //local scope 

//      //block scope 
//     {
//     let y =4 ;
//     }
//     //function scope 
//     function myfunc(){
//            const z=5;
//         }


//     console.log(y);// not defined


    //senario 

    var x = 1 ;
    let y = 2;
    const z=3;

    function myfunc(){
        const z = 5 ;
        console.log(y);
        console.log(z)

        if(true){
            let y = 4;
            console.log(y);
        }
    }

    myfunc();

