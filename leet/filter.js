//2634. Filter Elements from Array
var filter = function (arr, fn) {
    let newarr = []
    arr.forEach((Element, i) => {

        if(fn(Element,i)){
            newarr.push(Element) 
            
        }
    });
    return newarr
}
