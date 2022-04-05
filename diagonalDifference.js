function diagonalDifference(arr) {
    // Write your code here
    let left = []
    let right = []
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if(i == j){
                left.push(arr[i][j])
            }
            if(i+j == arr.length-1){
                right.push(arr[i][j])
            }
    }
    }

    let a = (left.reduce((total, item) => total+item, 0))
    let b = (right.reduce((total, item) => total+item, 0))

    let diff = Math.abs(a-b)
    return diff
}
