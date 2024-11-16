function IsAmstrong(number) {
    // console.log(String(number).slice(0, 1))
    // console.log(String(number).length)
    let caretVal = 0;
    for (i = 0; i < String(number).length; i++) {
        let item = String(number).slice(i, i + 1)
        // console.log(item)
        caretVal = caretVal + item ** parseInt(String(number).length);
    }
    caretVal == number ? console.log("Amstrong Number") : console.log("Not an Amstrong Number")
}

IsAmstrong(153)
IsAmstrong(13)
IsAmstrong(9)
IsAmstrong(99)
IsAmstrong(407)
IsAmstrong(9)