const items = [
  {name: 'Bike', price: 100},
   {name: 'TV', price: 200},
   {name: 'ALbum', price: 10},
   {name: 'Book', price: 5},
   {name: 'Phone', price: 500},
   {name: 'Computer', price: 1000},
   {name: 'Keyboard', price: 25},
];

const lessthan100 = items.filter(item => item.price < 100);
console.log(lessthan100);

const itemNames = items.map(item => item.name)
console.log(itemNames)

const foundItem = items.find(item => item.name === 'Book')
console.log(foundItem)

items.forEach(item => console.log(item))

const totalPrice = items.reduce((total, item) => total + item.price, 0)
console.log(totalPrice)

const hasSomeCheapItems = items.some(item => item.price < 100)
console.log(hasSomeCheapItems) //returns true

const allCheapItems = items.every(item => item.price < 100)
console.log(allCheapItems) //returns false

 const numbers = [1,2,3,4,5,6,7,9]
 console.log(numbers.includes(11))





