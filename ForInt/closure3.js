function outerFunction(x) {
    return function innerFunction(y) {
        return x + y
    }
}

const sum = outerFunction(5)
console.log(sum)
console.log(sum(10))


//js Info

