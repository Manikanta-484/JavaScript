// JavaScript classes demonstrating the private member through underscore ("_"). which makes the vari private which cannot be modified outside


class pizza {
    constructor(pizzatype){
        this.type = pizzatype;
        this._size = "medium";
        this._crust = "original";
    }

    get pizzaCrust(){
        return this._crust;
    }

    set pizzaCrust(pizzaCrust){
        this._crust=pizzaCrust;
    }

    bake(){
        console.log(
            `Baking a ${this.size} size ${this.crust} ${this.type} crust pizza.`
        );
    }
}

