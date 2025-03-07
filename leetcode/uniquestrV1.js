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
    for(key in obj){
        console.log(obj[key])
        
        
    }
}

firstUniqChar("Vonnue")