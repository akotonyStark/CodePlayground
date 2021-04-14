function fibo(n){
  //declare an empty array
  let arr = []

  //fix first and second positions with a value
  arr[0] = 0
  arr[1] = 1

  for(let i=2; i<=n; i++){
    //add previous two to make current
    arr[i] = arr[i-1] + arr[i-2]
  }

  return arr
}

console.log(fibo(4))

console.log(fibo(6))




//getting the nth fibo number
function getNthFibo(n){
  if (n <= 1){
    return n; 
  }
  else{
   return getNthFibo(n-1) + getNthFibo(n-2);
  }    
    
  
}

console.log(getNthFibo(7))

//you can also get the nth element by using the previous function
//but returning f[n] instead of f

//to display the series of fibonacci numbers
let temp = []
for(let i=0; i<10; i++){
  temp.push(getNthFibo(i))
}
console.log(temp)
