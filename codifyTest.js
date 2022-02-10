
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


/* solution submitted in 2022
const A = [-1,-3]


function solution(A){
const B = A.sort((a,b) => a-b)
let smallest  = A[0]
// console.log(smallest)
let someNum = 0

if(smallest < 0){
  return 1
}

for(let i=0;  i<A.length; i++){
  if(A.includes(smallest) && A[i]>0){
  //console.log(smallest)
  smallest = smallest + 1
  someNum = smallest
}else{
  someNum = smallest
  
}
}
return someNum
}

console.log(solution(A))

*/



// optmized solution above
let arr =   [1,2,40000]//let arr = [1]//let arr =   [1,2,3] //let arr =   [-1, -3] //let arr = [1,2,40000] //let arr = [-1000000, 1000000]

let solution = (arr) => {

if(arr.length < 2 || (arr.length == 2 && arr[0] < 0)){
	return 1
}

else{
 arr.sort((a,b) => a-b)
  arr = [...new Set(arr)]
  let arrCopy = [...new Set(arr)]
  let start= 0, new_start = 0
  
  let midpoint = (arr.length)/2
  let left = arr.splice(0,midpoint)
  let right = arrCopy.splice(midpoint)
  
  do{
  	if(left.includes(start + 1)){
    	//move to the right array
    }
    else{
    	new_start = left[left.length-1]
      return checkAgain(right, new_start)   
    } 
    start++
  }while(start < arr.length)
}
 
}
  
  const checkAgain = (data, new_start) => {
    while(data.includes(new_start + 1)){
      new_start++
    }
    return new_start + 1
  }
  
console.log(solution(arr))
