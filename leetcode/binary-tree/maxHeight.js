const { Node } = require('./util/node.js')

// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the
// longest path from the root node down to the farthest leaf node.

const a = new Node(3)
// const b = new Node(9)
// const c = new Node(20)
// const d = new Node(15)
// const e = new Node(7)

// TEST CASE 1:
//      3
//     / \
//    9  20
//       / \
//     15   7

// a.left = b
// a.right = c
// c.left = d
// c.right = e

// TEST CASE 2:
//      3

const maxDepth = (root) => {
  if (!root) return 0

  const leftHeight = maxDepth(root.left)
  const rightHeight = maxDepth(root.right)

  return Math.max(leftHeight, rightHeight) + 1
}

// TEST CASE 1:
// console.log(maxDepth(a)) // 3

// TEST CASE 2:
console.log(maxDepth(a)) // 1
