let data = [
   {name: 'Nala', type: 'dog'},
   {name: 'George', type: 'monkey'},
   {name: 'Scar', type: 'dog'},
   {name: 'Nemo', type: 'fish'},
   {name: 'Tasha', type: 'dog'},
   {name: 'Leo', type: 'cat'}
  ]

const categories = []
let newObj = {}

data.forEach(animal => {
   categories.push(animal.type)
})

const uniqueCategories = [...new Set(categories)]

uniqueCategories.forEach(category => {
   newObj[category] = data.filter(animal => animal.type === category)
})
console.log(newObj)
