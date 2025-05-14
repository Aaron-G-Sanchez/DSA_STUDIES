// 26. Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order,
// remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same.
// Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
// - Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
// The remaining elements of nums are not important as well as the size of nums.

// - Return k.

// let testArr = [0, 1, 1, 2] // k = 3 | testArr = [0, 1, 2, '_']

/** WALKTHROUGH */
//  0  1  2  3
// [0, 1, 2,'_']
//        i  j

// let testArr = [1, 1, 2] // k = 2 | testArr = [1, 2, '_']
// let testArr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] // k = 5 | testArr = [0,1,2,3,4, '_', '_', '_', '_', '_']
let testArr = [0, 0, 1, 2, 2, 3] // [0,1,2,3,2,3]
// let testArr = [1, 1] // k = 1 | testArr = [1, '_']
// let testArr = [1, 2] // k = 2 | testArr = [1, 2]
// let testArr = [1, 2, 2] // k = 2 | testArr = [1, 2, "_"]

// const removeDuplicates = (nums) => {
//   if (nums.length === 1) {
//     return 1
//   }

//   let i = 0
//   let j = 1

//   // loop through the array while nums[i] !== '-'
//   while (nums[j] !== '_' && j < nums.length) {
//     // leave a pointer at the start of the array/sequence
//     // count the frequency of num appearances
//     while (nums[i] === nums[j]) {
//       j++
//     }

//     // if nums[i] !== nums[j] && i - j > 1
//     if (j - i > 1) {
//       let count = j - i
//       // slice from i to j to remove the duplicates
//       nums.splice(i + 1, count - 1)

//       // push _ m times to the end of the array where m is equal to the
//       // number of index sliced from the array
//       for (let i = 0; i < count - 1; i++) {
//         nums.push('_')
//       }

//       j = i + 1
//     }
//     i++
//     j++
//   }

//   let count = 0
//   // Loop through the num array and count the unique numbers
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== '_') {
//       count++
//     }
//   }
//   return count
// }

// MY SOLUTION: IMPROVED
const removeDuplicates = (nums) => {
  // Initialize two pointers that will hold our spot to update
  // and one to find the next unique number
  let i = 0
  let j = 1

  // Loop through the nums array
  while (j < nums.length) {
    // Check if numbs[i & j] are equal
    // no; increment our placeholder and update with the new unique number
    if (nums[i] !== nums[j]) {
      i++
      nums[i] = nums[j]
    }

    // increment our unique pointer
    j++
  }

  // return the index the placeholder is pointing to plus 1
  return i + 1
}

console.log(removeDuplicates(testArr))
console.log('modified nums array:', testArr)

// n = nums.length
// Time = O(n)
// Space = O(1)
