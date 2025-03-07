var firstUniqChar = function (s) {
    let rep = 0
    let repItem = ''
    let obj = {}
    let SRTarray = s.split("")
    console.log(SRTarray)
    SRTarray.forEach(element => {
        obj[element] = (obj[element] ? obj[element]++ : 0) + 1
    });
    console.log(obj)
    for (key in obj) {
        console.log(obj[key] == 1)
        if (obj[key] == 1) {
            console.log(SRTarray.indexOf(key))
            return SRTarray.indexOf(key)
        } else if (obj[key] <= 0) return -1


    }
    return -1
}

firstUniqChar("loveleetcode")