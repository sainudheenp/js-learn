 var numebrGame = function(nums){
    let arr = []
    nums.sort((a,b)=>a-b)

    while(nums.length > 0){
      let aliceMOve = nums.shift()
      let bobMove = nums.shift()

      arr.push(bobMove)
      arr.push(aliceMOve)

    }
return arr
 }