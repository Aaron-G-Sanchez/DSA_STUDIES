// Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, and returns the same string,
// but with all words that have five or more letters reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

const spinWords = (string) => {
  // split strings into an array of each individual word separated by a space
  const words = string.split(' ')

  // Loop through the string
  for (let i = 0; i < words.length; i++) {
    // Check if string index (word) is 5 or more characters
    if (words[i].length >= 5) {
      // yes; Split the string into an array of each individual character
      const word = words[i].split('')
      // create two pointers on opposite ends
      let l = 0
      let r = word.length - 1
      while (l < r) {
        // flip the characters at the two pointers
        ;[word[l], word[r]] = [word[r], word[l]]
        // move the pointers inwards
        l++
        r--
      }
      // join the array and save it in the proper index
      words[i] = word.join('')
    }
  }

  // return the modified array
  return words.join(' ')
}

console.log(spinWords('welcome')) // emoclew
console.log(spinWords('This is a test')) // This is a test
console.log(spinWords('This is another test')) // This is rehtona test
