// 27. Remove Element

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// - Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// - Return k.

/** WALK THROUGH
 *
 *
 *
 */

// let testCase = [3, 2, 2, 3] // val = 3 | testCase = [2,2,*,*] k = 2
// let testCase = [1] // val = 1 | testCase = [1] k = 0
let testCase = [0, 1, 2, 2, 3, 0, 4, 2] // val = 2 | testCase = [0,1,4,0,3,_,_,_] k = 5

const removeElement = (nums, val) => {
  let count = 0
  // loop through nums and look for num = to val
  for (let i = 0; i < nums.length - count; i++) {
    if (nums[i] === val) {
      count++
      let target = nums.splice(i, 1)
      nums.push(target[0])
      i--
    }
  }
  // if num = val move it to the end of the array
  // count number of times nums have been moved and subtract that from
  // amount of times loop runs

  return nums.length - count
}

console.log(removeElement(testCase, 2)) // => 2
console.log(testCase)

// n = nums.length
// Time = O(n)
// Space = O(1)
