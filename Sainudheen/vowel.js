function CheckVC(alphabet) {
    let Alphabet = alphabet.toUpperCase()
    let vowels = ["A", "E", "I", "O", "U"]
    let consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']

    if (vowels.includes(Alphabet) == true) {
        return ("Vowel")
    }
    else if(consonants.includes(Alphabet)){
        return ("Consonant")
    }
    else{
       return  false
    }
}
// CheckVC("a")

const test = () => {
    let values = ["a", "b", "c", "d","kk"];
    let res = ["Vowel", "Consonant", "Consonant", "Consonant",];
    for (i = 0; i < values.length; i++) {
        let retValue = CheckVC(values[i])
        if (retValue == res[i]) {
            console.log(retValue, ": Test Passed ")
        }
        else {
            console.log(retValue, ": Test Failed")
        }
    }
}
test()