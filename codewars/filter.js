// Filter Linked List

// Given a linked list containing numbers, filter out the odd numbers and return
// a new linked list containing only even numbers

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }

  printList() {
    let current = this
    while (current) {
      console.log(current.val)
      current = current.next
    }
  }
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)
const e = new Node(5)
const f = new Node(6)
const g = new Node(7)

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
f.next = g

const filter = (head) => {
  // set a pointer to the current node
  let current = head
  // set a pointer to the new head (for return)
  let newHead = null
  let tail = null

  // loop through list until Null node is reached
  while (current) {
    // check if number mod 2 === 0
    if (current.val % 2 === 0) {
      // if yes (even number found)
      if (!newHead) {
        // set newHead = current
        newHead = current
        tail = newHead
      } else {
        tail.next = current
        tail = tail.next
      }
    }
    current = current.next
  }

  if (tail) {
    tail.next = null
  }

  return newHead
}

const filteredHead = filter(a)

filteredHead.printList() // 2 -> 4 -> 6

// n = number of nodes
// Time: O(n)
// Space: O(1)
