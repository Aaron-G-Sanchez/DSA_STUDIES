// compress

// Write a function, compress, that takes in a string as an argument.
// The function should return a compressed version of the string where consecutive occurrences
// of the same characters are compressed into the number of occurrences followed by the character.
// Single character occurrences should not be changed.

// MY SOLUTION
const compress = (s) => {
  // initialize array to hold groupings
  // initialize a pointers to track repeated strings
  let newS = []
  let i = 0
  let j = 0
  let currentVal = s[0]
  // loop through string
  while (j <= s.length) {
    // collect 'currentVal' char
    // if char is different than the 'currentVal'
    if (s[j] !== currentVal || j === s.length) {
      //  check the difference in the pointers and add that value to the currentVal
      // and push it into the array
      // set the pointer at the start equal to to the pointer that is at the new value
      const count = j - i
      if (count === 1) {
        newS.push(currentVal)
      } else {
        newS.push(`${count}${currentVal}`)
      }
      i = j
      currentVal = s[j]
      j++
    } else {
      j++
    }
  }

  return newS.join('')
  // at the end return joined array
}

console.log(compress('aabbb')) // '2a3b'
console.log(compress('ssssbbz')) // 4s2bz

// My guesses
// n = s.length
// Time: O(n)
// space: O(n)
