const {Node} = require('./util/node.js')

// 876. Middle of Linked List

// Given the head of a singly linked list, return the middle of the linked list.
// If there are two middle nodes, (LL with an even amount of nodes), return the
// second middle node.

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')

a.next = b
b.next = c

const middleNode = (head) => {

  // Initialize a fast and slow pointer
  let slow = head
  let fast = head

  // Loop through all the nodes while slow and fast !== null
  while(fast && fast.next){ 
    slow = slow.next
    fast = fast.next.next
  }
  // return the node slow is pointing to
  return slow.val
}

console.log(middleNode(a)) // -> 'b'
