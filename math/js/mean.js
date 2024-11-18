function mean(arr) {
  let sum = 0;
  arr.forEach((item) => {
    sum = sum + item; 
  });
  console.log("Mean :", sum / arr.length);
}

mean([1, 2, 3, 4, 5]);
