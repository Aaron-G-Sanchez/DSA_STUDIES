const mostFrequentChar = (s) => {
  // collect count of all characters in the string
  const count = {}
  for (char of s) {
    if (!count[char]) {
      count[char] = 0
    }
    count[char]++
  }
  // initialize the comparison values
  let mostFrequent = 0
  let val
  // loop through string and check its occurrences to the current max
  for (char of s) {
    if (count[char] > mostFrequent) {
      mostFrequent = count[char]
      val = char
    }
  }

  // return the char
  return val
}

// Time and Space guesses
// n = s.length
// Time: O(n)
// Space: O(n)

// Walkthrough Solution
// const mostFrequentChar = (s) => {
//   // collect count of all characters in the string
//   const count = {}
//   for (char of s) {
//     if (!count[char]) {
//       count[char] = 0
//     }
//     count[char] += 1
//   }
//   // initialize the comparison values
//   let mostFrequent = null
//   // loop through string and check its occurrences to the current max
//   for (char of s) {
//     if (mostFrequent === null || count[char] > count[mostFrequent]) {
//       mostFrequent = char
//     }
//   }

//   // return the char
//   return mostFrequent
// }

// Time: O(n)
// Space: O(n)
