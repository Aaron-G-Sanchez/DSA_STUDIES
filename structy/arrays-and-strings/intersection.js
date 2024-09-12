const intersection = (a, b) => {
  // determine the longest set and shortest array
  let longest, shortest
  if (a.length > b.length) {
    longest = a
    shortest = b
  } else {
    longest = b
    shortest = a
  }
  // make set of shortest array for O(1) lookup time
  const set = new Set(shortest)

  let similar = []

  // loop through the longest set
  for (const val of longest) {
    // check if opposite set contains the same number
    // if yes push the number into a new arrays
    if (set.has(val)) {
      similar.push(val)
    }
    // if no continue
  }
  similar.sort()
  return similar
}

console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])) // [2,6]
console.log(intersection([2, 4, 6], [4, 2])) // [2,4]

// My Guesses
// One is the time it takes to CREATE the
// set (looping through and making the set)
// the other is the time it takes to loop through the original array
// and check the set
// n = set.length
// m = longest.length
// Time: O(n + m)
// Space: O(n)
