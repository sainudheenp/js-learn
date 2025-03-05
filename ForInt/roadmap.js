// let obj = {
//     name: "John",
//     age: 20
// }

// console.log(obj)
// const jsonString = JSON.stringify(obj)
// console.log(jsonString)

// obj = JSON.parse(jsonString)

// console.log(obj)


// let i = 0;

// do {
//     console.log(i);
//     i++;
// }
// while (i < 4)

// let ii = 0
// while (ii < 5) {
//     console.log("II", ii)
//     ii++
// }

// let b = 0;
// while (b < 5) {
//     if (b == 3) break
//     console.log("BB", b)
//     b++
// }


// let k = 0;
// while (k < 10) {
//     if (k == 5) continue;
//     console.log("KK", k)
//     k++
// }

const person1 = {
    name: "John Doe",
    age: 30,
    sayHello: function () {
        console.log(`Hello, my name is ${this.name} and am ${this.age} old`)
    }
}

const person2 ={
    name: "Zainn",
    age: 9
}
// person.sayHello()
// console.log(person.name)

const HelloJohn = person1.sayHello.bind(person2)

HelloJohn()
////////////////  call

const per = {
    name: "KLKLKKL"
}
function greet(gr) {
    console.log(`${gr} , name is green`)
}

greet.call(per,"hi")


