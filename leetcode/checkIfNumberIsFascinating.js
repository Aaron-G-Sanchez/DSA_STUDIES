// 2729. Check if the Number is Fascinating

// You are given an integer n that consists of exactly 3 digits.

// We call the number n fascinating if, after the following modification,
// the resulting number contains all the digits from 1 to 9 exactly once and does not contain any 0's:

// Concatenate n with the numbers 2 * n and 3 * n.
// Return true if n is fascinating, or false otherwise.

// Concatenating two numbers means joining them together. For example, the concatenation of 121 and 371 is 121371.

const isFascinating = (n) => {
  // create hash map
  let map = {}

  // do the math
  // concat and convert to string
  let fullNum = `${n}${n * 2}${n * 3}`
  // iterate over string
  for (let num of fullNum) {
    // if 0, return false
    if (num === '0') return false
    // add numbers from string to hash map
    if (!map[num]) {
      map[num] = 1
    } else {
      // if repeated num found, return false
      return false
    }
  }

  // check length of object keys
  // if length != 9 return false
  return Object.keys(map).length === 9
}

// console.log(isFascinating(192)) // true
console.log(isFascinating(100)) // false

// n = length of n + n*2 n*3
// Time = O(n)
// Space = O(n)
