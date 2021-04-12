let factorial = (n) => {
  let fact = 1
    if(n <= 1){
        return fact
    }
    else{
      for(let i = 1; i<=n; i++){
         fact = fact * i
      }
      return fact
    }
}
