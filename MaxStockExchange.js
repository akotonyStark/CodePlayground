const ArrayChallenge = (arr) => {
  let max_profit = 0
  let arrOfprofits = []
  if(true){
    for(let i=0; i<arr.length; ++i){
      for(let j = arr.length-1; j>i; --j){
        
        if((arr[j] - arr[i]) !== undefined){
        //console.log([arr[i], arr[j], profitOrLoss])
        let profitOrLoss = arr[j] - arr[i]
        arrOfprofits.push(profitOrLoss)
        }
       
      }
    }
     //console.log(arrOfprofits)
    max_profit = Math.max(...arrOfprofits)
    return max_profit
  }
  else{
    return -1
  }
}


console.log(ArrayChallenge([45, 24, 35, 31, 40, 38, 11]))
