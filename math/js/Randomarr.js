// generate random array and find sum and avg


function random() {
    let arr = [];
    let arraySize = Math.random() * 10;

    for (i = 0; i < arraySize; i++) {
        arr[i] = Math.floor(Math.random() * 40);
    }
    console.log("Generated Array :", ...arr)
    let sum = 0;
    arr.forEach(item => {
        sum = sum + item;
    })
    console.log("Sum :",sum)
    console.log("Avarage :", Math.round(sum/arraySize))

} 
random()
