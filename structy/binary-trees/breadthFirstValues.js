const { Node } = require('./util/node.js')

// Breadth first values

// Write a function, breadthFirstValues, that takes in the root of a binary
// tree. The function should return an array containing all values of the tree
// in breadth-first order.

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

/** MY SOLUTION: Iterative */
// TODO: Implement.
const breadthFirstValues = (root) => {
  // Check if the root node is empty.
  if (!root) return []

  // Initialize result array and queue to hold the return vals and the nodes to
  // visit
  const result = []
  const queue = [root]

  // Loop throuhg the queue while it has items
  while (queue.length > 0) {
    // Push the current nodes values into the return array
    const current = queue.shift()
    result.push(current.val)

    // Check if the current node has children
    // yes; Push into the queue
    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }

  return result
}

// n = number of nodes
// Time = O(n^2) Shifting the values from the queue?
// Space = O(n) creatiion of the queue and the return array

console.log(breadthFirstValues(a)) // => [a, b, c, d, e, f]
