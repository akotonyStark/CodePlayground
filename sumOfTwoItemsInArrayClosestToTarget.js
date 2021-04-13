let arr1 = [-1,3,8,2,9,5]
let arr2 = [4,1,2,10,5,20]

//solution 1 - brute force

let loops = 0
for(let i = 0; i<arr1.length; i++){
  for(let j = 0; j<arr2.length; j++){
    //console.log(arr1[i] + arr2[j])
    loops++
    if(arr1[i] + arr2[j] === 24-1 || arr1[i] + arr2[j] === 24+1){
      console.log(arr1[i], arr2[j])
      break;
    }
  }
}console.log("Took us", loops, "loops to find")


/* solution 2 
this approach sorts the arrays first, then loops from the head in one and the tail in the other
this is because it is more likely to get closer to the sum if the smallest and biggest elements in the arr are paired
*/

let s1 = arr1.sort((a,b) => a-b)
console.log(s1)

let s2 = arr2.sort((a,b) => a-b)
console.log(s2)

for(let i = 0; i<s1.length; i++){
  for(let j = s2.length-1; j>0; j--){
    loops++
    //console.log(arr1[i] + arr2[j])
    if(arr1[i] + arr2[j] === 24-1 || arr1[i] + arr2[j] === 24+1){
      console.log(arr1[i], arr2[j])
      break;
    }
  }
}console.log("Took us", loops, "loops to find")

