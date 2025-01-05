const { Node } = require('./util/node')
// linked list values
// Write a function, linkedListValues, that takes in the head of a linked list as an argument.
// The function should return an array containing all values of the nodes in the linked list.

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')

a.next = b
b.next = c
c.next = d

// Iterative solution
// const linkedListValues = (head) => {
//   // initialize an array to return
//   let values = []
//   // set current = head
//   let current = head
//   // loop through all nodes
//   while (current) {
//     // push the current val into the array
//     values.push(current.val)
//     // set new current = next node val
//     current = current.next
//   }

//   // return array of values
//   return values
// }

// n = number of nodes
// Time: O(n) must loop through all the nodes
// Space: O(n) must create an array to return

// Recursive solution
const linkedListValues = (head) => {
  const values = []
  fillValues(head, values)
  return values
}

const fillValues = (head, values) => {
  if (!head) return

  values.push(head.val)
  fillValues(head.next, values)
}

// n = number of nodes
// Time: O(n)
// Space: O(n)

console.log(linkedListValues(a))
