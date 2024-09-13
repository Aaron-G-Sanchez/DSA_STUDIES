//contains duplicates
// Given an array, return bool on whether or not the array contains duplicates

const containsDuplicate = () => {
  const count = {}
  for (let num of nums) {
    if (count[num]) {
      return true
    }
    count[num] = 1
  }
  return false
}

// Analysis
// n = nums.length
// Time: O(n)
// Space: O(1)
