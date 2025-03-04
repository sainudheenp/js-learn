// let inpObj = {"x":5,"y":42}
let inpObj = {}
let isEmpty = false
for (key in inpObj) {
    isEmpty = true;
    console.log(key)
}

console.log(isEmpty)
