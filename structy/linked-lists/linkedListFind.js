const { Node } = require('./util/node')
// Linked List Find

// Write a function, linkedListFind, that takes in the head of a linked list and a target value.
// The function should return a boolean indicating whether or not the linked list contains the target.

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')

a.next = b
b.next = c
c.next = d

// Recursive solution
const linkedListFind = (head, target) => {
  // Call helper function
  return findTarget(head, target)
}

const findTarget = (node, target) => {
  // BASE CASE
  // if node is null return false.
  // (we've looped through all nodes and did not find the target).
  if (!node) return false
  // Check if the current node value === the target.
  if (node.val === target) return true
  // Call findTarget on the next node in the list.
  return findTarget(node.next, target)
}

// console.log(linkedListFind(a, 'c')) // true
console.log(linkedListFind(a, 'q')) // false

// n = length of nodes
// Time = O(n) // Worst case we loop through all the nodes
// Space = O(n) // Call stack
