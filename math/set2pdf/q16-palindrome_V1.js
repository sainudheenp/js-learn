// function isPalindrome(str) {
//     let reversestr = "";
//     console.log(str)
//     console.log(str.split("").reverse().join(""));
//     console.log(str.length)
//     for (let i = str.length - 1; i >= 0; i--) {
//         console.log(str[i]);
//         reversestr = reversestr + str[i]
//     }
//     if (reversestr == str) {
//         console.log("Palindrome")
//     } else {
//         console.log("Not ")
//     }
// }
// // jan 5  
// isPalindrome(istring)



function isPalindrome(str) {
    let reversestr = "";
    reversestr = str.split("").reverse().join("");
    if (reversestr == str) {
        // console.log("Palindrome")
        return true
    } else {
        // console.log("! Palindrome ")
        return false
    }
}
// jan 5  

// isPalindrome("istring")
// isPalindrome("lool")


let test = () => {

    let inputs = ["hello", "LOL", "tot", "how"];
    let outputs = [false, true, true, false]

    inputs.forEach((input, i) => {
        if (isPalindrome(input) == outputs[i]) {
            console.log(i + 1, "Test Passed ")
        }
        else {
            console.log("Test Failed")
        }
    });

}

test()