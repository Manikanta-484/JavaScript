// DOM - document object Model


// ID 
const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

view1.style.display = "flex";
view2.style.display = "none";

// CLASS
 const views = document.getElementsByClassName("view");
 console.log(views);

 const sameviews = document.querySelector(".view");
 console.log(sameviews);



 // DIV
 const divs = view1.querySelectorAll("div");
 console.log(divs);
 const samedivs = view1.getElementsByTagName("div");
 console.log(samedivs);


 // even divs

 const evendivs = view1.querySelector("div:nth-of-type(2n)");
 console.log(evendivs);
 
 for(let i=0;i<evendivs.length;i++){
    evendivs[i].style.backgroundcolor = "darkblue";
    evendivs[i].style.width = "200px";
    evendivs[i].style.height = "200px";
 }


 const navtext = document.querySelector("nav h1");
 console.log(navtext);
 navtext.textContent = "Hello world";


 const navbar = document.querySelector("nav");
 navbar.innerHTML = `<h1>Hello!</h1> <p> this should align right.`;
 consol.log(navbar);
 navbar.style.justifyContent = "flex-start";
 navbar.style.justifyContent = "flex-end";
 navbar.style.justifyContent = "space-between";
 navbar.style.justifyContent = "space-evenly";



 console.log(evendivs[0]);
 console.log(evendivs[0].parentElement);
 console.log(evendivs[0].parentElement.children); // 12 div collections
 console.log(evendivs[0].parentElement.childNodes); // 215 nodelist
 console.log(evendivs[0].parentElement.lastChild);
 console.log(evendivs[0].parentElement.lastELementChild);
 console.log(evendivs[0].parentElement.firstChild);
 console.log(evendivs[0].parentElement.firstElementChild);