// Factory Function
/*A factory function in JavaScript is a function that creates and returns a new object. Unlike constructors, it doesn't require the new keyword to create instances. Factory functions offer flexibility and help abstract the object creation process.  */


function pizzaFactory(pizzaSize){
    const crust = "original";
    const size = pizzaSize;

    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza`)
    };
}


const mypizza = pizzaFactory("small");
mypizza.bake();
