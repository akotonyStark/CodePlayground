function compareArrays(arr1,arr2){
  if(JSON.stringify(arr1) === JSON.stringify(arr2)){
    console.log(true)
  }

  else{
    console.log(false)
    }
}

compareArrays([1,2,3],[1,2,3])
