class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }

  /**
   * Will print in a breadth first order when called on the root of a binary tree
   * @return {[]}
   */
  printTree() {
    const vals = []
    const queue = [this]

    while (queue.length > 0) {
      const cur = queue.shift()
      vals.push(cur.val)

      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }

    console.log(vals)
  }
}

module.exports = { Node }
