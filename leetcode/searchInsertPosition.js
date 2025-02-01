// 35. Search Insert Position

// Gien a sorted array of distinct integers and a target value,
// return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

const searchInsert = (nums, target) => {
  // Need to use a binary search algorithm.

  // Initialize two pointers to hold the start and endpoint
  let start = 0
  let end = nums.length - 1
  let mid
  // Loop until the start and end points are pointing to each other
  while (start <= end) {
    // Find the mid point (start + end / 2)
    mid = Math.floor((start + end) / 2)

    // Evaluate if the target is less than or greater than the target
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  // evaluate where the insert position should be
  if (mid === start) {
    return mid
  } else {
    return ++mid
  }
}

const testArr = [1, 3, 5, 6]
console.log(searchInsert(testArr, 0))

// N = nums.length
// Time = O(log n) // Using binary search
// Space = O(1)
