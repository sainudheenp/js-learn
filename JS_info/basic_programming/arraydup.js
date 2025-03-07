// function ardupe(arr) {
//   let NewArr = [...new Set(arr)];
//   console.log(NewArr);
// }
// ardupe([1, 1, 1, 2, 3]);

function arrdup(arr1, arr2) {
  console.log([...arr1, ...arr2]);
}
arrdup([1, 2, 3], [4, 5, 6]);

function objmrg(obj1, obj2) {
  console.log({ ...obj1, ...obj2 });
}

objmrg({ a: 1, b: 2 }, { c: 4 });

console.log(Date.now().toString());

let arr1=[1,2,3]
let arr2=[4,5,6]