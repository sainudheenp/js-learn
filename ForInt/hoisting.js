//hoisting



/*
hoisting 2 types 
variable and functional hoisting

eg: var and function keyword


*/

foo()

console.log(x)
// debugger

console.log(y)

var x = 10;
let y = 22;
// debugger
console.log(x)
console.log(y)

function foo(){
    var k=200
    console.log("HELLO Zainn.")
}
// console.log(k)