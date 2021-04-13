let arr1 = [-1,3,8,2,9,5]
let arr2 = [4,1,2,10,5,20]


//solution 1 - brute force
for(let i = 0; i<arr1.length; i++){
  for(let j = 0; j<arr2.length; j++){
    //console.log(arr1[i] + arr2[j])
    if(arr1[i] + arr2[j] === 24-1 || arr1[i] + arr2[j] === 24+1){
      console.log(arr1[i], arr2[j])
    }
  }
}
