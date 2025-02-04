// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array
// of strings.

// If there is no common prefix, return and empty string "".

const longestCommonPrefix = (strs) => {
  // create new string with current longest prefix (str[0])
  let shortest = strs[0]
  let count = strs[0].length

  for (let str of strs) {
    if (str.length < count) {
      shortest = str
      count = str.length
    }
  }

  let longest = shortest.split('')
  // loop through array
  for (let str of strs) {
    // loop through each string
    for (let i = 0; i < str.length; i++) {
      // compare each each char in the string and compare it to the current longest
      // prefix
      if (str[i] !== longest[i]) {
        // if char in string does not match longest prefix
        // splice it from the current longest prefix
        longest.splice(i, longest.length)
      }
    }
  }

  return longest.join('')
}

// console.log(longestCommonPrefix(['flower', 'flow', 'flight'])) // => 'fl'
// console.log(longestCommonPrefix(['dog', 'racecar', 'car'])) // => ''
console.log(longestCommonPrefix(['dog', 'donut', 'doghouse'])) // => 'do'
