// function isPalindrome(t) {
//     // console.log(t.length)
//     let array = []
//     for (i = t.length - 1; i >= 0; i--) {
//         array.push(t[i])
//     }
//     // console.log(array)
//     // console.log(t)
//     for(i=0;i<=array.length;i++){
//         if(array[i]==t[i]){
            
//         }
//     }

// }


// v2
function isPalindrome(t){
    // reverse only works in array
    let rev = t.split("").reverse().join("");
    if(t==rev){
        console.log("palindrome")

    }
    else{
        console.log("Not a Palindrome")
    }
}



isPalindrome("malayaflam")