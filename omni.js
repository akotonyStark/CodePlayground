let grid = [
  [0, 1, 0, 0],
  [0, 0, 0, null],
  [null, 0, 0, 1],
  [1, 0, 0, 0],
]

let safeMovementsCount = 0

for (row = 0; row < grid.length; row++) {
  for (col = 0; col < grid[row].length; col++) {
    //console.log(`Found ${grid[row][col]} at (${row},${col})`)

    if (grid[row][col] === 0) {
      safeMovementsCount++
      console.log('Safe Steps: ', safeMovementsCount)

      if (safeMovementsCount === 3) {
        console.log('End of the path traversed')

        break
      }
    } else if (grid[row][col] === 1) {
      console.log('Obstacle, move back')
    } else {
      console.log('Game over, you died')
    }
  }
}
