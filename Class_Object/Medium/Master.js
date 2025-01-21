// https://medium.com/@yashyk9891/mastering-objects-in-javascript-71511ff8e00e


const person = {
    name: "John Doe",
    age: 30,
    gender: "male",
    isStudent: true,
    address: {
        city: "Ney York",
        country: 'USA',
    },
    sayHello: function () {
        console.log(`Hello ${this.name}`)
    }
}

console.log(person.name)
console.log(person.address.city)
person.sayHello()


const propname = "name";
console.log(person[propname])


person.name = "Allen";
person.email = "allen@vonnue.com";

delete person.isStudent;

const rectangle = {
    width: 10,
    height: 5,
    calculateArea: function () {
        return this.width * this.height;
    }
}

console.log(rectangle.calculateArea())

// Object Iterate
console.log("Starting Object Iteration")
for (let key in person) {
    console.log(key)
}

//Using Object Keys


// its console. object values as an array 

const values = Object.values(person)
console.log(values)


// its console. object Keys as an array 
const keys = Object.keys(person)
console.log(keys)


// Using Object.entries()
const entries = Object.entries(person);
entries.forEach(([key, value]) => console.log("Object Entries :", key, value))





//  Object Creation
function createRectangle(len, bre) {
    let rectangleTwo = {
        length: len,
        breadth: bre,
        draw: function () {
            console.log("Draw Function :) ")

        }
    };
    return rectangleTwo
}
let r1 = createRectangle(2, 4)
console.log(r1)
let r2 = createRectangle(5, 8)
console.log(r2.draw())

// Constructor Function 

function ConstRect(len, bre) {
    this.len = len,
        this.bre = bre,
        this.draw = function () {
            console.log("Drawing")
        }
}

let r3 = new ConstRect(3, 6)
console.log(r3.draw())


// Object Cloning 

// modifying the copied object will affect the original object as well.
let R4 = r1


// Proper Cloning 

// Iteration (Object Cloning #1)
let R5 = {}
for (let key in r1) {
    R5[key] = r1[key]
}

// Assign (Object Cloning #2)

let R6 = Object.assign({}, r1)

//Clone using Spread 

let R7 = { ...r1 }


// Object Prototypes and Inheritance:

// example of prototype inheritanc

function Animal(name, sound) {
    this.name = name,
        this.sound = sound;
}
// Adding a method to the prototype of Animal
Animal.prototype.speak = function () {
    console.log(`${this.name} Makes a sound : ${this.sound}`)
}
//Derived constructor

function Dog(name, breed) {
    Animal.call(this, name, "break")
    this.breed = breed
}
Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.constructor = Dog;
Dog.prototype.describe = function () {
    console.log(`${this.name} is a ${this.breed}`)
}

// Usage
let myDog = new Dog("Buddy", "Golden")

myDog.speak()
myDog.describe()

console.log(myDog instanceof Dog)
console.log(myDog instanceof Animal)

// Creating Objects with Classes (ES6):

console.log("Creating Objects with Classes (ES6):")

class Person {
    constructor(name, age) {
        this.name = name,
            this.age = age;
    }
    sayHelloo() {
        console.log(`Heyy, My name is ${this.name} and I'm ${this.age} Old `)
    }
}


const person1 = new Person("Alice", 39)
const person2 = new Person("Sarath", 30)

person1.sayHelloo()
person2.sayHelloo()

// Object Destucturing 
const {name , age } = person1
console.log(name)