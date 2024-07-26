//objects
//key-value pair in curly braces

const myobj = {name : "mani"};
console.log(myobj);
console.log(myobj.name);




const anotherobj = {
    alive:true, answer:42,hobies:["eat","sleep","code"],
    beverage:{
        morning:"coffee",
        afternoon:"ice-tea"
    },
    action : function(){
        return "hellp world";
    },

    action2 : function(){
        return `Time for ${this.beverage.morning}`;
    }
};


console.log(anotherobj);
console.log(anotherobj.answer);
console.log(anotherobj.hobies);
console.log(anotherobj.hobies[0]);
console.log(anotherobj.beverage.morning);
console.log(anotherobj.action());
console.log(anotherobj.action2());


const vehicle = {
    wheel:4,
    engine:function(){
        return "Vrroom!";
    }
};

const truck = Object.create(vehicle);

truck.doors=2;
console.log(truck);

// Inheritance
console.log(truck.wheel);
console.log(truck.engine());


const car = Object.create(vehicle);
car.doors = 4;
car.enginesound = "whooshhee!";
car.engine = function(){
    return "whooshhhe!";
}
console.log(car.engine());
console.log(car.wheel);


//tesla 

const tesla = Object.create(car);
console.log(tesla.wheel);
tesla.engine = function() {
    return "shh!";
}
console.log(tesla.engine());


console.log(Object.keys(car));
console.log(Object.values(car));


for(let keyss in car ){
    console.log(`car with ${keyss} of ${car[keyss]}`);
}


// destructuring object 

const {enginesound: sound}= car;
console.log(sound);


const{enginesound,wheel}= car;
console.log(enginesound);
console.log(wheel);

// we can write a ultimate function using destructuring object concept --> like 

function soundslike({enginesound}){
    return `car sound like ${enginesound} ratatatataa`;
}
console.log(soundslike(car));


console.log(car.hasOwnProperty("engine"));// true 
delete car.engine;  // delete the property 
console.log(car.hasOwnProperty("engine"));