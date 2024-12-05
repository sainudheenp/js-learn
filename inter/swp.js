// swiping Program like a=50; b=10; output:- b=50, and a =10 Answer: Solution

function swp() {
    let a = 89, b = 9;
    b = b + a;

    a = b - a
    b = b - a

    console.log(`a  : ${a}, b: ${b}`)
}

swp()