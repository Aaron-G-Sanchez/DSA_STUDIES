const { Node } = require('./util/node')
// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

const a = new Node(1)
const b = new Node(2)
const c = new Node(4)

a.next = b
b.next = c

const d = new Node(1)
const e = new Node(3)
const f = new Node(4)

d.next = e
e.next = f

const merge = (list1, list2) => {
  // Create a dummy node to act as the starting point
  let dummy = new Node()
  // Create a tail pointer to hold the current node
  let tail = dummy

  // Loop through the lists
  while (list1 && list2) {
    // Evaluate which node is small and set:
    // 1: the smaller node as the next tail
    // 2: move the provided list to the next node
    if (list1.val > list2.val) {
      tail.next = list2
      list2 = list2.next
    } else {
      tail.next = list1
      list1 = list1.next
    }
    // Set the tail to the next node in the tail
    tail = tail.next
  }

  // Loop has finished because one of the nodes is null
  // Set the last node/s
  tail.next = list1 || list2
  return dummy.next
}

const sortedList = merge(a, d)

console.log(sortedList.printList()) // 1 -> 1 -> 2 -> 3 -> 4 => 4
