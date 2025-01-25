// 977. Squares of a Sorted Array

// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.

const sortedSquares = (nums) => {
  // Create result array equal to the length of nums
  let result = new Array(nums.length).fill(0)

  // Set two pointers on the outer edges of nums
  let left = 0
  let right = nums.length - 1

  let currentFill = nums.length - 1

  while (currentFill >= 0) {
    let leftSquare = nums[left] * nums[left]
    let rightSquare = nums[right] * nums[right]

    // Evaluate which pointers square is larger
    if (rightSquare > leftSquare) {
      // Value at right pointer is greater
      result[currentFill] = rightSquare

      right--
      currentFill--
    } else if (rightSquare < leftSquare) {
      // Value at left pointer is greater
      result[currentFill] = leftSquare

      left++
      currentFill--
    } else if (leftSquare === rightSquare && currentFill > 0) {
      // Values are equal
      result[currentFill] = rightSquare
      right--
      currentFill--

      result[currentFill] = leftSquare
      left++
      currentFill--
    } else {
      result[currentFill] = rightSquare
      currentFill--
    }
    // Insert that number at the end of the result array
    // Move the pointer that was pushed inwards (towards the middle of nums)
  }
  return result
}

// const sortedArr = sortedSquares([-4, -1, 0, 3, 10])
const sortedArr = sortedSquares([-7, -3, 2, 3, 11])

console.log(sortedArr)
