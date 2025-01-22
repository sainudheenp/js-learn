// https://medium.com/@v.chathura/step-by-step-guide-to-understanding-javascript-classes-e2947d2d9b5c

class Person {
    constructor(name, gender) {
        this.name = name,
            this.gender = gender
    }
    getName() {
        return "Hello My name is " + this.name;
    }
    static getPersonGender() {
        return "Male"
    }
}

console.log("person Calss ", Person)
console.log("Person proto : ", Person.__proto__)


const developer = new Person ("Lawrence Eagles","Developer") ;
console.log("Developer's Name", developer.getName())
console.log("developer's proto :",developer.__proto__)
console.log("Developer's gender ",Person.getPersonGender())
