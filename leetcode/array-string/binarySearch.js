// 704. Binary Search

// Given an array of integers nums which is sorted in ascending order,
// and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

const search = (nums, target) => {
  // Set pointer to start and end.
  let start = 0
  let end = nums.length - 1

  // While start is less than or equal to end.
  while (start <= end) {
    // Calculate the mid point in the array
    let mid = Math.floor((start + end) / 2)

    // evaluate the target to the mid point.
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      // Move the start pointer to the value after the mid point
      // because we know that target is greater than the mid point.
      start = mid + 1
    } else {
      // move the end pointer to the value before the mid point because
      // we know the target is less than the mid point.
      end = mid - 1
    }
  }

  return -1
}

// console.log(search([-1, 0, 3, 5, 9, 12], 9)) // 4
console.log(search([-1, 0, 3, 5, 9, 12], 0)) // 1
// console.log(search([-1, 0, 3, 5, 9, 12], 2)) // -1

// n = nums.length
// Time: O(log n)
// Space: O(1)
