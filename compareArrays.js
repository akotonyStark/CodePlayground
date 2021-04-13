function compareArrays(arr1,arr2){
  //without stringifying them, these are two separate array objects
  if(JSON.stringify(arr1) === JSON.stringify(arr2)){
    console.log(true)
  }

  else{
    console.log(false)
    }
}

compareArrays([1,2,3],[1,2,3])

/*solution 2*/
function compareArrays(arr1,arr2){
  let result = false
  if(arr1.length !== arr2.length){
    result = false
  }
  else{
    for(let i = 0; i<arr1.length; i++){
      if(arr1[i] === arr2[i]){
        result = true
      }
    }
  }
  return result
}

console.log(compareArrays([1,2,3],[1,2,3]))
