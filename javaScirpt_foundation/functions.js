// write a function named 'makeTea' that takes one parameter, `"Making green tea"` when called with `"green tea"`, in `teaOrder`
// function greet(name){ //parameter
//     console.log(`Hello ${name}`);
// }
// greet("hitesh") //argument(call the function and pass some value)

// function makeTea(typeOfTea){
//     return `Making ${typeOfTea}`;
// }
// let greet = makeTea("lemon tea")
// console.log(greet);



// Create a function named 'orderTea' that takes one parameter, 'teaType'. Inside this function, create another function named `confirmOrder` that returns a message like "Order confirmed for chai". Call 'confirmOrder' from within `orderTea` and return the result

// function orderTea(teaType){
//     function confirmOrder(){
//         return `Order cofirmed for chai`;
//     }
//     return confirmOrder();
// }
// let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation)





// write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. Store the variable in the `totalCost`

// const calculateTotal = (price, quantity) =>{
//     return price * quantity;
// }
// let totalCost = calculateTotal(499,100);
// console.log(totalCost);



// write a function named `processTeaOrder` that takes another function, `makeTea`, as parameter and calls it with the argument `"earl grey"`. 
// function makeTea(typeOfTea) {
//     return `Making ${typeOfTea}`;
// }

// function processTeaOrder(teaFunction) {
//     return teaFunction('earl grey');
// }

// let order = processTeaOrder(makeTea);
// console.log(order);




// write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like "Making green tea". Store the returned function in a variable named `teaMaker` and call it with `"green tea"`

function createTeaMaker(name){
    return function(teaType){
        return `Making ${teaType}` // teaMaker
    }
}
let teaMaker = createTeaMaker("hitesh");
let result = teaMaker("green tea");
console.log(result);