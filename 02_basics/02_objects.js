// we can declare objects in two ways -> 
// 1. Literal ki tarah -> singleton nahi banata hai
// 2. Contructor ki tarah -> hamesha singleton banata hai

// singleton => it is only one type of object which is made from the constructor
// Object.create => object created from constructor


// Object Literals

const mySym = Symbol("Key1");

const JsUser = {
    name : "Hitesh",    // behind -> "name" : "Hitesh"
    "full name" : "Hitesh Choudhary" , //we can't access it by .
    [mySym] : "myKey1", // refering to symbols => imp
    age : 20,
    location : "Jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
};

// accessing the Objects
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);  

// changing the values of objects
JsUser.email = "hitesh@chatgpt.com";
// Object.freeze(JsUser);      // It Freezes the Objects -> we cant change the values further
JsUser.email = "hitesh@microsoft.com";

// console.log(JsUser);
// console.log(JsUser.email);  // hitesh@chatgpt.com -> after freeze


// adding functions to the objects
JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greeting2 = function(){     // refering to name of object
    // this -> poiting to current object
    console.log(`Hello Js User ${this.name}`);    
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());