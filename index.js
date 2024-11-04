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



let namee = "vonnue"
console.log("last letter:", namee[namee.length - 1])




















// pass two valaues as params & find sum 
function sum(a, b) {
    return console.log(a + b)
}
sum(3, 4)

function arrayL(a) {
    // a.forEach(i=>{

    // })
    console.log(...a)
    console.log(`largest  :`, Math.max(...a))
    console.log('smallest :', Math.min(...a))

}
arrayL([3, 5, 6, 5])

function largeUsingloop(a) {

    let largest = 0;
    let smallest = 0;

    for (let i = 0; i < a.length; i++) {

    }

}


function worldBlanks(myNoun, MyAdjective, myVerb, myAdverb) {
    var result = `The ${MyAdjective} ${myNoun} ${myVerb} to the store ${myAdverb}. `
    return result;
}
console.log(worldBlanks("dog","big","ran","quickly"))



let ourArray= ["john",32]
let myArray=["sin",44]