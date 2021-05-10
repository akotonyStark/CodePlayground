
//let arr =   [1, 3, 6, 4, 1, 2]
//let arr =   [1]
//let arr =   [-1, -3]
let arr = [1,2,40000]
//let arr = [-1000000, 1000000]


function solution(arr){
arr.sort((a,b) => a-b)

function checkMin(num){
  let min = arr[0]
  return num>min
}

  let i =0
  let nextMin = arr.find(checkMin)
  let nextNextMin = nextMin + 1
   
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
      nextNextMin = nextMin + 1
      if((arr[i] >= nextMin) && (!arr.includes(nextNextMin))){
      return (nextNextMin) 
      break
      } 
      else{
      nextNextMin =  (nextNextMin + 1) 
      }
    } i++
  }
}

console.log(solution(arr))

