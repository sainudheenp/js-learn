// Create an array with initial elements.
const array = ["John", "Jake", "Ann"]

// ------------------------------
// Array Modification Methods
// ------------------------------

// .pop() removes the last element from the array and returns it.
console.log(array.pop())       // Logs: "Ann"
console.log(array)             // Updated array: ["John", "Jake"]

// .push() adds a new element to the end of the array and returns the new length.
console.log(array.push("Meln")) // Logs: 3 (new length after adding "Meln")
console.log(array)              // Updated array: ["John", "Jake", "Meln"]

// .shift() removes the first element from the array and returns it.
console.log(array.shift())      // Logs: "John"
console.log(array)              // Updated array: ["Jake", "Meln"]

// .unshift() adds a new element to the beginning of the array and returns the new length.
console.log(array.unshift("Lopz")) // Logs: 3 (new length after adding "Lopz" at the beginning)
console.log(array)                 // Updated array: ["Lopz", "Jake", "Meln"]

// .splice() can remove (and optionally add) elements starting from a specific index.
// Here, splice(2) removes all elements starting from index 2 to the end.
console.log(array.splice(2))    // Logs: ["Meln"] (elements removed)
console.log(array)              // Updated array: ["Lopz", "Jake"]

// .slice() returns a shallow copy of a portion of the array without modifying the original array.
// It copies elements from the start index up to, but not including, the end index.
console.log(array.slice(0, 2))  // Logs: ["Lopz", "Jake"]

// ------------------------------
// Array Combination & Modification
// ------------------------------

console.log("////////////////////")

// .concat() returns a new array that combines the original array with the provided array(s).
console.log(array.concat(['3', '5'])) // Logs: ["Lopz", "Jake", "3", "5"]

// .fill() changes all elements in an array to a static value from the start index to (but not including) the end index.
// Here, it replaces the element at index 0 with "fill".
console.log(array.fill("fill", 0, 1)) // Logs: ["fill", "Jake"]
console.log(array)                   // Updated array: ["fill", "Jake"]

// ------------------------------
// Additional Examples
// ------------------------------

// The commented code below suggests splitting a string and joining it with a different separator,
// but note that split() is a method for strings, not arrays.
// let str = "dfghjkl"
// console.log(array.split(" ").join('/'))

// Create a new empty array using the Array constructor.
const newArr = new Array(2,4,5)
console.log(newArr) // Logs: [] (an  array)
console.log(newArr)
// Clear the console. This will remove all previous logs from the console.
console.clear()

// ------------------------------
// Array.from Example
// ------------------------------

// Array.from creates a new, shallow-copied array from an iterable object.
// In this case, it converts a string into an array where each character becomes an element.
let str = "sainudheen"
console.log(Array.from(str))
const Logs = Array.from(str)
// Logs: ["s", "a", "i", "n", "u", "d", "h", "e", "e", "n"]


console.log(Array.isArray(str))
console.log(Array.isArray(Array.from(str)))

console.log(Array.of("foo","fff"))

console.log(Logs.at(0))

console.clear()


const array1 = ["2","3","d","e"]

console.log(array1.copyWithin(0,3))

// console.log(array1.entries())

const every = array1.every(x=>x>=20)
console.log(every)

