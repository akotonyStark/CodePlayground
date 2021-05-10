
let arr =   [1, 3, 5,8,6, 4, 1, 2]
//let arr = [1]
//let arr =   [1,2,3]
//let arr =   [-1, -3]
//let arr = [1,2,40000]
//let arr = [-1000000, 1000000]


function solution(arr){
  arr.sort((a,b) => a-b)
  arr = [...new Set(arr)]
  console.log(arr)

  let item = 0
  while(arr.includes(item + 1)){
    item ++
  }
  return item + 1
  }
   

console.log(solution(arr))

