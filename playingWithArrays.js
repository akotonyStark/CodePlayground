let arr = [1,2]
let nums = [2,1]


//looping through side by side
for(let i = 0; i<arr.length; i++){
  console.log(arr[i], nums[i])
  if(arr[i] === nums[i]){
    console.log(arr[i])
  }
}

//doing an inside loop to compare elements starting from front
console.log("---")
for(let i = 0; i<arr.length; i++){
  for(let j = 0; j<arr.length; j++){
    console.log(arr[i], nums[j])
    if(arr[i] === nums[j]){
      console.log(arr[i])
    }
  }
}

//looping through inner loop from the tail and outerloop from the head
for(let i = 0; i<arr.length; i++){
  for(let j = arr.length-1; j>=0; j--){
    console.log(arr[i], nums[j])
    if(arr[i] === nums[j]){
      console.log(arr[i])
    }
  }
}
