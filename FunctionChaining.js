
let calc = {
  total: 0,
  add: function(a){
    this.total += a
    return this
  },
  multiply: function(a){
    this.total *= a
    return this
  },
  subtract: function(a){
    this.total -= a
    return this
   
  }
  
}


const result = calc.add(5).multiply(10).subtract(15)
console.log(result.total)
