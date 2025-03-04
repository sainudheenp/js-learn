function FizzBuzz(num) {
    // let num = 1;
    if (num % 3 == 0 && num % 5 == 0) { return console.log("FizzBuzz") }
    if (num % 3 == 0) { return console.log("Fizz") }
    if (num % 5 == 0) { return console.log("Buzz") }
    console.log(num)
}
// FizzBuzz()

for(i=1;i<=20;i++){
    FizzBuzz(i)
}