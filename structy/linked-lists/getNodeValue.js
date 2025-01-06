const { Node } = require('./util/node')
// Get Node Value

// Write a function, getNodeValue, that takes in the head of a linked list and an index.
// The function should return the value of the linked list at the specified index.

// If there is no node at the given index, then return null.

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')

a.next = b
b.next = c
c.next = d

// Iterative solution
// const getNodeValue = (head, index) => {
//   // initialize a count
//   let count = 0
//   // initialize a current node
//   let current = head
//   // while current != null
//   while (current) {
//     // check if the count is equal to the desired index
//     // if yes return current.val
//     if (count === index) return current.val
//     // if no
//     // increment count
//     count++
//     // set current equal to the next node in the list for the next iteration
//     current = current.next
//   }

//   // return null if we make it through the entire list
//   return null
// }

// n = number of nodes
// Time = O(n)
// Space = O(1)

// Recursive solution.
const getNodeValue = (head, index) => {
  // Call helper function
  return getNode(head, index, 0)
}

const getNode = (head, index, count) => {
  // base case
  // check if end of the list has been reached
  if (!head) return null
  // check if index equals the nodes encountered
  if (index === count) return head.val
  // iterate to the next node by calling getNode on the node.next
  return getNode(head.next, index, ++count)
}

// n = number of nodes
// Time = O(n)
// Space = O(n)

// console.log(getNodeValue(a, 2)) // 'c'
// console.log(getNodeValue(a, 6)) // null
console.log(getNodeValue(a, 0)) // 'a'
