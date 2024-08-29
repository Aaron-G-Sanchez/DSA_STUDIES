// My solution: 8/26/24
const anagrams = (s1, s2) => {
  let s1map = {}
  let s2map = {}

  // create a hash map for each string
  for (let char of s1) {
    if (s1map[char]) {
      s1map[char]++
    } else {
      s1map[char] = 1
    }
  }

  for (let char of s2) {
    if (s2map[char]) {
      s2map[char]++
    } else {
      s2map[char] = 1
    }
  }

  // Get the bigger map
  const map1Keys = Object.keys(s1map)
  const map2Keys = Object.keys(s2map)

  const keys = map1Keys.length > map2Keys.length ? map1Keys : map2Keys

  // Compare the values in each hash map
  // return the result
  for (const key of keys) {
    if (s1map[key] != s2map[key]) return false
  }
  return true
}

// THESE ARE MY GUESSES.
// TODO: Watch the walkthrough and solution (8/26/24)
// n = s1.length + s2.length
// Time: O(n)
// Space: O(n^4)

console.log(anagrams('restful', 'fluster')) // -> true);
console.log(anagrams('cats', 'tocs')) // -> false
console.log(anagrams('monkeyswrite', 'newyorktimes')) // -> true
console.log(anagrams('paper', 'reapa')) // -> false

// Walkthrough solution
// const anagrams = (s1, s2) => {
//   let count = {}

//   for (let char of s1) { // n
//     if (!count[char]) {
//       count[char] = 0
//     }
//     count[char] += 1
//   }

//   for (let char of s2) { // m
//     if (count[char]) {
//       count[char] -= 1
//     } else {
//       return false
//     }
//   }

//   for (let char in count) { // n
//     if (count[char] !== 0) {
//       return false
//     }
//   }

//   return true
// }

// Time: O(n + m)
// Space: O(n)
