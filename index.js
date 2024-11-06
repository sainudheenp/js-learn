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
let i = 0;
const forArray = ['s', "sf", "k"]
for (i = 0; i < forArray.length; i++) {
    console.log(forArray[i]);
    body.innerHTML += `<div>${forArray[i]}</div>`
}



// while
// let i =0;
body = document.querySelector('body')
while (i < forArray.length) {
    console.log("Hi am while loop")
    body.innerHTML += `<div>${forArray[i]}</div>`
    i++;
}

// do while
do {
    console.log("hi am do while")

}
while (0 > 1)


const password = "19244dd4@"
if (password.length >= 8 && password.includes('@')) {
    console.log("Strong password!!")
}
else {
    console.log("pd Not secure")
}


if (false) {
    console.log("false")
}
else {
    console.log("true")
}


// student mark
let marks = [90, 39, 100, 0, 33]
for (let i = 0; i < marks.length; i++) {
    console.log("Your Score: ", marks[i])
    if (marks[i] === 0) {
        continue;//exit current iteration

    }

    if (marks[i] === 100) {
        console.log("congrats, you got top score! ");
        break;
    }



}

// switch

let grade = "B"

switch (grade) {
    case "A":
        console.log("A grade")
    case "B":
        console.log("B grade")
        break
    case "C":
        console.log("A grade")
    default:
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

function addthree(val) {
    return console.log(val += 3)

}
addthree(4)


let strArra = [2, 3, 5, 6]
console.log("stringify:", JSON.stringify(strArra))




var names = ["lol", "sha", "kilo", "sjd", "lool", "tot", "lnit", "eight"]
function golfScore(par, stroks) {
    if (stroks == 1) {
        return names[0]
    }
    else if (stroks <= par - 2) {
        return names[1]
    }
    else if (stroks == par - 1) {
        return names[2]
    }
    else if (stroks == par) {
        return names[3]
    }
    else if (stroks == par + 1) {
        return names[4]
    }
    else if (stroks == par + 2) {
        return names[5]
    }
    else if (stroks == par + 3) {
        return names[6]
    }
    return "Change Me!"
}
console.log(golfScore(5, 4))

let nesArray = [["hi", [3, 4]], ["hello", [5, 3]]]


// 42.51

let modArray = [3, 5, 6]
modArray[0] = 4;
console.log('Modify array:', ...modArray)

// multiple array
let mulArray = [[2, 4], [5, 6], [8, 3]]
console.log("Multiple Array", mulArray[0][1])

// array pop

popArray = [3, 5, 5, 2, 7]
console.log("Pop", ...popArray)
console.log("Popd", popArray.pop())
console.log("Popd", popArray.pop())

// array shift  
console.log("shift", popArray.shift())

// push
popArray.push(99)
console.log("push 99 :", ...popArray)
console.log

// unshift
popArray.unshift(4000)
console.log("unshifted :", ...popArray)


function testEqual(a, b) {
    if (a == b) {
        return console.log("true!")
    }
    else {
        return console.log("false!")
    }
}

testEqual(4, 9)
testEqual(9, 9)


console.log(9 == "9" ? "true ==" : "false ==")
console.log(9 === "9" ? "true ===" : "false ===")

function switch_test(f) {
    switch(f){
        case 1:
            console.log("one");
            break
        case 2:
            console.log("two") 
        default :
            console.log("switch test err")
    }
}
switch_test(1)


let dog = {
    "name":"wuieee",
    "age" : 3 
}

console.log(dog.name)
// delete
delete dog.name
console.log("dog name",dog.name)

var myobj ={
    git:"pn",
    pet:"kitten",
    bed:"lsfds"
}
// if(myobj.hasOwnProperty("git") ){
//     return console.log("property Found")
// }
// else{
//     return console.log("not Found")

// }


