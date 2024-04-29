function deepFlat(array){
  return array.reduce((acc, subArr) => {
    return acc.concat(Array.isArray(subArr) ? deepFlat(subArr) : subArr)
  }, [])
}

console.log(deepFlat([[1], [2,3], [4]]))


function shuffle(arr){
  let tempVal, randomIndex;
  let currentIndex = arr.length - 1
  
  while(currentIndex !== 0){
    randomIndex = Math.floor(Math.random()*currentIndex)
    tempVal = arr[currentIndex]
    arr[currentIndex] = arr[randomIndex]
    arr[randomIndex] = tempVal
    
    currentIndex--
  }
  
  return arr
}


console.log(shuffle([1,2,3,4,5,6,7,8,9]))
