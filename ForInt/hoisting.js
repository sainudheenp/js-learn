//hoisting



/*
hoisting 2 types 
variable and functional hoisting

eg: var and function keyword


*/

foo()

console.log(x)
console.log(y)
var x = 10;
let y = 22;
console.log(x)
console.log(y)

function foo(){
    console.log("HELLO Zainn.")
}