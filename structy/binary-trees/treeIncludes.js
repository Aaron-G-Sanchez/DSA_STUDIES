const { Node } = require('./util/node.js')

// Tree Includes

// Write a function, treeIncludes, that takes in the root of a binary tree and a
// target value. The function should return a boolean indicating wheather or not
// the value is contained in the tree.

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// MY SOLUTION: Recursive
//const treeIncludes = (root, target) => {
//  // Check that the root is not null
//  if (!root) return false
//  // check if the root.val matches the target
//  // yes; return true
//  if (root.val === target) return true
//
//  // return the calls of treeIncludes on the left and right of root
//  return treeIncludes(root.left, target) || treeIncludes(root.right, target)
//}

// n = number of nodes
// Time = O(n) Visit each node once
// Space = O(n) Use of the call stack

// MY SOLUTION: Iterative
const treeIncludes = (root, target) => {
  // Check that root is not empty
  if (!root) return false
  // Create queue to hold nodes that need to be visited
  const queue = [root]
  // Loop through queue while it has nodes
  while (queue.length > 0) {
    // Take from the front of the queue as the 'current' node
    const current = queue.shift()
    // Check to see if current.val equals the target
    // yes; return true
    if (current.val === target) return true

    // Check if the node has children(left and right)
    // yes; Add children to the queue
    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }
  // if we make it through all nodes
  // return false
  return false
}

// n = number of nodes
// Time = O(n^2) using shift on the queue
// Space = O(n) creation of the queue

console.log(treeIncludes(a, 'z')) // => false
console.log(treeIncludes(a, 'e')) // => true
