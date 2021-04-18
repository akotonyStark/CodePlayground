//creating a russian dictionary

let one = {name: "one"}, two = {name:"two"}

let dictionary = new Map([[one,"adin"], [two,"dva"]]);

let three = {name: "Number Three"}
dictionary.set(three,"Tri");

console.log(dictionary.get(three))
console.log(dictionary.get(one))
console.log(dictionary.get(two))
console.log(dictionary.size)
