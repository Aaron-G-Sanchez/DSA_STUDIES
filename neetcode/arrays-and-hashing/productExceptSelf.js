// 238. Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

const productExceptSelf = (nums) => {
  const n = nums.length
  const res = new Array(n)
  const left = new Array(n)
  const right = new Array(n)

  left[0] = 1
  right[n - 1] = 1

  for (let i = 1; i < n; i++) {
    left[i] = nums[i - 1] * left[i - 1]
  }
  for (let i = n - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1]
  }
  for (let i = 0; i < n; i++) {
    res[i] = left[i] * right[i]
  }

  return res
}

console.log(productExceptSelf([1, 2, 3, 4])) // -> [24,12,8,6]
// console.log(productExceptSelf([-1, 1, 0, -3, 3])) // -> [0,0,9,0,0]
