function CheckVC(alphabet){
    let Alphabet = alphabet.toUpperCase()
    let vowels = ["A","E","I","O","U"]

    if(vowels.includes(Alphabet)==true){
        console.log("Its Vowel")
    }
    else{
        console.log("Consonant")
    }
}
CheckVC("a")