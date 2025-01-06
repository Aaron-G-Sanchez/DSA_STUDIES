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

const getNodeValue = (head, index) => {
  // initialize a count
  let count = 0
  // initialize a current node
  let current = head
  // while current != null
  while (current) {
    // check if the count is equal to the desired index
    // if yes return current.val
    if (count === index) return current.val
    // if no
    // increment count
    count++
    // set current equal to the next node in the list for the next iteration
    current = current.next
  }

  // return null if we make it through the entire list
  return null
}

// console.log(getNodeValue(a, 2)) // 'c'
console.log(getNodeValue(a, 6)) // null
