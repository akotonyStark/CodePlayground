let arr = [2,4,5,5,5,5,5,7,9,9]
let target = 5
let output = []

if(!arr.includes(target)){
  output = [-1,1]
}
else{

  for(let i=0; i<arr.length; i++){
    if(arr[i] === target && arr[i-1] != target){
      output.push(i)
      continue;
    }
    else if(arr[i] === target && arr[i+1] != target){
      output.push(i)
    }
   
  }
  
}
console.log(output)
