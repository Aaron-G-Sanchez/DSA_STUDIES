const { Node } = require('./util/node.js')

// Tree sum

// Write a function, treeSum, that takes in the root of a binary tree that
// contains numbers values. The function should return the total sum of all the
// values in the tree.

const a = new Node(3)
const b = new Node(11)
const c = new Node(4)
const d = new Node(4)
const e = new Node(-2)
const f = new Node(1)

const empty = new Node(null)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

/** MY SOLUTION: Recursive */
//const treeSum = (root) => {
//  // Check if the root/node is empty
//  if (!root) return 0
//
//  // Store the subsequent calls of treeSum with the node children
//  const leftVal = treeSum(root.left)
//  const rightVal = treeSum(root.right)
//  // return root.val + subsequent call variables
//  return root.val + leftVal + rightVal
//}

// n = number of nodes
// Time = O(n^2) The extra recursive vist back up the tree?
// Space = O(n) = The call stack

/** MY SOLUTION: Iterative */
const treeSum = (root) => {
  // Check if root is empty
  if (!root) return 0
  // Create running sum variable and stack to track nodes to visit
  let sum = 0
  const stack = [root]

  // Loop through stack while it has items
  while (stack.length > 0) {
    // Get the current node and add its value to the running sum
    const current = stack.pop()
    sum += current.val

    // Check if the current node has children and add them to the stack
    if (current.right) stack.push(current.right)
    if (current.left) stack.push(current.left)
  }
  // return the running sum
  return sum
}

console.log(treeSum(a)) // => 21
console.log(treeSum(empty)) // => 0
