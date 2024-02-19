let score = "33anc"

// console.log(typeof(score));
// console.log(typeof score);

let valueInNumber = Number(score)     // score is converted into
// console.log(typeof valueInNumber);      // number
// console.log((valueInNumber));       // NaN because score="33abc"

// "33" => 33 (number)
// "33abc" => NaN
// true => 1, false => 0

let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false
// "hitesh" => true


let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)



// *************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Vaibhav"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);       // problem
// console.log(1 + "2");       
// console.log("1" + 2 + 2);  
// console.log(1 + 2 + "2");  

// console.log(true);   // true
// console.log(+true);  // 1
// // console.log(true+);  // error
// console.log((+""));     // 0

let num1, num2, num3;

num1 = num2 = num3 = 2+2        // non-readable

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

// explore prefix & postfix operators