// 1. Two Sum
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = (arr, target) => {
  // Create a map to hold previously seen
  // numbers and their index
  let map = {}

  // Loop through the given array of numbers
  for (let idx in arr) {
    // Find diff of the current index and the target
    let diff = target - arr[idx]

    // Check if the diff is in the map
    if (map[diff] || map[diff] === 0) {
      // if yes, return the current index and the index of the value in the
      // the map
      return [map[diff], parseInt(idx)]
    }

    // if no, add the number to the map
    map[arr[idx]] = parseInt(idx)
  }
}

console.log(twoSum([2, 7, 11, 15], 9)) // [0,1]
