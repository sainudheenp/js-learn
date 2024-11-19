// Write a program to count the number of vowels in a string?

// working


function vowelCount(str) {
  console.clear();
  let capStr = str.toUpperCase();
  let vowels = ["A", "E", "I", "O", "U"];
  console.log(capStr);
  let count = 0;

  for (i = 0; i < vowels.length; i++) {
    for (j = 0; j < capStr.length; j++) {
      if (vowels[i] == capStr[j]) {
        count = count + 1;
      }
    }
  }
  console.log(count);
}
vowelCount("arrtelouedddddhhhesaeie");
