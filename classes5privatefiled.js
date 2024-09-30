// demonstrating that we cant use private field outside which is declared useing "#"

class pizza {
    crust = "original";
    #sauce = "traditional";
    #size;

    constructor(pizzasize){
        this.#size= pizzasize;
    }

    getcrust(){
        return this.crust;
    }

    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }

    hereYouGo(){
        console.log(
            `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} size pizza.`
        );
    }
}

const myPizza = new pizza("large");
myPizza.hereYouGo();
console.log(myPizza.crust);
console.log(this.#sauce);  /// uncaught private field must be declared in an enclosed class

