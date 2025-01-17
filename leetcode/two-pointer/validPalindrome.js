// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

const isPalindrome = (s) => {
  let newS = []
  // Remove any non alphabetical character and lowercase any uppercase letter
  const reg = /^[a-z0-9]/i
  for (let char of s) {
    if (reg.test(char)) {
      newS.push(char.toLowerCase())
    }
  }

  // set pointer to start and end
  let start = 0
  let end = newS.length - 1

  while (start < end) {
    // while s[start] and s[end] are equal
    // move them towards the middle
    // return false if the two characters are not equal
    if (newS[start] !== newS[end]) return false
    start++
    end--
  }

  return true
}

// console.log(isPalindrome('A man, a plan, a canal: Panama')) // true
// console.log(isPalindrome('race a car')) // false
// console.log(isPalindrome('  ')) // true
// console.log(isPalindrome('0p')) // false
// console.log(isPalindrome('pp')) // true
// console.log(isPalindrome('a')) // true
console.log(isPalindrome('a.')) // true

// n = s.lenght
// Time = O(n) have to loop through entire string when checking for non alphanumeric characters
// Space = O(n) create new array
