// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const validParentheses = (str) => {
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  const openings = new Set(['(', '[', '{'])
  const closings = new Set([')', ']', '}'])

  const stack = []

  // Loop through string
  for (let char of str) {
    // If opening bracket is found
    if (openings.has(char)) {
      // push to the stack
      stack.push(char)
    }

    // when closing bracket is found, evaluate the stack to make sure next value to pop
    // is the proper opening bracket
    if (closings.has(char)) {
      let currentOpen = stack.pop()

      // Check that currentOpen variable is the pair of the current closing bracket
      if (pairs[char] !== currentOpen) {
        return false
      }
    }
  }
  // Check the stack to ensure there are no brackets left
  if (stack.length > 0) {
    return false
  }
  return true
}

// console.log(validParentheses('()')) // true
// console.log(validParentheses('(]')) // false
console.log(validParentheses('([])')) // true

// O = str.length
// Time = O(n)
// Space = O(n)
