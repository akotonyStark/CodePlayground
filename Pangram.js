let pangram = ["pack my box with five dozen liquor jugs", "this is not a pangram"]
let alpahabets = 'abcdefghijklmnopqrstuvwxyz'.split('')
let valid = true;

pangram.forEach((str, index) => {
  for(let i=0; i<alpahabets.length; i++){
   if(!str.includes(alpahabets[i])){
       valid = false
      }
    }
 console.log(valid)
})
