
function fibo(n){
  let f = []; 
        let i;
        /* 0th and 1st number of the series are 0 and 1*/
        f[0] = 0;
        f[1] = 1;
        for (i = 2; i <= n; i++)
        {
            /* Add the previous 2 numbers in the series
            and store it */
            f[i] = f[i-1] + f[i-2];
        }
        return f;
}

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
