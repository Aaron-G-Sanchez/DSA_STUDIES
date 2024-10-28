// Sum Numbers Recursive 10/28

// My attempt
// const sumNumbersRecursive = (numbers) => {
//   if (numbers.length === 0) return 0
//   if (numbers.length === 1) return numbers[0]

//   // Remove the first index
//   const num = numbers.shift()
//   // Add it to the number at index 2
//   numbers[0] = numbers[0] + num
//   // call sNR with new array values
//   return sumNumbersRecursive(numbers)
// }

// console.log(sumNumbersRecursive([5, 2, 9, 10])) // -> 26
// console.log(sumNumbersRecursive([1, -1, 1, -1, 1, -1, 1])) // -> 1
// console.log(sumNumbersRecursive([])) // -> 0

// My guess
// N = numbers.length
// Time = ?
// Space = O(1)

// Optimal solution
const sumNumbersRecursive = (numbers) => {
  if (numbers.length === 0) return 0

  return numbers[0] + sumNumbersRecursive(numbers.slice(1))
}

// n = numbers.length
// Time: O(n^2)
// Space: O(n^2)
