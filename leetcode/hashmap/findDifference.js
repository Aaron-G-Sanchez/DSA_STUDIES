// 2215. Find the Difference of Two Arrays

// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

const findDifference = (nums1, nums2) => {
  // Create a hashmap for both arrays
  const hashOne = {}
  const hashTwo = {}

  // Create return arrays
  const answerOne = []
  const answerTwo = []

  // Loop through first nums arr and collect values
  for (const num of nums1) {
    if (!hashOne[num]) {
      hashOne[num] = true
    }
  }

  // Loop through second nums arr and collect values
  // AND check against valus in nums1
  for (const num of nums2) {
    if (!hashTwo[num]) {
      hashTwo[num] = true
    }

    // Push unique vals to the answer arrays
    const prevValues = new Set()
    if (!hashOne[num] && !prevValues.has(num)) {
      answerTwo.push(num)
      prevValues.add(num)
    }
  }

  // Loop through the keys in hashOne
  for (const key in hashOne) {
    if (!hashTwo[key]) {
      const val = parseInt(key)
      answerOne.push(val)
    }
  }

  return [answerOne, answerTwo]
}

const nums1 = [1, 2, 3]
const nums2 = [2, 4, 6]

console.log(findDifference(nums1, nums2)) // [[1,3], [4,6]]
