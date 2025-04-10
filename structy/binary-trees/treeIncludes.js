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
const treeIncludes = (root, target) => {
  // Check that the root is not null
  if (!root) return false
  // check if the root.val matches the target
  // yes; return true
  if (root.val === target) return true

  // return the calls of treeIncludes on the left and right of root
  return treeIncludes(root.left, target) || treeIncludes(root.right, target)
}

console.log(treeIncludes(a, 'z')) // => false
console.log(treeIncludes(a, 'e')) // => true
