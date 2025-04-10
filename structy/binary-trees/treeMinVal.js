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

// MY SOLUTION: Recursive
//const treeMinValue = (root) => {
//  // return the call of minValHelper called with root and current minVal(null
//  // initiailly)
//  return minValueHelper(root, null)
//}
//
//const minValueHelper = (node, minVal) => {
//  // Check if node is empty
//  // yes; return minVal
//  if (!node) return minVal
//  // Get the minVal by checking if minVal is null
//  const min = minVal ? Math.min(node.val, minVal) : node.val
//
//  // evaluate the returns of minValHelper to return the lowest value
//  const leftMin = minValueHelper(node.left, min)
//  const rightMin = minValueHelper(node.right, min)
//
//  return leftMin < rightMin ? leftMin : rightMin
//}

// n = number of nodes
// Time = O(n) visit each node once
// Space = O(n) use of the call stack

// MY SOLUTION: Iterative
//const treeMinValue = (root) => {
//  // Initialize current min val (curMinVal)
//  let curMinVal = null
//
//  // Create queue to hold nodes to visit
//  const queue = [root]
//
//  // Loop through queue while it has nodes
//  while (queue.length > 0) {
//    // Shift the current node from the queue
//    const current = queue.shift()
//
//    // Evaluate if node.val is less than curMinVal
//    // yes; set curMinVal to node.val
//    curMinVal = curMinVal ? Math.min(current.val, curMinVal) : current.val
//
//    // Check if current node has left/right children
//    // yes; push to the queue
//    if (current.left) queue.push(current.left)
//    if (current.right) queue.push(current.right)
//  }
//  // return the current min val
//  return curMinVal
//}

// n = number of nodes
// Time = O(n^2) Use of the queue
// Space = O(n) Creation of the queue

const treeMinValue = (root) => {
  if (!root) return Infinity

  const leftMin = treeMinValue(root.left)
  const rightMin = treeMinValue(root.right)

  return Math.min(root.val, leftMin, rightMin)
}

console.log(treeMinValue(a)) // => -2
