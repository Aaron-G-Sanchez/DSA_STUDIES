const { Node } = require('./util/node')
// Sum List

// Write a function, sumList, that takes in the head of a linked list containing
// numbers as an argument. The function should return the total sum of all values
// in the linked list.

const a = new Node(2)
const b = new Node(8)
const c = new Node(3)
const d = new Node(-1)
const e = new Node(7)

a.next = b
b.next = c
c.next = d
d.next = e

// Recursive solution
const sumList = (head) => {
  // Create base case
  // if head === null return 0
  if (!head) return 0

  // add the current nodes val to the previous sum
  // sumList will be called until we reach the null node
  // and then we start to do the arithmetic
  // e nodes val (7) + 0 all the way back up the chain
  return head.val + sumList(head.next)
}

// TEST FOR RECURSIVE SOLUTION
console.log('Recursive:', sumList(a))

// N = number of nodes
// Time = O(n) must loop through every node
// Space = O(n) recursive call stack

const sumListIteratively = (head) => {
  let current = head
  let sum = 0

  while (current) {
    sum += current.val
    current = current.next
  }
  return sum
}

// TEST FOR ITERATIVE SOLUTION
// console.log('Iterative:', sumListIteratively(a))
