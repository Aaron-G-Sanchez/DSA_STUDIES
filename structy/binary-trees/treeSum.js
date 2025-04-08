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

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

/** MY SOLUTION: Recursive */
const treeSum = (root) => {
  // Check if the root/node is empty
  if (!root) return 0

  // Store the subsequent calls of treeSum with the node children
  const leftVal = treeSum(root.left)
  const rightVal = treeSum(root.right)
  // return root.val + subsequent call variables
  return root.val + leftVal + rightVal
}

// n = number of nodes
// Time = O(n^2) The extra recursive vist back up the tree?
// Space = O(n) = The call stack

console.log(treeSum(a)) // => 21
