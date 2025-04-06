// 20. Valid Parenthesis

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const isValid = (s) => {
  // Create a "stack" to hold our current bracket
  let stack = []
  // Create a map to hold bracket pairs
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  // loop through s
  for (let char of s) {
    // check if current char of s is an opening bracket
    if (char in pairs) {
      // yes; push the char counterpart into the stack
      stack.push(pairs[char])
    } else {
      // no;
      // check if current char is equal to the last item in the stack
      if (char === stack[stack.length - 1]) {
        // yes; pop from the stack
        stack.pop()
      } else {
        return false
        // no; return false
      }
    }
  }
  // check if stack is empty
  return stack.length === 0
}

console.log(isValid('(){}[]')) // true
console.log(isValid('{)[]')) // false
