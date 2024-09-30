// JavaScript classes with getter and setter 

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

const myPizza = new pizza("pepperoni");
myPizza.pizzaCrust = "normal";
myPizza.bake();
console.log(myPizza.pizzaCrust);