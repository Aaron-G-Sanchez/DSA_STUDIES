// 557. Reverse Words in a String III

// Given a string, s, reverse the order of the characters
// in each word within a sentence while still preserving whitespace
// and initial word order.

const reverseWords = (s) => {
  // Split s into an array of words
  let wordArr = s.split(' ')

  // Loop through the array of words
  for (let idx in wordArr) {
    // Split each word into an array of characters
    let charArr = wordArr[idx].split('')
    // initialize a pointer that pointes to the start of the word (left)
    // initialize a pointer that points to the end of the word (right)
    let left = 0
    let right = charArr.length - 1

    // while left is less than right
    while (left < right) {
      // flip the characters at left and right
      ;[charArr[left], charArr[right]] = [charArr[right], charArr[left]]

      left++
      right--
    }
    // reasign the current word with the newly reversed word
    wordArr[idx] = charArr.join('')
  }

  return wordArr.join(' ')
}

console.log(reverseWords("Let's take LeetCode contest")) // "s'teL ekat edoCteeL tsetnoc"
