function plusMinus(arr) {
    // Write your code here
    let positive = []
    let negative = []
    let zero = []
    
    arr.forEach((item, index) => {
        if(item > 0){
            positive.push(item)
        }
        else if(item < 0){
            negative.push(item)
        }
        else{
            zero.push(item)
        }
    })
    console.log(positive.length/arr.length)
    console.log(negative.length/arr.length)
    console.log(zero.length/arr.length)

}
