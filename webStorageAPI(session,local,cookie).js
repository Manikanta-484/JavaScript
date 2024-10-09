// JavaScript web Storage

// 3 main ways to store data inside browser
// local storage(10mb)
// session storage(5mb)
// cookie(4kb)

// all three are stored in user browser.
// goto appications tab beside console in inspect view of the browser
// ther u will find the 3 web storage


              // local Storage
localStorage.setItem("name","BOB");
console.log(localStorage.getItem("name"));

// localStorage.removeItem("name");
// console.log(localStorage.getItem("name"));

             // session storage

sessionStorage.setItem("name", "JON");
console.log(sessionStorage.getItem('name'));
// sessionStorage.removeItem("name");

             // cookie

document.cookie = "name= mani; expires="+ new Date(2026,0,1).toUTCString();
document.cookie = "age = 20";
console.log(document.cookie);


