let array=[1,3,4,3,4,5,5,6,7,8]

console.log([...new Set(array)])

console.log(array.filter((item,index)=>array.indexOf(item)===index))



