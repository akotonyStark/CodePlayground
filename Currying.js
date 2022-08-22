
//f(a,b,c) => f(a)(b)(c)

const sum = (a,b,c) => {
  return a+b+c
}
const curryFn = (fn) => {
  return function(a){
    return function(b){
      return function(c){
        return fn(a,b,c)
      }
    }
  }
}

const curriedSum = curryFn(sum)
console.log(curriedSum(2)(3)(5))
