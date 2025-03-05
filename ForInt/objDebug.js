const person = {
    name: 'John',
    age: 20,
    greet: function () {
        console.log(`Hello I'm ${this.name} and am ${this.age} old`)
    }
}

function introduce(greeting) {
    console.log(`${greeting}, My name is ${this.name}`)
}

const greetPerson = person.greet.bind(person)

greetPerson()


introduce.call(person,"Hello")

const introducePerson = introduce.bind(person)

introducePerson("hi")