// function arrayMethods(arr) {

//     console.log(arr.length)

//     console.log(arr.at(2))

//     let arr2 = [99, 299,];

//     let arrj = arr.join("*")
//     console.log("after Join :", arrj)

//     // merging two array
//     let con = arr.concat(arr2)
//     console.log(con)
//     console.log("copy befr :", arr)

//     console.log("copy within :", arr.copyWithin(2, "within"))

//     let flatarr = [2, [2, , 9]]
//     console.log("flat", flatarr.flat())

//     console.log("Splice", arr.splice(0, 2))
// }

// arrayMethods([1, 3, 4, 5, 6, 8])

// function sumOfTwoNumbers(a, b) {
//     return a + b;
// }

// console.log(sumOfTwoNumbers(5, 10));

// function gptarray() {
//   let arr = ["f", "g", "t", "po", "vaa"];
//   let fill = arr.fill("hello", 0, 1);
//   console.log(fill);

//   console.log("copy with", fill.copyWithin (0, 3));
// }
// gptarray();

let arr = ["f", "g", "pot", "po", "vaa"];
let numarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// forEach

// map : Creates a new array by transforming each element of the original array.

let newMaparr = arr.map((val) => val + " Map");
console.log(newMaparr);



// 3. filter()  Creates a new array with elements that satisfy a condition.

let filterarray = arr.filter((item) => {
  return item.includes("po");
});
console.log(filterarray);

//4. reduce() Reduces the array to a single value by applying a function.

let sum = numarr.reduce((a, b) => a + b, 0);
console.log(sum);

/*
numarr.reduce(): Calls the reduce() method on the numarr array.
(accumulator, current) => { ... }: This is the callback function passed to reduce(). It takes two arguments: accumulator and current.
accumulator: The accumulator is the value returned from the previous iteration. Initially, it's set to the second argument passed to reduce(), which is 0 in this case.
current: The current element being processed in the array.
return accumulator + current;: Returns the updated accumulator value by adding the current element to it.
, 0: This is the initial value of the accumulator, which is set to 0.
*/


//5. slice() Returns a shallow copy of a portion of the array.

