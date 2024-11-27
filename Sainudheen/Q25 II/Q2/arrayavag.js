console.log("hello boss");
let avgar = (arr) => {
  let sum = 0;
  arr.forEach((item) => {
    if (!isNaN(item)) {
      sum += item;
    } else {
      return null
    }
  });
  console.log(sum);
  return sum / arr.length;

};



let inputarr = [
  [1, 3, 4, 5, 6],
  [4, 4, 4, false],
  [1, 3, 4, 5, 6],
];
let exop = [3.8, 4, 3.8];

let test = () => {
  inputarr.forEach((array, i) => {
    avgar(array) == exop[i]
      ? console.log("Test Passed")
      : avgar(array) == null ? console.log("Invalid Input")
      : console.log("Test Failed");
  });
};

test();
