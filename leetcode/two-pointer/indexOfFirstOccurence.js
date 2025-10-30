// 28. Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index of the first occurrence
//  of needle in haystack, or -1 if needle is not part of haystack.

const firstOccurrence = (haystack, needle) => {
  let index = -1

  let hPointer = 0
  let nPointer = 0

  while (hPointer < haystack.length) {
    if (haystack[hPointer] === needle[nPointer]) {
      index = hPointer
      let k = hPointer

      while (nPointer < needle.length) {
        if (haystack[k] === needle[nPointer]) {
          k++
        } else {
          index = -1
          nPointer = 0
          break
        }
        nPointer++
      }
    }

    hPointer++
  }

  return index
}

// console.log(firstOccurrence('sadbsad', 'sad')) // 0
// console.log(firstOccurrence('aaa', 'aaaa')) // -1
console.log(firstOccurrence('mississippi', 'issip')) // 4
