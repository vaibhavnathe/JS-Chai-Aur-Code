const name = "vaibhav"
const repoCount = 50

// console.log(name + repoCount + " Value");    // not prefered to use

// use this -> string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-Hc');
// console.log(gameName);      // object
// console.log(typeof gameName);

// slicing
// console.log(gameName[0]);

// accessing the prototype -> try in console
// console.log(gameName.__proto__);


// some methods/functions
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);  //-> 0,1,2,3
console.log(newString);

const anotherString = gameName.slice(-8,4);     // include -ve values
console.log(anotherString);

//trim() -> remove spaces + line terminators(new lines)
const newStringOne = "     vaibhav       "
console.log(newStringOne);
console.log(newStringOne.trim());

// replace
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url);
console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'))
console.log(url.includes('sundar'))

// split() -> separate string based on  pattern & returns the array
console.log(gameName.split('-'));

