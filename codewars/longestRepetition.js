// TODO: Finish this kata
// 10/9/24 Longest repetition

const longestRepetition = (str) => {
  // initialize count
  // initialize pointers
  // loop through str until j does not equal i
  // find count the index differences
  // if difference is > count, set the count
  // set i = j
  if (str === '') return ['', 0]

  let count = 0
  let char = ''
  let j = 0
  let i = 0

  while (j <= str.length) {
    if (str[i] !== str[j]) {
      let sum = j - i
      if (sum > count) {
        count = sum
        char = str[i]
      }
      i = j
    }
    j++
  }

  return [char, count]
}

// console.log(longestRepetition('aaaabb')) // ['a', 4 ]
// console.log(longestRepetition('bbbaaabaaaa')) // ['a', 4 ]
console.log(longestRepetition('cbdeuuu900')) // ['u', 3 ]

// n = s.length
// Time = O(n)
// Space = O(1)
