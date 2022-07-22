const arr = [34,23,1,24,75,33,54,8]
let k = 60

arr.sort((a,b) => b-a)
console.log(arr)

let temp = []
for(let i=0; i<arr.length; i++){
  for(let j=1; j<i; j++){
    let sum = arr[i] + arr[j]
    //console.log(arr[i], arr[j], sum)
    if(sum < k) {
      temp.push(sum)
    }
    
  }
}

if(temp.every((item) => item > k)){
  console.log(temp[0])
}
else{
  console.log(-1)
}

