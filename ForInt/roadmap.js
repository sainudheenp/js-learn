let obj = {
    name: "John",
    age: 20
}

console.log(obj)
const jsonString = JSON.stringify(obj)
console.log(jsonString)

obj = JSON.parse(jsonString)

console.log(obj)