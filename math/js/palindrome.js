

function IsPalindrome(number) {

    let strnum = number.join()
    console.log(strnum)
    let revstr = strnum.split('').reverse().join("")
    console.log(revstr)
    if (strnum == revstr) {

        console.log("Palindrome")
    } else {
        console.log("Not Palindrome")
    }
}
IsPalindrome([122242])
IsPalindrome([121])
IsPalindrome([121121])