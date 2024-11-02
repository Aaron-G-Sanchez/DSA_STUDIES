// 49. Group Anagrams

// Given an array of strings strs,
// group the anagrams together. You can return the answer in any order.

const groupAnagrams = (strs) => {
  // create count object
  let res = {}

  // loop through the strs array
  for (let word of strs) {
    // for each word, create a count array with 26 idx to
    // represent each character of the alphabet
    const count = new Array(26).fill(0)
    // loop through each character of a word
    for (let char of word) {
      // Increment the count at the index of each character
      count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    // turn the count into something that can be easily compared
    const key = count.join(',')

    // check if the count exists in the count object
    if (!res[key]) {
      // initialize the value of each key
      res[key] = []
    }
    // push the word into the respective key
    res[key].push(word)
  }

  return Object.values(res)
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
// -> [["bat"],["nat","tan"],["ate","eat","tea"]]
