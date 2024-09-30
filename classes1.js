// JavaScript classes

class pizza {
    constructor(pizzatype){
        this.type = pizzatype;
        this.size = "medium";
        this.crust = "original";
    }

    bake(){
        console.log(
            `Baking a ${this.size} size ${this.crust} ${this.type} crust pizza.`
        );
    }
}

const myPizza = new pizza("pepperoni");
myPizza.bake();