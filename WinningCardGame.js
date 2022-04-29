let cards = [[5,7,3,9,4,9,8,3,1],[1,2,2,4,4,1], [1,2,3]]
let joinedArr = cards.flat()

let keys = [...new Set(joinedArr)]
let obj={}
keys.map((item) => {
  
  obj[item]= joinedArr.filter(x => x ===item)
  
})

let one = []
for(let key in obj){
  if((obj[key]).length== 1){
    one.push(key)
  }
}

console.log((one))
