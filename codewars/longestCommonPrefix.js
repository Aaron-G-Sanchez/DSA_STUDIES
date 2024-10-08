// 10/8/24 Longest common prefix.

// Write a function that will return the longest common prefix of an array of strings.

const longestCommonPrefix = (strArr) => {
  if (strArr.length === 0) return ''

  let shortest = strArr[0]
  for (let str of strArr) {
    if (str.length < shortest.length) {
      shortest = str
    }
  }

  let prefix = shortest.split('')

  for (let str of strArr) {
    for (let i = 0; i < str.length; i++) {
      // Check if the char at i in prefix !== str
      if (prefix[i] !== str[i]) {
        // remove that char from the prefix
        prefix.splice(i, 1)
      }
    }
  }

  return prefix.join('')
}

// const arrOne = ['car', 'cat', 'catapult']
// const arrTwo = ['aaa', 'aabbb', 'a', 'aab']
// const arrThree = ['cb', 'acb', 'b']
const arrFour = ['bcb', 'bcb', 'bcba']

// console.log(longestCommonPrefix(arrOne)) // 'ca'
// console.log(longestCommonPrefix(arrTwo)) // 'a'
// console.log(longestCommonPrefix(arrThree)) // ''
console.log(longestCommonPrefix(arrFour)) // bcb

// n = strArr.length m = strArr[i].length
// Time O(n * m^2)
// Space 0(1)
