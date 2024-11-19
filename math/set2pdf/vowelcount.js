function vowelCount(str) {
  capStr = str.toUpperCase();
  let count = 0;
  vowels = ["A", "E", "I", "O", "U"];
  for (i = 0; i < capStr.length; i++) {
    if (vowels.includes(capStr[i])) {
      count = count + 1;
    }
  }
//   console.log(count);
  return count; 
}

// vowelCount("vonnue");

let inputs = ["hello", "hey", "vonnue"];
let output = [2, 1, 3];

function test() {
  inputs.forEach((input, i) => {
    if (vowelCount(input) == output[i]) {
      console.log(i, "Test Passed", input);
    } else {
      console.log("Test Failed");
    }
  });
}

test();
