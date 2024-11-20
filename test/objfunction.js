// let main = ()=>{
//   return myobj =  {
//         hello ()  {
//            return console.log("hello world")
//         }
//     }
// }
// main.hello()



// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() { console.log(`hello I'm ${this.name} and I am ${this.age} years old.`) }
// }

// const person1 = new Person("Zain", 22)
// person1.greet()

// new Person("Amal", 22).greet()



function mergeObject(obj1, obj2) {
  return { ...obj1 , ...obj2 };
}

let obj1 ={a:1,b:2}
let obj2 ={a:3,d:4}

console.log(mergeObject(obj1,obj2))



