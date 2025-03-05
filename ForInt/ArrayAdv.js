// https://davitdvalashvili1996.medium.com/javascript-array-methods-your-complete-guide-372b9c6f12cd

const array = ["John", "Jake", "Ann"]

console.log(array.pop())
console.log(array)

console.log(array.push("Meln"))
console.log(array)

console.log(array.shift())
console.log(array)

console.log(array.unshift("Lopz"))
console.log(array)

console.log(array.splice(2))
console.log(array)

console.log(array.slice(0, 2))


// 
console.log("////////////////////")

console.log(array.concat(['3','5']))

console.log(array.fill("fill",0,1))
console.log(array)


let str = "dfghjkl"
console.log(array.split(" ").join('/'))