// 2665

function createCounter(num) {
    let temp = num;
    let conuter = {
        increament() {
            num++
            return num
        },
        dec() {
            num--
            return num
        }, og() {
            num = temp
            return num  
        }
    }

    return conuter
}
const t = createCounter(10)
console.log(t.increament())
console.log(t.dec())
console.log(t.og())