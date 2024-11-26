// decimal  to bin 


function dectobin(dec) {
    if (typeof dec !== "number") return null
    let remarray = []
    let val = 0;
    let rem = 0;
    do {

        rem = Math.floor((dec % 2))
        remarray.push(rem)
        // console.log(dec, "rem :", (dec % 2))

        dec = Math.floor((dec / 2));


    }
    while (dec >= 1)

    console.log("full array :", ...remarray.reverse())
    return remarray

}

dectobin(156)
dectobin(200)
dectobin(1000)

var test = () => {

    let obj = {
        test1: [156, [1, 0, 0, 1, 1, 1, 0, 0]],
        test2: [200, [1, 1, 0, 0, 1, 0, 0, 0]],
        test3: [1000, [1, 1, 1, 1, 1, 0, 1, 0, 0, 0]]
    }
    for (let keys in obj) {
        // console.log(obj[keys])
        let retvalue = dectobin(obj[keys][0])
        if (JSON.stringify(retvalue) == JSON.stringify(obj[keys][1])) {
            console.log("Test Passed")
        } else if (retvalue == null) {
            console.log("Test Skipped")
        }
        else {
            console.log("Test Failed")
        }
    }
}

test()