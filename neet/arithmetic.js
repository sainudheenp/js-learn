

function add(a , b){
    var sum = a+b
    console.log("sum : ", a ,"+" , b , "=" ,sum )

}
const sub = (d,b)=>{
var value = d-b;
   console.log("difference : ", d ,"+" , b , "=" ,value

    )
}
let mul = (l,k)=>{
    var mul = l+k
    console.log("product is : ", l ,"+" , k, "=" ,mul )

}
let devide = (a,b)=>{
    var mul = a+b
    console.log("quotient is : ", a ,"+" , b , "=" ,devide )

}

// prompt won't work in a Node.js environment

var val_1 = prompt("Enter fisrt digit")
var val_2 = prompt("Enter Second digit");



add(val_1 ,val_2);
sub(val_1,val_2)
mul(val_1,val_2)
devide(val_1,val_2)