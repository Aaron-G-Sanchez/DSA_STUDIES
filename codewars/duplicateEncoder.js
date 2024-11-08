// Duplicate Encoder

// Given a string, return `(` when a character in the string appears only once
// and `)` when a character appears more than once

const duplicateEncoder = (str) => {
  let map = {}
  let res = []
  // loop through characters of string
  for (let char of str) {
    // Save count of each character
    if (!map[char.toLowerCase()]) {
      map[char.toLowerCase()] = 0
    }
    map[char.toLowerCase()]++
  }
  // loop through characters again
  for (let char of str) {
    // check if count of char is > 1
    if (map[char.toLowerCase()] > 1) {
      // if yes replace character with `)`
      res.push(')')
    } else {
      // if no replace character with '(`
      res.push('(')
    }
  }

  return res.join('')
}

// console.log(duplicateEncoder('din')) // => "((("
// console.log(duplicateEncoder('recede')) // => "()()()"
console.log(duplicateEncoder('Success')) // => ")())())"
// console.log(duplicateEncoder('(( @')) // => "))(("
