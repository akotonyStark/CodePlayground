//creating a russian dictionary

//objects to be passed to the Map
let five = {name: "five"}, four = {name:"four"},
 one = {name:"one"}, two = {name: "two"}

//can also pass iterables to the map like this
let dictionary = new Map([[one,"adin"], [two,"dva"]]);

let three = {name: "Number Three"}
dictionary.set(three,"Tri");
dictionary.set(four,"ChiTri");
dictionary.set(five,"Piat");

console.log(dictionary.get(three))
console.log(dictionary.get(one))
console.log(dictionary.get(two))
console.log(dictionary.get(four))
console.log(dictionary.get(five))

console.log(dictionary.size)
