function lonelyinteger(arr) {
    // Write your code here
     let newObj = {}

 const uniqueNums = [...new Set(arr)]

uniqueNums.forEach(num => {
  newObj[num] = arr.filter(item =>item === num)
})


for(let key in newObj){
  if((newObj[key]).length == 1){
   return key
  }
}
}
 
