// 1941. Check if All Characters Have an Equal Number of Occurrences

// Given a string s, return true if s is a good string, or false otherwise.

//A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

const areOccurrencesEqual = (s) => {
  // create a hashmap to store seen characters {string: count}
  let map = {}

  // loop through s
  for (let char of s) {
    // check if the char has been added to the map
    // if not, add the char to the map
    if (!map[char]) {
      map[char] = 0
    }
    // if yes increment the count
    map[char]++
  }

  // initialize a count variable to hold our occurrences
  let count = map[Object.keys(map)[0]]

  // and check if the value of key is equal to count
  for (let key of Object.keys(map)) {
    if (map[key] !== count) return false
  }
  return true
}

//let s = 'ababcc' // true
let s = 'aaabb' // false

console.log(areOccurrencesEqual(s))
