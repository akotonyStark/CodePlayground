function add(a){
  return function(b){
   return function(c){
     return function(d){
       return a+b+c+d
     }
   }
  }
}


console.log(add(5)(4)(3)(8))
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

const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(5)
console.log(add5)
