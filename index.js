console.log("hello")

let st = "hey";
let num = 7;
let con = st + num;
console.log(con);
["w", "a", "d"].forEach(i => {
    console.log(`"hey" ${i}`)
});
let email = "vonnue@gmail.com"
let domain = email.slice(email.indexOf("@") + 1)
console.log(domain)
// var url = `http://www.google.com/`
// window1 = window.open(url) 

let id = 'this' + ' this'
id += " this"
console.log(id)

// pass two valaues as params & find sum 
function sum(a, b) {
    return console.log(a + b)
}
sum(3, 4)

function arrayL(a) {
    a.forEach(i=>{
        console.log("hey")
    })

}
arrayL([3,5,6,5])