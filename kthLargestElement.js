let arr = [4,2,9,7,5,6,7,1,3]
k=3
let copy = arr.map(x => x)

let sorted = copy.sort((a,b) => b-a)

console.log(arr)
console.log(sorted)

console.log('The ',k,'th larget element = ', sorted[k-1])
