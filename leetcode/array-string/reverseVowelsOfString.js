// 345. Reverse Vowels of a String

// Given a string `s`, reverse only all the vowels in the string and return it.

// The vowels are `a`,`e`,`i`,`o`, and `u` and they can appear in both lowercase
// and upper cases, more than once.

const reverseVowels = (str) => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  let arr = str.split('')
  let collector = []
  // Loop through the str array and check for vowels
  for (let i in arr) {
    if (vowels.has(arr[i])) {
      collector.push(arr[i])
      arr[i] = 1
    }
  }

  for (let i in arr) {
    if (arr[i] === 1) {
      let vowel = collector.pop()
      arr[i] = vowel
    }
  }

  return arr.join('')

  // loop back through the str and when the number is seen
  // pull from the back of the collection
}

// console.log(reverseVowels('IceCreAm')) // -> AceCreIm
console.log(reverseVowels('leetcode')) // => leotcede
