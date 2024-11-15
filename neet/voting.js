// const voter = (age)=>{
//     age>=18 ? console.log("'Eligible for Voting'"): console.log('"Not Eligible for Voting"')
// }

const voter = (age)=>{
    return  age>=18 ?  ("Eligible"): ('Not Eligible')
}


voter(10)









function test(inputs,exres){
    for(i=0;i<inputs.length;i++){
        if(voter(inputs[i])==exres[i]){
            console.log("Test Passed")
        }
        else{
            console.log("Test Failed")
        }
    }

}

// inputs 
let inputs = [18,19,10,9]
let exres = ["Eligible","Eligible","Not Eligible","Not Eligible"]

test(inputs,exres)