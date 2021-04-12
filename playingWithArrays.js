let arr = [1,2]
let nums = [2,1]


//looping through side by side
for(let i = 0; i<arr.length; i++){
  console.log(arr[i], nums[i])
  if(arr[i] === nums[i]){
    console.log(arr[i])
  }
}

