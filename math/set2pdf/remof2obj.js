let rem = (a, b) => a % b

let ipop = {
    test1: [1, 4][1],
    test2: [13, 5][3],
    test3: [20, 50][20]
}
console.log(Object.keys(ipop))
Object.keys(ipop).forEach(item => {
    console.log(ipop[item])
    
})