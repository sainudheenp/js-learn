function oddeven(num){
return num%2==0 ?  "even" : "odd"
}

function test(){

    let values = [1,2,3,4,"t"];
    let res =["odd","even","odd","even","test"];
    
    for(i=0;i<values.length;i++){
    //    let retValue = oddeven(values[i])
        if(oddeven(values[i])==res[i]){
            console.log("Test Passed")
        }
        else{
            console.log("Test Failed")
        }
    }
}




// test()