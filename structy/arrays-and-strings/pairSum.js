// pair sum

// Write a function, pairSum, that takes in an array and a target sum as arguments.
// The function should return an array containing a pair of indices whose elements
// sum to the given target.

// The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair that sums to the target.

const pairSum = (numbers, targetSum) => {
  if (numbers.length === 2) {
    return [0, 1]
  }
  // Create a lookup set for easy lookup
  const lookup = new Set(numbers)
  // Loop through array
  for (let i = 0; i < numbers.length; i++) {
    // subtract array items from targetSum
    const target = targetSum - numbers[i]
    // check if the value is in the set
    // if yes
    if (lookup.has(target) && target !== numbers[i]) {
      // return an array with the indices
      return [i, numbers.indexOf(target)]
    }
    // if no
    // move to the next value
  }
}

// console.log(pairSum([4, 7, 9, 2, 5, 1], 3)) // [3, 5]
// console.log(pairSum([1, 6, 7, 2], 13)) // [1,2]

// My guesses
// n = numbers.length
// Time: O(n)
// Space: O(n)

// Better solution

const betterPairSum = (numbers, targetSum) => {
  let map = {}

  for (let i = 0; i < numbers.length; i++) {
    const complement = targetSum - numbers[i]
    if (complement in map) {
      return [map[complement], i]
    }
    map[numbers[i]] = i
  }
}

console.log(betterPairSum([3, 2, 5, 4, 1], 8)) // [0,2]
console.log(betterPairSum([4, 7, 9, 2, 5, 1], 3)) // [3,5]
console.log(betterPairSum([1, 6, 7, 2], 13)) // [1,2]
console.log(betterPairSum([9, 9], 18)) // [0,1]
console.log(betterPairSum([6, 4, 2, 8], 12)) // [1,3]

// n = numbers.length
// Time = O(n)
// Space = O(n)
