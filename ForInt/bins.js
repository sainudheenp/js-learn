let array = [2, 4, 5, 3, 5, 6];
let item = 3
console.log(array.sort());
console.log(array.sort((a, b) => a - b));

let sortedArray = array.sort();
let start = 0;
let end = sortedArray.length - 1;

while (end >= start) {
  const middleIdx = Math.floor((start + end) / 2);

  if (sortedArray[middleIdx] == item) {
    return console.log("Item found at :", middleIdx);
  } else if (sortedArray[middleIdx] > item) {
    end = middleIdx - 1;
  } else {
    start = middleIdx + 1;
  }
}
