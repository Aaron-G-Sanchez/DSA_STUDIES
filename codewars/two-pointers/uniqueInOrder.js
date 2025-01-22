// Unique in order

// Implement the function unique_in_order which takes as argument a sequence and returns
// a list of items without any elements with the same value next to each other and preserving the original order of elements.

const uniqueInOrder = (iterable) => {
  // initialize return array
  let result = []
  // initialize two pointers: i & j
  let i = 0
  let j = 0
  // loop through string until we reach the end
  while (j <= iterable.length) {
    // if i and j are pointing to the different characters
    if (iterable[i] !== iterable[j]) {
      // push the character i is pointing to into the result
      result.push(iterable[i])
      // set i = j
      i = j
    }
    // move j until it points to the next val
    j++
  }
  return result
}

// console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A', 'B', 'C', 'D', 'A', 'B']
// console.log(uniqueInOrder('ABBCcAD')) // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])) // [1,2,3]
