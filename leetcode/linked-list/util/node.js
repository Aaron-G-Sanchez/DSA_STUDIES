class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }

  /** Function to list all subsequent nodes. */
  printList() {
    const valArray = []

    let current = this
    while (current) {
      valArray.push(current.val)
      current = current.next
    }

    console.log(valArray)
  }
}

module.exports = {
  Node
}
