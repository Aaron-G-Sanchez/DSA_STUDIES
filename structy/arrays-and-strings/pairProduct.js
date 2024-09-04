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
