// 3. Longest Substring without repeating characters.

// Given a string s, find the length of the longest substring without duplicate characters.

// MY BRUTE FORCE SOLUTION
const lengthOfLongestSubstring = (s) => {
  // Collect letters seen
  const seenChars = new Set()
  // Create a count to track length of substring
  let count = 1
  let longestCount = 0

  // Loop through s and find the longest substring
  for (let idx in s) {
    seenChars.add(s[idx])
    let i = parseInt(idx) + 1
    while (!seenChars.has(s[i])) {
      if (s[i] != undefined) {
        seenChars.add(s[i])
        count++
        i++
      } else {
        break
      }
    }
    if (count > longestCount) {
      longestCount = count
    }
    count = 1
    seenChars.clear()
  }

  return longestCount
}

const s1 = 'abcabcbb' // => 3
const s2 = 'bbbbb' // => 1
const s3 = 'pwwkew' // => 3

console.log(lengthOfLongestSubstring(s3))
