let word = 'parallelogram'

let arr = word.split('')
let obj = {}
arr.forEach((char, i) => {
 
  if(obj[char] > 0){
    obj[char]++
  }
  else{
    obj[char] = 1
  }
   
})

console.log(obj)
