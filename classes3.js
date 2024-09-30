// JavaScript classes with getter and setter ,extends and super key word 

class pizza {
    constructor(pizzatype){
        this.type = pizzatype;
        this.size = "medium";
        this.crust = "original";
    }


    get pizzaCrust(){
        return this.crust;
    }

    set pizzaCrust(pizzaCrust){
        this.crust=pizzaCrust;
    }

    bake(){
        console.log(
            `Baking a ${this.size} size ${this.crust} ${this.type} crust pizza.`
        );
    }
}

class Specialpizza extends pizza {
    constructor(pizzasize){
        super(pizzasize);// we need to use the key word super which calls the constructor of the parent class
        this.type= "The Works";
    }

    slice(){
        console.log(`our ${this.type} ${this.size} pizza has 8 slices`);
    }
}

const mySpecialPizza = new Specialpizza("medium");
mySpecialPizza.slice();