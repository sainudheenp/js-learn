/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    let str = String(num);
    let sum = str.split('').reduce((a, c) => a + Number(c), 0);
    if (sum > 9) {
        return addDigits(sum)
    }
    return sum

};

console.log(addDigits(88)); 