let arr = [1,2,3]
let nums = [1,2,3]


for(let i = 0; i<arr.length; i++){
  console.log(arr[i], nums[i])
  if(arr[i] === nums[i]){
    console.log(arr[i])
  }
}
console.log("---")
for(let i = 0; i<arr.length; i++){
  for(let j = 0; j<nums.length; j++){
    console.log(arr[i], nums[j])
    if(arr[i] === nums[j]){
      console.log(arr[i])
    }
  }
}
console.log("---")

for(let i = 0; i<arr.length; i++){
  for(let j = nums.length-1; j>=0; j--){
    console.log(arr[i], nums[j])
    if(arr[i] === nums[j]){
      console.log(arr[i])
    }
  }
}

console.log("---")

//traverse through and do not start from beginning after each loop
for(let i = 0; i<arr.length; i++){
  for(let j = i; j<nums.length; j++){
    console.log(arr[i], nums[j])
    if(arr[i] === nums[j]){
      console.log(arr[i])
    }
  }
}
