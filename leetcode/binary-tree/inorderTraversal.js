const { Node } = require('./util/node.js')

// 94. Binary Tree Inorder Traversal

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)
const e = new Node(5)
const f = new Node(6)

// TEST CASE 1:
//     1
//    / \
//   2   3
//  / \   \
// 4   5   6

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

const inorderTraversal = (root) => {
  if (!root) return []

  // Visit the left most node
  const leftVals = inorderTraversal(root.left)

  // Add self to the array
  let res = [...leftVals, root.val]

  // Visit the right most node
  const rightVals = inorderTraversal(root.right)

  // return array with right values added

  return [...res, ...rightVals]
}

console.log(inorderTraversal(a)) // [4,2,5,1,3,6]
