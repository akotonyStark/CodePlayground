function solution(arr){
arr.sort((a,b) => a-b)

function checkMin(num){
  let min = arr[0]
  return num>min
}

  let i =0
  let nextMin = arr.find(checkMin)
  let nextNextMin = nextMin + 1
  
  if(arr.length == 1 && arr[0] == 1){
  	return 2
  }
  else if((arr.length == 1 && arr[0] <= 0) || arr.length == 0){
   return 1
  }
  else if(arr.length == 1 && arr[0] >= 1 ){
   return arr[0] - 1
  }
  else{
    while(i < arr.length){
     if((arr[i] >= nextMin) && (!arr.includes(nextNextMin))){
     console.log('a')
      return (nextNextMin)
    }
    else if(arr[i] < 0){
     return (1)
    }
    else{
      arr = arr.splice(arr.indexOf(nextMin))     
      nextNextMin = arr[0] + 1
      //console.log(nextNextMin)
      if((arr[i] >= nextMin) && (!arr.includes(nextNextMin))){
      return (nextNextMin) 
      break
      } 
      else{
      nextMin = arr.find(checkMin)
      //console.log(arr)
     	if((arr[i] >= nextMin) && (!arr.includes(nextMin + 1))){
     	      // console.log('a')
     	      return (nextMin + 1)
     	      } 
    } i++
  }
}
  }
   

}
