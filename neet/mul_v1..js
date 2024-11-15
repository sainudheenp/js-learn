// function mul(n){
//     for(let i =1; i<=n;i++){
//         console.log(`${i} * ${n} =${ i*n}`)
//         return (i*n)
//     }
// }




function mul(n) {
    let mularray = [];
    for (let i = 1; i <= 10; i++) {
        // console.log(`${i} * ${n} =${i * n}`)
        // return (i * n)
        mularray.push((i * n))

    }
    return mularray;


}



console.log(mul(7))

function test(input, output) {
    input.forEach((number) => {
        output.forEach((exoparray) => {
            exoparray.forEach((exval, i) => {
              let  mularray = mul(number)
                if (exval[i] ==mularray[i]){
                    console.log("work")
                }
            })
        })
    });
}


// input
let input = [2, 4, 5]
let output = [[2, 4, 6, 8, 10, 12, 14, 16, 18, 20],[4, 8, 12, 16, 20, 24, 28, 32, 36, 40],[5, 10, 15, 20, 25, 30, 35, 40, 45, 50]]


test(input,output)