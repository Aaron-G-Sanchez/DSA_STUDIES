// Take a Ten Minute Walk

// Given an array of directions,
// determine if the walk will take exactly 10 mins

const isValidWalk = (walk) => {
  // create counts for north-south and east-west
  let x = 0
  let y = 0
  // loop through directions of walk
  for (let direction of walk) {
    // if directions give north ++ the count
    // and south -- the count

    // if directions give east ++ the count
    // and west -- the count
    switch (direction) {
      case 'n':
        y++
        break
      case 's':
        y--
        break
      case 'e':
        x++
        break
      case 'w':
        x--
        break
      default:
        throw new Error('wtf')
    }
  }

  // if walk length == 10 and both counts === 0 return true
  return walk.length === 10 && x === 0 && y === 0
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])) // => true
// console.log(isValidWalk(['n'])) // => false
// console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])) // => false
