const { Node } = require('./util/node')
// 83 Remove Duplicates from Sorted List

// Given the `Head` of a linked list, delete ALL duplicates such that each element
// appears only once. Return the linked list sorted as well.

const one = new Node(1)
const dupOne = new Node(1)
const dupTwoOne = new Node(1)
const two = new Node(2)
const three = new Node(3)
const dupThree = new Node(3)

one.next = dupOne
dupOne.next = dupTwoOne
dupTwoOne.next = two
two.next = three
three.next = dupThree

const removeDuplicates = (head) => {
  if (!head) {
    return head
  }
  // Create a pointer to hold current node
  let current = head
  // create pointer to hold next node
  let next = head.next

  // loop through the list until the end has been reached
  while (current && next) {
    // check if current.val and next.next are the same val
    if (current.val === next.val) {
      // insert while loop to move next until it does not equal current.val
      while (current.val === next.val) {
        if (next.next === null) {
          next = next.next
          break
        }
        if (next.next) {
          next = next.next
        }
      }
      // if yes
      // set reassign current.next to the next.next val
      current.next = next
      // move to the next node and reassign the next node in the chain
      current = next
      if (current) {
        next = current.next
      }
    } else {
      current = current.next
      next = next.next
    }
  }

  return head
}

const newSortedList = removeDuplicates(one)
console.log(newSortedList.printList()) // 1 -> 2 -> 3

// n = number of nodes
// Time = O(n)
// Space = O(1)
