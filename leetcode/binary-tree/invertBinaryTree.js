const { Node } = require('./util/node.js')

// 226. Invert Binary Tree

// Given the root of a binary tree, invert the tree, and return its root.

const a = new Node(4)
const b = new Node(2)
const c = new Node(7)
const d = new Node(1)
const e = new Node(3)
const f = new Node(6)
const g = new Node(9)

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g

//          4
//         / \
//        2   7
//       / \ / \
//      1  3 6  9

// MY SOLUTION: Recursive
const invertTree = (root) => {
  // Call invert helper
  invertHelper(root)
  // return the root
  return root
}
const invertHelper = (node) => {
  // check that the node is not null
  if (!node) return
  // Create a temp variable to prevent node from being lost after reassignment
  const temp = node.left
  // Swap left and right nodes
  node.left = node.right
  node.right = temp
  // call invert helper on the nodes left and right children
  invertHelper(node.left)
  invertHelper(node.right)
}

/** DESIRED OUTCOME */
//          4
//         / \
//        7   2
//       / \ / \
//      9  6 3  1

invertTree(a)

a.printTree() // => [4, 7, 2, 9, 6, 1, 3]
