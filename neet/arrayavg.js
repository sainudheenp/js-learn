function arrayavg(arr){
    let sum =0;
    arr.forEach(element => {
        sum = sum+ element ;
    });
    console.log("avg : ",(sum /arr.length))
}
arrayavg([1,2,3,4,5])