const divs = document.querySelectorAll("div");

divs.forEach(div => {
    div.addEventListener("click",() => {
        console.log("hi");
    })
});

// when i click on the blocks its works the original predefind blocks above 
// but it doesnt work for the below new div even tho is appended 


const newdiv = document.createElement("div");

newdiv.style.width = "300px";
newdiv.style.height = "200px";
newdiv.style.backgroundColor = "purple";
document.body.append(newdiv);

// this is now the event deligation comes in role

document.addEventListener("click", e=> {
    if(e.target.matches("div")){
        console.log("hi");
    }
});


// so we can write a handy function that we can use it every where

function addGlobalEventListener(type,selector,callback){
    document.addEventListener(type , e=>{
        if(e.target.matches(selector)){
            {
                callback(e);
            }
        }
    })
}