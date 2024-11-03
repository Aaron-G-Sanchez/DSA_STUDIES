// 347. Top K Frequent Elements

// Given an integer array nums and an integer k,
// return the k most frequent elements. You may return the answer in any order.

// My brute force solution
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

  // find the k most occurring unique num
  // eg. if k = 1, find the single most occurring number.
  // loop though count object k times

  for (let i = 0; i < k; i++) {
    let max = Object.keys(count)[0]

    for (let key in count) {
      if (count[key] > count[max]) {
        max = key
      }
    }
    res.push(parseInt(max))
    count[max] = 0
  }

  // find the largest value and push to array
  // remove the value just pushed
  return res
}

// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)) // -> [1,2]
// console.log(topKFrequent([3, 0, 1, 0], 1)) // -> [0]
// console.log(topKFrequent([1, 2], 2)) // -> [1,2]
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)) // -> [2,-1]
