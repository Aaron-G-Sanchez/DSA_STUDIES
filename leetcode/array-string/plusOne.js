// 66. Plus One

// You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

const plusOne = (digits) => {
  // Check if last digit in the array is < 9
  // if yes
  if (digits[digits.length - 1] < 9) {
    // add 1 to target (last digit) and return digits
    digits[digits.length - 1]++
    return digits
  }
  // if no
  // set pointer to last digit
  let i = digits.length - 1
  while (digits[i] === 9 && i >= 0) {
    // convert target to 0 and move pointer to the next digit
    digits[i] = 0
    i--
  }
  // when loop exits, evaluate if "1" prefix needs to be added
  if (digits[0] === 0) {
    return [1, ...digits]
  }
  {
    // or if number at pointer needs to be incremented.
    digits[i]++
    return digits
  }
}

// console.log(plusOne([1, 9, 2])) // [1, 9, 3]
// console.log(plusOne([9])) // [1, 0]
console.log(plusOne([2, 3, 9]))

// n = digits.length
// Time = O(n)
// Space = O(1)
