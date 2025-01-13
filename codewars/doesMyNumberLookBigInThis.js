// Does my Number Look Big in This

// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits,
// each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For Example:

// For example, take 153 (3 digits), which is narcissistic:
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

// This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

const narcissisticNumber = (value) => {
  // initialize a running sum
  let sum = 0
  // convert value into iterable datatype
  let iterableValue = value.toString()
  // loop through value
  for (let val of iterableValue) {
    // get the power of the current number in val and raise it to the length of value
    let power = Math.pow(val, iterableValue.length)
    // add power to a running sum
    sum += power
  }
  // check if sum === value
  return sum === value
}

console.log(narcissisticNumber(153)) // true

// N = length of value
// Time: O(n)
// Space: O(1)
