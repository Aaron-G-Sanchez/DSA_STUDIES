const { Node } = require('./util/node')

// Reverse List

//Write a function, reverseList, that takes in the head of a linked list as an argument.
// The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')

a.next = b
b.next = c
c.next = d
d.next = e

// Iterative solution
const reverseList = (head) => {
  // save the current node
  let current = head
  // save previous node
  let prev = null

  let next = current.next

  // while node does not equal null
  // loop through list
  while (current) {
    // set the current.next val to previous
    current.next = prev
    // set previous = current
    prev = current
    // set current = next
    current = next
    // move to the next node
    if (current) {
      next = current.next
    }
  }
  // return the final node or the new head of the list
  return prev
}

// console.log('solution:', reverseList(a)) // e

const printList = (head) => {
  let current = head
  while (current) {
    console.log('node:', current.val)
    current = current.next
  }
}

console.log(printList(reverseList(a))) // e -> d -> c -> b -> a
