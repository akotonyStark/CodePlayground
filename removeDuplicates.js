const arr = [2,4,6,8,2,2,3,7,4]

//brute force
const uni = []
for(let i=0; i< arr.length; i++){
  if(uni.indexOf(arr[i]) === -1){
    uni.push(arr[i])
  }
}
console.log(uni)

//new method
const unique = []
arr.forEach(item => {
  if(!unique.includes(item)){
    unique.push(item)
  }
})
console.log(unique)

//set method
const uniqueVals = new Set(arr)
console.log([...uniqueVals])

const sorted = arr.sort((a, b) => a-b)
console.log(sorted)

