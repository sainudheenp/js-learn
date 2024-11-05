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



// for loops

body = document.querySelector("body");
let i =0;
const forArray = ['s', "sf", "k"]
for ( i = 0; i < forArray.length; i++) {
console.log(forArray[i]);
body.innerHTML+=`<div>${forArray[i]}</div>`
}



// while
// let i =0;
body = document.querySelector('body')
while(i < forArray.length){
    console.log("Hi am while loop")
    body.innerHTML += `<div>${forArray[i]}</div>`
    i++;
}

// do while 
do{
    console.log("hi am do while")

}
while(0>1)


const password = "19244dd4@"
if (password.length >=8 && password.includes('@')){
    console.log("Strong password!!")
}
else{
    console.log("pd Not secure")
}


if( false){
    console.log("false")
}
else{
    console.log("true")
}


// student mark
let marks =[90,39,100,0,33]
for(let i=0;i< marks.length;i++){
    console.log("Your Score: ",marks[i])
    if(marks[i]===0){
        continue;//exit current iteration

    }

    if(marks[i]===100){
        console.log("congrats, you got top score! ");
        break;
    }



}

// switch

let grade ="B"

switch(grade){
    case "A":
        console.log("A grade")
    case "B":
            console.log("B grade")
            break
    case "C":
         console.log("A grade")
    default :
        console.log("grade error ")
}






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
console.log(worldBlanks("dog", "big", "ran", "quickly"))



let ourArray = ["john", 32]
let myArray = ["sin", 44]