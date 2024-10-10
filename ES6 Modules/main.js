import User from './user.js';  // Ensure the correct path

const user1 = new User("Mani", 20);
console.log(user1);

import { printName, printAge } from './user.js';
// or we can give another name for the function like
// import {printName as pname , printAge as page} from './user.js';
printName(user1);
printAge(user1);
