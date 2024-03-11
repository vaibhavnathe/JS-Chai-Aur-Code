// Singleton Object => made from constructor

// const tinderUser = new Object(); // empty objects (singleton)
const tinderUser = {};           // same    (literal)

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// object inside object
const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "hitesh",
            lastname : "choudhary"
        }
    }
}
// accessing objects inside the objects
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.lastname);


// Merging Objects
const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
const obj3 = {5:"e", 6:"f"};

// const obj6 = {obj1, obj2};
// const obj4 = Object.assign(obj1, obj2);
// const obj5 = Object.assign({},obj1, obj2, obj3);  // combining values and gives guaranteed result
// console.log(obj4);
// console.log(obj5);

// using spread operator (mostly used)
const obj = {...obj1, ...obj2, ...obj3};
// console.log(obj);


// Generally values coming from databases
const users = [
    {
        id: 1, 
        email : "h@gmail.com"
    },
    {
        id: 2, 
        email : "h2@gmail.com"
    },
    {
        id: 3, 
        email : "h3@gmail.com"
    },
    {
        id: 4, 
        email : "h4@gmail.com"
    }
];

// accessing the values
console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));      // array of keys
console.log(Object.values(tinderUser));     // array of values
console.log(Object.entries(tinderUser));    // array of entries

// check value hai ya nahi 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // true