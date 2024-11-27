
//2635. Apply Transform Over Each Element in Array

var map = function (arr, fn) {
    let newar=[]
    arr.forEach((n,i )=> {
        newar.push(fn(n,i))
    });
    return newar
};