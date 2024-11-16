// working without arr.reverse()


function IsPalindrome(number) {
    
    let revNum = [];
    for (i = number.length - 1; i >= 0; i--) {
        revNum.push(number[i])
        // console.log("numer : ", [i], number[i])
    }

    // console.log(revNum)
    // console.log(number)
    let strRev = revNum.join("")
    // console.log(strRev)

    return strRev === number ? console.log("true") : console.log("false");
    // if( (...revNum) == (...number){

    // })

    console.log("rev : ", revNum)
}

IsPalindrome("345")
IsPalindrome("121")