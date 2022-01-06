const computeScore = (word) => {

  let groups = [
    {
      group: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
      score: 1
    },
    {
    group: ['D','G'],
    score: 2
    },
    {
    group: ['B', 'C', 'M', 'P'],
    score: 3
    },
    {
    group: ['F', 'H', 'V', 'W', 'Y'],
    score: 4
    },
    {group: ['K'], score: 5},
    {group: ['J', 'X'], score: 8},
    {group : ['Q', 'Z'], score: 10}
  ]

  let wordArr = word.split('')
  let score = 0
  
 wordArr.forEach(letter => 
    groups.forEach(item => {
      if(item.group.includes(letter.toUpperCase())){
          score += item.score
        }
    }))
 console.log(`${word} equals ${score} points`)
}

computeScore('cabbage')

