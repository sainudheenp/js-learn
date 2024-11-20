function mostrep(arr) {

    let countobj = {}
    arr.forEach(element => {
        console.log(element)
        countobj[element] = (countobj[element] || 0) + 1
    });
    console.log(countobj)
}
let arr = [1, 3, 4, 5, 6, 2, 1];
mostrep(arr)