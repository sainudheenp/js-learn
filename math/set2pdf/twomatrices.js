
let avgar = (arr) => {
    let sum = 0;
    arr.forEach(item => {
        sum = +item;
    })
    return sum / arr.length
}
// console.log(avgar(arr))

let inputarr = [[1, 3, 4, 5, 6], [4,4,4,4], [1, 3, 4, 5, 6]]
let exop = [1.2, 1, 1.2]

let test =()=>{inputarr.forEach((array ,i)=> {avgar(array)==exop[i]?console.log("Test Passed"):console.log("Test Failed")})}

test()