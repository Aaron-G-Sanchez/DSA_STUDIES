class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }

  /** Function to list all subsequent nodes. */
  printList() {
    let current = this
    while (current) {
      console.log(current.val)
      current = current.next
    }
  }
}

module.exports = {
  Node
}
