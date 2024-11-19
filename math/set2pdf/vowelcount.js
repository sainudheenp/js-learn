// Write a program to count the number of vowels in a string?

function vowelCount(str) {
  console.clear();
  let capStr = str.toUpperCase();
  let vowels = ["A", "E", "I", "O", "U"];

  console.log(capStr);
  let count = {};

  for (i = 0; i < 5; i++) {
    // if(vowels[i]==)
    for (j = 0; j < 5; j++) {
      if (vowels[i] == capStr[j]) {
        console.log(vowels[i], "equal");
        count[vowels] = (count[vowels] || 0) + 1;
      } else {
        console.log("not equal");
      }
    }
  }
  console.log(count);

  //   capStr.forEach((element) => {
  //     console.log(element);
  //   });
}
vowelCount("aerro");
