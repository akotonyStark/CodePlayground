/* two strings are considered anagrams if they are made of the same characters 
with the same frequencies */

let str1 = "nameless"
let str2 = "salesman"

let arr1 = str1.split('')
let arr2 = str2.split('')

arr1.sort()
arr2.sort()

if (arr1.length === arr2.length) {
   arr1.every((element, index) => {
      if (element === arr2[index]) {
        console.log('is anagram') ;
      }

      else{
         console.log('not anagram')
      }
           
    });
}
