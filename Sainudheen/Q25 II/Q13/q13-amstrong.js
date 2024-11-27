function IsAmstrong(number) {
    if (typeof number !== "number") return null
    let numstr = String(number)
    let checknum = 0;
    // console.log(numstr)

    for (i = 0; i < numstr.length; i++) {
        checknum = checknum + parseInt(numstr[i]) ** numstr.length
    }
    // console.log(checknum)
    if (checknum == number) {
        return true
    }
    else {
        return false
    }
}


// IsAmstrong(1634)

var test = () => {

    let obj = {
        test1: [153, true],
        test2: [1202, false],
        test3: [1634, true]
    }
    for (let keys in obj) {
        // console.log(obj[keys])
        let retvalue = IsAmstrong(obj[keys][0])
        if (retvalue == obj[keys][1]) {
            console.log("Test Passed")
        } else if (retvalue == null) {
            console.log("Test Skipped")
        }
        else {
            console.log("Test Failed")
        }
    }


    // let inputs = [153, 1202, 1634];
    // let outputs = [true, false, true];
    // inputs.forEach((input, i) => {
    //     if ()
    // });
}

test()


