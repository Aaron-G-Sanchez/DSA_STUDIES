// 334. Increasing Triplet Subsequence

// Given an integer array nums, return true if there exists a triple of indices (i, j, k)
// such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

/**
 * @param nums int[]
 * @returns boolean
 */
const increasingTriplet = (nums) => {
  // find the max value of the array
  // and temporarily save it as the min and mid values
  let min = Math.max(...nums)
  let mid = min

  // loop through nums and evaluate each num
  for (let num of nums) {
    // check if num is smaller than our min placeholder
    if (num <= min) {
      min = num
      // check if num is smaller than our mid placeholder
    } else if (num <= mid) {
      mid = num
      // retrun true because we found our final value completing the triplet
    } else {
      return true
    }
  }
  // if every number has been checked then we can return false because
  // we did not complete a triplet
  return false
}

let arr = [2, 1, 5, 0, 4, 6]

console.log(increasingTriplet(arr))

// N = nums.length
// Time = O(n)
// Space = O(1)
