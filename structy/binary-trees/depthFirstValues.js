const { Node } = require('./util/node.js')

// Depth First Values

// Write a function, depthFirstValues, that takes in the root of a binary tree.
// The function should return an array containing all values of the tree in
// depth-first oder.

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

const g = new Node('g')

a.left = b
a.right = c
b.left = d
b.right = e
e.right = g
c.right = f

//    a
//   / \
//   b   c
//  / \   \
// d   e   f
//     /
//    g

/** MY SOLUTION: Recursive */
//const depthFirstValues = (root) => {
//  // Create return array
//  let vals = []
//
//  // Call helper function on root and pass in vals
//  dfHelper(root, vals)
//  return vals
//}
//
//const dfHelper = (node, vals) => {
//  // check if node has value
//  // if no val; return
//  if (!node) return
//  // get the current node val
//  const current = node.val
//
//  // push the current val into vals
//  vals.push(current)
//
//  // call helper on root.left and root.right
//  dfHelper(node.left, vals)
//  dfHelper(node.right, vals)
//}

/** MY SOLUTION: Iterative */
const depthFirstValues = (root) => {
  // Create return array
  const vals = []

  // Create 'stack' to hold nodes that need to be visited
  const nodeStack = []

  // Push current node to the stack
  let current = root
  if (current) {
    nodeStack.push(current)
  }

  // loop through stakck while it has values
  while (nodeStack.length > 0) {
    // Pop from the stack and push the nodes value into the return array(vals)
    current = nodeStack.pop()
    vals.push(current.val)

    // Check if the current node has children and the children to the stack
    if (current.right) {
      nodeStack.push(current.right)
    }
    if (current.left) {
      nodeStack.push(current.left)
    }
  }

  return vals
}

console.log(depthFirstValues(a)) // => [a,b,d,e,g,c,f]

// n = number of Nodes
// Time = O(n) must visit every node
// Space = O(n) creation of the stack and the vals array

/** WALKTHROUGH SOLUTION: Iterative */
//const answerDepthFirstValues = (root) => {
//  if (!root) return []
//
//  const stack = [root]
//  const vals = []
//
//  while (stack.length > 0) {
//    const current = stack.pop()
//    vals.push(current.val)
//
//    if (current.right) {
//      stack.push(current.right)
//    }
//    if (current.left) {
//      stack.push(current.left)
//    }
//  }
//
//  return vals
//}

/** WALKTHROUGH SOLUTION: Recursive */
const answerDepthFirstValues = (root) => {
  if (!root) return []

  const leftValues = answerDepthFirstValues(root.left)
  const rightValues = answerDepthFirstValues(root.right)

  return [root.val, ...leftValues, ...rightValues]
}

// n = number of nodes
// Time = O(n^2)
// Space = O(n)

console.log(answerDepthFirstValues(a)) // => [a,b,d,e,g,c,f]
