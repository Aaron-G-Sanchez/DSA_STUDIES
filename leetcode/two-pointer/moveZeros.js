// 283. Move Zeros

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

const moveZeros = (nums) => {
  // initialize pointers to track and swap arr positions
  let i = 0
  let j = 0

  // loop through nums while j < nums.length
  while (j <= nums.length - 1) {
    if (nums.length === 1) return
    // evaluate the numbers at i and j
    // increment the pointers to find the necessary values
    // i looks for 0
    // j looks for ints
    while (nums[i] !== 0 && i < nums.length) {
      i++
    }
    while (nums[j] === 0 && j < nums.length) {
      j++
    }
    // swap the ints being pointed to
    if (i < j && j < nums.length) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
    }

    // increment the pointers
    i++
    j++
    if (i > j) {
      ;[i, j] = [j, i]
    }
  }
}

// let numArr = [
//   73348, 66106, -85359, 53996, 18849, -6590, -53381, -86613, -41065, 83457, 0
// ]

let numArr = [2, 1]

moveZeros(numArr)

console.log(numArr)

// n = nums.length
// Time = O(n)
// Space = O(1)
