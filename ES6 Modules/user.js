// ES6 Modules 
/*ES6 modules are a way to organize and structure JavaScript code by breaking it into smaller, 
reusable pieces. They offer a standardized way to import and export functionality between different files, 
improving code maintainability and readability. */

export default class User { 
    constructor(name, age) {
        this.name = name;
        this.age = age;  // Corrected this to 'age'
    }
}

export function printName(user) {
    console.log(`User's name is ${user.name}`);  // Corrected 'age' to 'name'
}

export function printAge(user) {
    console.log(`User is ${user.age} years old`);
}


// export default user;
// export {printName,printAge};

// insted of the above line we could just add the export keyword while writing the code
// u can default export only one thing 