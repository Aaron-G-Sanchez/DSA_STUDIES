const { Node } = require('./util/node')
// Zipper Lists

// Write a function, zipperLists, that takes in the head of two linked lists as arguments.
// The function should zipper the two lists together into single linked list by alternating nodes.
// If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes.
// The function should return the head of the zippered linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty.

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')

a.next = b
b.next = c
c.next = d

const x = new Node('x')
const y = new Node('y')

x.next = y

/** WALKTHROUGH */
/**
 * a   b   c  d
 *   x   y
 *
 *
 */

const zipperLists = (head1, head2) => {
  // create a pointer that points to current left (head1) and the next node (head2)
  let currentOne = head1.next
  let currentTwo = head2

  // create a pointer to keep track of the new output
  let tail = head1

  // initialize a count to assist in alternating pulls
  let count = 0

  while (currentOne && currentTwo) {
    // pull from head1 if count is odd
    if (count % 2 !== 0) {
      tail.next = currentOne
      tail = tail.next
      currentOne = currentOne.next
      count++
    } else {
      // pull from head2 if count is even
      tail.next = currentTwo
      tail = tail.next
      currentTwo = currentTwo.next
      count++
    }
  }

  // Once loop ends, figure out which node is null and set the tail.next
  // to the other head
  if (!currentOne) {
    tail.next = currentTwo
  }

  if (!currentTwo) {
    tail.next = currentOne
  }
  return head1
}

// N = nodes in head1 + nodes in head 2
// Time = O(n)
// Space = O(1)

const printList = (head) => {
  let current = head
  while (current) {
    console.log('node:', current.val)
    current = current.next
  }
}
console.log(printList(zipperLists(a, x))) // a -> x -> b -> y -> c -> d
