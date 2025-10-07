// Bit Counting

// Write a function that takes an integer as input, and returns the number
// of bits that are equal to one in the binary representation of that number.

// You can guarantee the input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function
// should return 5 in this case.

const countBits = (n) => {
  let count = 0

  const bitRep = n.toString(2)

  for (let bit of bitRep) {
    if (bit === '1') count++
  }

  return count
}

// console.log(countBits(0)) // => 0
// console.log(countBits(4)) // => 1
console.log(countBits(7)) // => 3
