// let sum = 0;
// const sumx = (n) => {
//     for (let i = 0; i <= n; i++) {
//         sum += i;
//     }
//     console.log(`sum of natural numbers upto ${n} : ${sum}`)
// }

// using eq
// sum = n*(n+1)/2;

// sumx(6)


function sumx  (n) {
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}


function test(values,res){
    values.forEach((value,i) => {
        if(sumx(value)==res[i]){
            console.log("Test Passed")

        }
        else{
            console.log("Test Failed")

        }
    });
}


// inputs
    
let values = [10,20,30,40,"t"];
let res =["55","210","465","820"];


test(values,res)
