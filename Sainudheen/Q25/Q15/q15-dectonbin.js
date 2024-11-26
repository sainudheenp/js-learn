// decimal  to bin 


function dectobin(dec) {
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

// dectobin(156)
// dectobin(200)
dectobin(1000)

