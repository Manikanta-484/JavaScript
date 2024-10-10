// Higher OrderFunction :
// fuctin which takes a function as a parameter or returns a function 

const names = [
    "mani",
    "roshan",
    "jo",
    "baby",
    "query"
];

const filteredNames =  names.filter(
    function(n){
        if(n[0]==='q'){
            return false;
        }
        return true;
    }
);

// simply u can write code like 
// names.filter(n => n[0] !=='q')

console.log(filteredNames);

// now example for higher order funcion which return a function

function createButtonHandler(message) {
    return function() {
        alert(message);
    };
}

// Example usage in a project
const button1 = document.createElement('button');
button1.innerText = 'Click me 1';
button1.onclick = createButtonHandler('Button 1 was clicked!');
document.body.appendChild(button1);

const button2 = document.createElement('button');
button2.innerText = 'Click me 2';
button2.onclick = createButtonHandler('Button 2 was clicked!');
document.body.appendChild(button2);
