function findMod(arr) {
    let count = {};
    arr.forEach(element => {
        count[element] = (count[element] || 0) + 1;
    });
    console.log(count);
    let maxvalue = 1;
    for (let key in count) {
        if (count[key] > maxvalue) {
            maxvalue = key
        }
    }
    console.log(maxvalue)
}

findMod([1, 4, 2, 3, , 3, 3, 4, 4])