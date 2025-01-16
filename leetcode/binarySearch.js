// 704. Binary Search

// Given an array of integers nums which is sorted in ascending order,
// and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

const search = (nums, target) => {
  // Set pointer to start and end
  let start = 0
  let end = nums.length - 1
  // Calculate the mid point in the array

  // While there is more than 1 number in the array
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    // check if the target is greater than or less than OR equal to the mid point

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      start = mid + 1
    } else {
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
