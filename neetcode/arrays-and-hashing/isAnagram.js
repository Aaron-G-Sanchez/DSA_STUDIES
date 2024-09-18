// Given two strings, return true if
// string t is an anagram of string s and false otherwise

const isAnagram = (s, t) => {
  let map = {}
  // Create map of first string
  // with letters:values
  for (let char of s) {
    if (!map[char]) {
      map[char] = 0
    }
    map[char]++
  }

  // check second string against
  // map of first string
  for (let char of t) {
    if (!map[char]) {
      return false
    }
    map[char]--
  }

  for (let key in map) {
    if (map[key]) {
      return false
    }
  }

  return true
}

// console.log(isAnagram('anagram', 'nagaram')) // true
// console.log(isAnagram('anagramp', 'nagaram')) // false
console.log(isAnagram('cat', 'cta')) // true

// n = s.length m = t.length
// Time: O(n + m)(?) linear
// Space: O(1) constant? leetcode says constant
