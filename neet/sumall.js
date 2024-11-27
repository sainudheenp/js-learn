let arr = [1, 3, 4, 5, 66, 90]

let sum = arr.reduce((acc, cur) => acc + cur)

console.log(sum)

// create a new array , value > 10

let newabove10 = arr.filter((n) => { if (n > 10) return n })
console.log(newabove10)



