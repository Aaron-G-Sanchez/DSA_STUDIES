// 28. Find the Index of the First Occurrence in a string

// Given two strings needle and haystack, return the index of the
// first occurrence of needle in haystack, or -1 if neelde is not
// part of haystack.

const findFirstOccurrence = (haystack, needle) => {
  // initialize a pointer at the start of needle
  let needleIdx = 0
  let foundIdx = null
  // loop through haystack
  for (let i in haystack) {
    // when char of haystack === start of needle
    // check for equality
    if (haystack[i] === needle[needleIdx]) {
      console.log('comp:', haystack[i], needle[needleIdx])
      if (!foundIdx) {
        // set a pointer to the char in haystack and move along needle and haystack to
        foundIdx = i
      }
      // move to the next char in needle
      needleIdx++
    } else {
      // if char of haystack != needle[needleIdx]
      // set the index pointer tracking needle back to 0 and keep moving through haystack
      needleIdx = 0
      foundIdx = null
    }

    // if we get to the end of needle, then return the pointer set at the char in
    // haystack
    if (needleIdx === needle.length) return foundIdx
  }
  return -1
}

// console.log(findFirstOccurrence('sadbutsad', 'sad')) // 0
// console.log(findFirstOccurrence('leetcode', 'leeto')) // -1
console.log(findFirstOccurrence('mississippi', 'issip')) // 4

// n = haystack.length
// Time = O(n)
// Space = O(1)
