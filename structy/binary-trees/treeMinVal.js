const { Node } = require('./util/node.js')

// Tree Min Value

// Write a function, treeMinVal, that takes in the root of a binary tree that
// contains number values. The function should return the minimum value within
// the tree.

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

const treeMinValue = (root) => {
  // return the call of minValHelper called with root and current minVal(null
  // initiailly)
  return minValueHelper(root, null)
}

const minValueHelper = (node, minVal) => {
  // Check if node is empty
  // yes; return minVal
  if (!node) return minVal
  // Get the minVal by checking if minVal is null
  const min = minVal ? Math.min(node.val, minVal) : node.val

  // evaluate the returns of minValHelper to return the lowest value
  const leftMin = minValueHelper(node.left, min)
  const rightMin = minValueHelper(node.right, min)

  return leftMin < rightMin ? leftMin : rightMin
}

// n = number of nodes
// Time = O(n) visit each node once
// Space = O(n) use of the call stack

console.log(treeMinValue(a)) // => -2
