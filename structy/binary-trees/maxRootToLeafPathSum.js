const { Node } = require('./util/node.js')

// Max Root to Leaf Path Sum

// Write a function, maxpathSum, that takes in the root of a binary tree that
// contains number values. The function should return the maximum sum of any
// root to leaf path within the tree.

// You may assume that the input tree is non-empty

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

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1
//

// MY SOLUTION: Recursive
const maxPathSum = (root) => {
  // Check if the root/node is empty
  if (!root) return -Infinity

  // Check if current node is a leaf
  if (!root.left && !root.right) return root.val

  // Add the root.val to the largest return of maxPathSum called on the left and
  // right children
  const leftVal = maxPathSum(root.left)
  const rightVal = maxPathSum(root.right)

  // return the new sum
  return root.val + Math.max(leftVal, rightVal)
}

// n = Number of Nodes
// Time = O(n)
// Space = O(n)

console.log(maxPathSum(a)) // => 18
