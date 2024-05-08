// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function isAlphaNumeric(str) {
    // Regex to check valid
    // alphanumeric string  
    let regex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/);
 
    // if str 
    // is empty return false
    if (str == null) {
        return "false";
    }
 
    // Return true if the str
    // matched the ReGex
    if (regex.test(str) == true) {
        return "true";
    }
    else {
        return "false";
    }
}

function hasEvenNumberOfLetters(str){
    let letters = str.replace(/[^a-zA-Z]/g, '');

    if(letters && letters.length % 2 == 0){
        return true
    }
    return false
}

function hasOddNuberOfDigits(str){
    let numbers = str.replace(/[^0-9]/g,"");
    if(numbers && numbers.length % 2 != 0){
        return true
    }
    return false
}

function solution(S) {
    // Implement your solution here
    let words = S.split(' ')
    let validPasswords = []
    for(let i=0; i<words.length; i++){
        if(isAlphaNumeric(words[i]) && hasEvenNumberOfLetters(words[i]) && hasOddNuberOfDigits(words[i])){
            validPasswords.push(words[i])
        }
    }
    //console.log("Valid", validPasswords)
    let lengths = []
        for(let i=0; i<validPasswords.length; i++){
            lengths.push(validPasswords[i].length)
        }

        //console.log(lengths)
        let maxLength = Math.max(...lengths)
        //console.log(lengths.indexOf(maxLength))

        //let longestPass = validPasswords[lengths.indexOf(maxLength)]
        //console.log(longestPass)
        return maxLength
}
