const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));            // for precision of number , ex. 100.00 

const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4));

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'));


/******************************Maths****************************** */

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));    // top value
// console.log(Math.floor(4.9));   // low value
// console.log(Math.min(4,2,5,6,7,9,5));
// console.log(Math.max(4,2,5,6,7,9,5));

console.log(Math.random());      // range => 0-1
console.log((Math.random()*10) + 1);


// Trick
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min)