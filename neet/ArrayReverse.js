// nw
function rev(array){
    let revArray;
for(let i=array.length-1;i>=0;i--){
  console.log( array[i])
  for(j=0;j<=array.length;j++){
    revArray.push(array[i])
  }
}
console.log("reverse Array:",...revArray)
}

rev([0,4,5,6])
rev(["h","e","l","l","o"])