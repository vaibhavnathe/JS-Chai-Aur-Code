// Primitive -> (Call by value)
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// JS is dynamic typed Language
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

// console.log(typeof(score));       // number
// console.log(typeof(scoreValue));       // number
// console.log(typeof(isLoggedIn));       // boolean
// console.log(typeof(outsideTemp));       // object

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);  // false -> Symbols are unique
// console.log(typeof anotherId);      // symbol

// const bigNumber = 345657985134953848n   // BigInt
// console.log(typeof(bigNumber));


// Non-Premitive -> (Reference Type) 
// Array, Objects, Functions

const heros = ["shaktiman", "krish", "dogs"]    // array
let myObj = {                                   // Object
    name : "Vaibhav",
    age : "22"
}
// console.log(typeof(myObj));

// function
const myFunction = function (){
    console.log("Hello World");
}
// console.log(typeof myFunction);     // function



// **********************************************************
// Memory -> Stack(Primitive), Heap(Non-premitive)

let myYoutubename = "hiteshchoudharydotcom";

let anotherName = myYoutubename;
anotherName = 'chaiaurcode'
console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl", 
}

let userTwo = userOne;
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);