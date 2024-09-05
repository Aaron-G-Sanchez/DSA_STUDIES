// uncompress

// Write a function that takes in a string argument and return an 'uncompressed'
// version of the string where each 'char' of a group is repeated 'number' times consecutively.
// You may assume that the input string is well-formed according to the previously mentioned pattern.

// MY WORK
// const uncompress = (s) => {
//   let currentVal = ''
//   let newS = ''
//   // loop through s
//   for (let i = 0; i < s.length; i++) {
//     // collect count of how many times char should be repeated
//     if (parseInt(s[i])) {
//       currentVal += s[i]
//     } else {
//       // if value returns NaN we found our char
//       // add the char repeating `currentCount` times to the newS
//       newS += s[i].repeat(parseInt(currentVal))
//       // reset the currentVal
//       currentVal = ''
//     }
//   }
//   return newS
// }
// // Works decent but += concatenation is O(n) runtime.

// console.log(uncompress('2c3a1t')) // ccaaat
// console.log(uncompress('4s2b')) // ssssbb
// console.log(uncompress('2p1o5p')) // ppoppppp

// COMPLEXITY GUESSES
// n = s.length
// Time = O(n)
// Space = O(1)

// Re-worked using two pointers
const betterUncompress = (s) => {
  const nums = '0123456789'
  const newS = []
  let i = 0
  let j = 0
  while (j < s.length) {
    if (nums.includes(s[j])) {
      j++
    } else {
      const num = Number(s.slice(i, j))
      for (let count = 0; count < num; count++) {
        newS.push(s[j])
      }
      j++
      i = j
    }
  }
  return newS.join('')
}

console.log(betterUncompress('2c3a1t')) // ccaaat
console.log(betterUncompress('4s2b')) // ssssbb
console.log(betterUncompress('2p1o5p')) // ppoppppp

// WALKTHROUGH SOLUTION
// const uncompress = (s) => {
//   let result = []
//   const numbers = '0123456789'
//   let i = 0
//   let j = 0
//   while (j < s.length) {
//     if (numbers.includes(s[j])) {
//       j += 1
//     } else {
//       const num = Number(s.slice(i, j))
//       for (let count = 0; count < num; count += 1) {
//         result.push(s[j])
//       }
//       j += 1
//       i = j
//     }
//   }
//   return result.join('')
//}
