// function arrayavg(arr){
//     let sum =0;
//     arr.forEach(element => {
//         sum = sum+ element ;
//     });

//     console.log("avg : ",(sum / arr.length))
// }
// arrayavg([1,2,3,4,5])



function arrayavg(arr) {

    if (!arr.every(element => typeof element === "number")) {
        // console.log("Not a number: Invalid Array");
        return null;

    }


    var sum = 0;
    arr.forEach(element => {
        // if (typeof element !== "number") return false, console.log("Not a Number")
        sum = sum + element;
    });

    // console.log("avg : ", (sum / arr.length))
    return (sum / arr.length)
}


function test(input, exsum) {
    input.forEach((item, index) => {
        arrayavg(item) === exsum[index] ? console.log("Test Passed") : arrayavg(item)==null?console.log("Skipped due to invalid data"):console.log("Test Failed")
    })

}

// inp
let input = [[1, 2, 3, 4], [2, 4, "5", 6], [6, 5, 7, 8]]
let exsum = [2.5, 4.25, 6.5]
test(input, exsum)
