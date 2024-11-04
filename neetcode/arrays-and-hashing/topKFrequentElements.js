// 347. Top K Frequent Elements

// Given an integer array nums and an integer k,
// return the k most frequent elements. You may return the answer in any order.

const topKFrequent = (nums, k) => {
  let res = []
  // get count of each numbers occurrence
  let count = {}

  for (let num of nums) {
    if (!count[num]) {
      count[num] = 0
    }
    count[num]++
  }

  // Create an array equal to the length of nums
  let bucket = new Array(nums.length).fill([])
  // loop through count object
  for (let key in count) {
    // push each key/num into the index that matches their frequency
    // of the bucket array
    let freq = count[key]
    bucket[freq] = [...bucket[freq], parseInt(key)]
  }

  // loop backwards through array and pick K elements
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i].length >= 1 && k > 0) {
      for (let num of bucket[i]) {
        res.push(num)
        k--
      }
    }
  }

  return res
}

// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)) // -> [1,2]
// console.log(topKFrequent([3, 0, 1, 0], 1)) // -> [0]
// console.log(topKFrequent([1, 2], 2)) // -> [1,2]
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)) // -> [2,-1]
