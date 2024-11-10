// Persistent Bugger

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num until you reach a single digit.

const persistence = (num) => {
  // base case
  if (num < 10) return 0
  //   collect count of times multiplied
  let count = 0
  //   separate the num into individual numbers
  let newNum = num
  while (newNum >= 9) {
    let numSlice = newNum.toString().split('')
    let prod = 1
    for (let num of numSlice) {
      prod *= num
    }

    count++
    newNum = prod
  }
  return count
}

// console.log(persistence(39)) // => 3
// console.log(persistence(4)) // => 3
// console.log(persistence(25)) // => 3
console.log(persistence(999)) // => 4
