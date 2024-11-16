// function findx(eq){
// console.log(eq)
// let f = eq.split("+")
// console.log(f)
// console.log(f[0])
// }


// input
// let eq = "2x+5=15"
// findx(eq)



// console.log("HEllo joyel jozzzz")



function findx(eq) {
    let x = 0;
    console.log()

    let ax=eq.split("x")[0];
    let b = eq.split("+")[1].split("=")[0];
    let c = eq.split("=")[1]


    // ax + b = c

    x =  c - b
    x = x / ax;
    console.log("X : ",x)
}




// let eq = "42x+5=15";

let eq = "2x+5=15"





findx(eq)
