function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function fr(numerator, denominator) {
    const divisor = gcd(numerator, denominator);
    return `${numerator / divisor}/${denominator / divisor}`;
}

console.log(fr(8, 12))

// function test() {
    
// }