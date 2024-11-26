let PerfectSqr = (number) => number % Math.sqrt(number) == 0 ? true : false


let input = [5, 10, 15, 20, 25]
let output = [false, false, false, false, true]

let test = () => {
    input.forEach((input, i) => { 
        if(PerfectSqr(input)==output[i]){
            console.log("Test Passed")
        }else{console.log("Test Failed")}
    })
}


test()
