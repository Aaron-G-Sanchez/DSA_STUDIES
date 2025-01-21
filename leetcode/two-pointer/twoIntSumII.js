// 167. Two Sum II - Input Array Is Sorted

//  Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
// find two numbers such that they add up to a specific target number.
// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2,
// added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

const twoSum = (numbers, target) => {
  // initialize two pointers
  // will use to iterate through the array
  let i = 0
  let j = 1

  // loop through the numbers
  while (i < numbers.length) {
    // Initialize two pointers
    let l = 0
    let r = numbers.length - 1

    while (l < r) {
      // Check if the two current index values equal the target
      const curSum = numbers[l] + numbers[r]

      // Move pointers accordingly
      // if current sum is greater than target
      // move the right pointer towards the middle
      if (curSum > target) {
        r--
        // if current sum is less than target
        // move the left pointer towards the middle
      } else if (curSum < target) {
        l++
        // target was found and we can return the indices but
        // 1 based (meaning instead of 0 being the first index we start with 1)
      } else {
        return [l + 1, r + 1]
      }
    }
    return []
  }
}

// console.log(twoSum([-5, -3, 0, 2, 4, 6, 8], 5)) // [2,7]
console.log(twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8)) // [4,5]

// N = Numbers.length
// Time: O(n)
// Space: O(1)
