function myFucn(){
    const x =877;
    const y = 88;
    function innerFunc(){
        console.log("Outer vars :",x,y)
    }
    return innerFunc
}
const clsr = myFucn()
clsr()

