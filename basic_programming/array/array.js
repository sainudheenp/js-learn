function arrayMethods(arr) {

    console.log(arr.length)

    console.log(arr.at(2))

    let arr2 = [99, 299,];

    let arrj = arr.join("*")
    console.log("after Join :", arrj)

    // merging two array
    let con = arr.concat(arr2)
    console.log(con)
    console.log("copy befr :", arr)

    console.log("copy within :", arr.copyWithin(2, "within"))

    let flatarr = [2, [2, , 9]]
    console.log("flat", flatarr.flat())

    console.log("Splice", arr.splice(0, 2))
}

arrayMethods([1, 3, 4, 5, 6, 8])


function sumOfTwoNumbers(a, b) {
    return a + b;
}

console.log(sumOfTwoNumbers(5, 10));


