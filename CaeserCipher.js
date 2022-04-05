function caesarCipher(str, key) {
    // Write your code here
   let alphabets = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ'
    let alphArr = alphabets.split('')
    // let key = 2
    let arr  = []
    str.split('').forEach((letter, i) => {
    //console.log(alphabets.indexOf(letter) + key)
   let shift = alphabets.indexOf(letter) + (key*2)
   if(shift > 51){
    shift = shift % alphabets.length
  }
     if(!alphabets.includes(letter)){
        arr.push(letter)
        
    }else{
        arr.push(alphabets[shift])
    }
        
        })
    return (arr.join(''))

}
