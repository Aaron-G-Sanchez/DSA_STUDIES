const arrayDiff = (a, b) => {
  // base case
  if ((b.len = 0)) return a

  // loop through array a
  const len = a.length
  for (let i = 0; i < len; i++) {
    // if  current iteration is equal to b
    // remove it from the array  and move back in the loop
    if (a[i] === b[0]) {
      a.splice(i, 1)
      i--
    }
  }

  // if length of b is greater than 1
  if (b.length > 1) {
    // remove the first item from the array and start again
    b.shift()
    return arrayDiff(a, b)
  }
  // return a
  return a
}

console.log(arrayDiff([1, 2], [1])) // [2]
console.log(arrayDiff([1, 2, 2], [1])) // [2,2]
console.log(arrayDiff([1, 2, 2], [2])) // [1]
console.log(arrayDiff([1, 2, 3], [1, 2])) // [3]

// Time: O(a*b)
// Space: O(n)

// Optimal solution
// const arrayDiff = (a, b) => {
//  b = new Set(b)
//  return a.filter(val => !b.has(val))
// }
