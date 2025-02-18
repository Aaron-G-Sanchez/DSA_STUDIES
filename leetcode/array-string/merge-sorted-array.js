// 88. Merge Sorted Array

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

//The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
//To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
//and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

const merge = (nums1, m, nums2, n) => {
  // set pointers to the last number in nums2, the last index of nums1 and the
  // last integer in nums1
  let i = m - 1
  let j = n - 1
  let k = m + n - 1

  while (j >= 0) {
    // evaluate pointer to find the largest number in the current iteration
    if (nums1[i] > nums2[j]) {
      // if n pointer is greater than m
      // 1 - place n at the placeholder
      // 2 - decrement the n pointer and the placeholder
      nums1[k] = nums1[i]
      nums1[i] = 0
      i--
    } else {
      // if m pointer is greater than n
      // 1 - flip m with the placeholder
      // 2 = decrement m and the placeholder
      nums1[k] = nums2[j]
      j--
    }
    k--
  }
}

let nums1 = [1, 2, 3, 0, 0, 0]
let m = 3
let nums2 = [2, 5, 6]
let n = 3

merge(nums1, m, nums2, n)

console.log(nums1) // [1,2,2,3,5,6]
