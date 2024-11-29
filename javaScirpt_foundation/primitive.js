// number

let balance = 120;
// console.log(typeof(balance))

let anotherBalance = new Number(120) //now this is an object
// console.log(anotherBalance)
// console.log(anotherBalance.valueOf())

// every single primitive datatype can be convertd into non-primitive









// boolean
let isActive = true;
let isFalse = new Boolean(false) // not recommended







// null and undefined

let firstName = null;
// console.log(firstName)






// string 

let myString = "hello"
let myStringOne = "hola"
let username = "hitesh"

let oldGreet = myString + "hitesh"
// console.log(oldGreet)

let greetMessage = `hello ${username} !`; // a better way of string inter polation
// console.log(greetMessage)

let demoOne = `Value is ${2*2}`;
// console.log(demoOne)
















// Symbols

let sm1 = Symbol()
let sm2 = Symbol()

console.log(sm1 == sm2)
console.log(typeof(sm1))