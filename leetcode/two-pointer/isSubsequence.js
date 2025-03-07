// 392. Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t,
// or false otherwise.

// A subsequence of a string is a new string that is formed from the original
// string by deleting some (can be none) of the characters without disturbing
// the relative positions of the remaing characters. (ie, "ace" is a subsequence
// of "abcde" while "aec" is not).

const isSubsequence = (s, t) => {
  if (s.length === 0 && t.length === 0) return true
  // initialize a pointer at the start of s (i)
  let i = 0
  // loop through t
  for (let idx in t) {
    // compare the letters being pointed to
    // if char in s is seen while looping through t
    // incremnt the s pointer (i)
    if (s[i] === t[idx]) {
      i++
    }
    // if we reach the end of s
    // return true
    if (i === s.length) return true
  }
  // default (because we looped through all of t)
  return false
}

//console.log(isSubsequence('abc', 'ahbgdc')) // true
//console.log(isSubsequence('axc', 'ahbgdc')) // false
console.log(isSubsequence('', '')) // true
