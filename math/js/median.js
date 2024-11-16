function median(arr) {
  console.clear();
  arr.sort((a, b) => a - b);
  if (arr.length % 2 != 0) {
    // console.log("odd array");

    console.log("Median :", arr[(arr.length - 1) / 2]);
  } else {
    // console.log("even array");
    // 1, 2, 3, 4, 5, 6
    let midone = arr[(arr.length / 2)-1];
    let midtwo = arr[arr.length / 2];
    console.log("Median :", (midone+ midtwo)/2);
  }
}



// median([3, 2, 1, 4, 5, 6]);

median([33, 22, 1, 14, 95, 6]);


