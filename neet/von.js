

function findm(arr) {
    let asum = 0;
    let sum = 0;
    let ls = arr.length + 1;
    
    for (i = 0; i <= ls; i++) {
        asum = asum + i;
    }
    for (j = 0; j < arr.length; j++) {
        sum = sum + arr[j];
    }
    console.log("a sum :", asum)
    console.log(" sum :", sum)
    console.log("missing number:",asum-sum)
}

findm([1,2,3,5,6,7,8])

