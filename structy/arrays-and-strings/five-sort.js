// five sort
// Write a function, fiveSort, that takes in an array of numbers as an argument.
// The function should rearrange elements of the array such that all 5s appear at the end.
// Your function should perform this operation in-place by mutating the original array.
// The function should return the array.

// Elements that are not 5 can appear in any order in the output,
// as long as all 5s are at the end of the array.

const fiveSort = (nums) => {
  let fiveCount = 0
  // collect the count of 5s
  // this will be used to tell when all
  // 5s have been pushed to the end
  for (let val of nums) {
    if (val === 5) {
      fiveCount++
    }
  }
  // loopthrough the array
  // while loop to loop to the end
  let i = 0
  let target = nums.length - fiveCount
  while (i < target) {
    if (nums[i] === 5) {
      // if val  in array = 5
      // splice the number from the array
      const val = nums.splice(i, 1)
      // push the val to the end
      nums.push(val[0])
      // subtract one from j to start and the index
      // was just mutated
      i--
    } else {
      // else i++
      i++
    }
  }
  return nums
}

// My Guesses
// n = nums.length?
// m = loops through target
// Time: O(n + m)
// Space: O(n)
