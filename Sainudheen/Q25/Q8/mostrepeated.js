// using object

// function mostrep(arr) {

//     let countobj = {}
//     arr.forEach(element => {
//         console.log(element)
//         countobj[element] = (countobj[element] || 0) + 1
//     });
//     console.log(countobj)
// }
let arr = [1, 3, 4, 5, 1, 2, 6, 2, 1];
// mostrep(arr)

//using 
 

function most(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
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

    console.log("Most repeated item:", rptditem);
    return rptditem
}

// most(arr);

