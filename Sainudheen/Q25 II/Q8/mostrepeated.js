// using object

// function mostrep(arr) {

//     let countobj = {}
//     arr.forEach(element => {
//         console.log(element)
//         countobj[element] = (countobj[element] || 0) + 1
//     });
//     console.log(countobj)
// }
let arr = [1, 3, 4, 5, 1, 2, false, 2, 1];
// mostrep(arr)




function most(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") return null
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }

  let rptditem = null;
  let maxval = 0;
  for (let key in obj) {
    if (obj[key] > maxval) {
      maxval = obj[key];
      rptditem = key;
    }
  }

  // console.log("Most repeated item:", rptditem);
  return rptditem
}

most(arr);

function test() {
  let inputs = [[1, 3, 4, 5, 1, 2, false, 2, 1], [1, 3, 4, 5, 1, 2, 1, 2, 1], [1, 3, 4, 5, 1, 2, 1, 2, 1]]
  let outpusts = [1, 1, 1]
  inputs.forEach((arr, i) => {
    let retvalue = most(arr)
    if (retvalue == outpusts[i]) {
      console.log("Test Passed")
    } else if (retvalue == null) {
      console.log("Invalid input")
    } else {
      console.log("Test Failed")
    }
  })
}

test()
