console.log("hello") // standard output form 
process.stdout.write("hello") // another way of showing output(mostly used in node)
console.table({city:"bbsr"}) // to show in the form of table






//                                     DATA TYPES
/*
    String
    Number
    Boolean
    BigInt

    Undefined -> not defined, but in future may be defined
    null -> it is empty not zero

    object

    symbol
*/

// var score = 100; this is the old way
let score = 102;
let name = "chaicode.com"
// let isLoggedIn = flase

// object
let teaTypes = ["lemon tea", "orange tea", "oolong tea"]
let user = {
    fitstName: "red",
    lastName: "pearl"
}

let getScore = score; // the value from another variable

console.log(getScore);










let gameName = "spiderman"
console.log(gameName)
gameName = "batman"
console.log(gameName)

const userName = "red"
console.log(userName);
// userName = "black"; this will give us an error becuase const can be defined only once in the begning, it can not be changed during the run-time

