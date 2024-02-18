const accountId = 144553
let accountEmail = "vaibhav@google.com"
var accountPassword = "123456"
accountCity = "Nashik"
let accountState;       // undefined

// accountId = 2        // not allowed

accountEmail = "vn@gmail.com"
accountPassword = "21213221"
accountCity = "Pune"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
