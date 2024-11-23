// Create a function that flattens a nested array
// (e.g., [1, [2, [3, 4]], 5] becomes [1, 2, 3, 4, 5]).

function arrayflattern(arr) {

  let flatArray = arr.flat(Infinity);
  console.log("flatval",...flatArray);
  let usingspread=[].concat(...arr);
  console.log("UsingSpread fekd up",...usingspread)
}

let arr = [1, [2, [3, 4]]];
arrayflattern(arr);
