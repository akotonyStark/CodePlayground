const items = [
  {name: 'Bike', price: 100},
   {name: 'TV', price: 200},
   {name: 'ALbum', price: 10},
   {name: 'Book', price: 5},
   {name: 'Phone', price: 500},
   {name: 'Computer', price: 1000},
   {name: 'Keyboard', price: 25},
];

// const lessthan100 = items.filter(item => item.price < 100);
// console.log(lessthan100);

// const itemNames = items.map(item => item.name)
// console.log(itemNames)

// const foundItem = items.find(item => item.name === 'Book')
// console.log(foundItem)

//items.forEach(item => console.log(item))

const totalPrice = items.reduce((total, item) => total + item.price, 0)
console.log(totalPrice)
