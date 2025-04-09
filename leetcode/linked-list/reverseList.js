const { Node } = require('./util/node.js')
// 206. Reverse Linked List

// Given the head of a sinlgy linked list, reverse the list, and return the
// reversed list.

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)
const e = new Node(5)

a.next = b
b.next = c
c.next = d
d.next = e

// 1 -> 2 -> 3 -> 4 -> 5

/** RECURSIVE
 * @param {Node} head
 * @return {Node}
 * */
const reverseList = (head) => {
  return reverseHelper(head, null)
}

/**
 * @param {Node} node
 * @param {Node|Null} prev
 * @return {Node}
 */
const reverseHelper = (node, prev) => {
  // Check if node is empty
  // yes; return prev (prev will be the new head)
  if (!node) return prev

  // Create a temporary variable to hold the next node in the original list
  const temp = node.next

  // Assign the node.next val to prev
  node.next = prev

  // Return the recursive call of reverseHelper with tmp, node to move through
  // the original list order
  return reverseHelper(temp, node)
}

const reversedHead = reverseList(a)

reversedHead.printList() // [5, 4, 3, 2, 1]
