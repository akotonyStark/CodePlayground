const arr = ["5", "2", "C", "D", "+"]
let sum = 0
let temp = []
for(let i=0; i<arr.length; i++){
  
  if(arr[i] == Number(arr[i])){
      temp.push(Number(arr[i]))
  }
   else if(arr[i] == '+'){
    let nextScore = (temp[temp.length-1]) + (temp[temp.length-2])
    temp.push(nextScore)
    // console.log(arr[i])
  }
   else if(arr[i] == 'D'){
    let nextScore = 2 * Number(temp[temp.length - 1])
    temp.push(nextScore)
  // console.log(arr[i])
  }
 
  else if(arr[i] == 'C'){
    temp.pop()
    //console.log(arr[i])
  }
  else{
    temp.push(arr[i])
  }
}
 console.log(temp.reduce((total, i) => total + i))
