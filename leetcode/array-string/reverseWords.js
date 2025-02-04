// 151. Reverse words in a string

// A word is defined as a sequence of non-space characters.

// The words in `s` will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words.
// The returned string should only have a single space separating the words. Do not include any extra spaces.

const reverseWords = (s) => {
  let words = s.split(' ')

  let res = []

  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] != '') {
      res.push(words[i])
    }
  }

  return res.join(' ')
}

// console.log(reverseWords('the sky is blue')) // -> "blue is sky the"
// console.log(reverseWords('   hello world    ')) // -> "word hello"
console.log(reverseWords('a good   example')) // -> "example good a"
