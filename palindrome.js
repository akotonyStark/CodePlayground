function checkPalindrome(str){
    let arr = [...str]
  // console.log(arr)
  let isPalindrom = false

  let temp = []
    for(let j=arr.length-1; j>=0; j--){
      temp.push(arr[j])
    }
    console.log(temp)

  if(temp.join() === arr.join()){
    isPalindrom = true;
  }
  else{
    isPalindrom = false;
  }
  return isPalindrom
}
