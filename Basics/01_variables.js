const accountId = 144553  //cannont be changes further
let accountEmail="sanika@gmail.com"
var accountPassword="12345" //block and functional scope problem never use this
accountCity="Belgaum" //possible but not safe
let accountSet; // is decalred and not assigned a value it is decleared undefined
// accountId=2 error generated

console.log(accountId);
accountEmail="gdjdjf"
accountPassword="125364"
accountCity="jaipur"

console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.table([accountEmail,accountPassword,accountId,accountCity])
console.log(accountSet) // output undefined