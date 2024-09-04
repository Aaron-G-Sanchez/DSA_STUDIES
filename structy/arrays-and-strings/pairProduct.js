// pairProduct
// Write a function, pairProduct, that takes in an array and a target product as arguments.
// The function should return an array containing a pair of indices whose elements
// multiply to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair whose product is the target.

const pairProduct = (numbers, targetProduct) => {
  const previousNums = {}

  for (let i = 0; i < numbers.length; i++) {
    if (targetProduct % numbers[i] === 0) {
      const complement = targetProduct / numbers[i]
      if (previousNums[complement]) {
        return [previousNums[complement], i]
      }
    }

    previousNums[numbers[i]] = i
  }
}

console.log(pairProduct([3, 2, 5, 4, 1], 8)) // [1,3]
console.log(pairProduct([3, 2, 5, 4, 1], 10)) // [1,2]

// n = numbers.length
// Time: O(n)
// Space: O(n)
