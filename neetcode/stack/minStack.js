// 155. Min Stack

// Design a stack that supports push, pop, top, and
// retrieving the minimum element in constant time.

// Implement the MinStack class:
// - MinStack() initializes the stack object
// - void push(int val) pushes the element val onto the stack
// - void pop(int val) removes the element on the top of the stack
// - int top() gets the top element of the stack
// - int getMin() retrieves the minimum element in the stack

// You must implement a solution with O(1) time complexity for each function.

class MinStack {
  constructor() {
    this.stack = []
    this.minValStack = []
  }

  push(val) {
    this.stack.push(val)

    if (
      val <= this.minValStack[this.minValStack.length - 1] ||
      this.minValStack.length === 0
    ) {
      this.minValStack.push(val)
    }
  }

  pop() {
    const val = this.stack.pop()

    if (val === this.minValStack[this.minValStack.length - 1]) {
      this.minValStack.pop()
    }
  }

  top() {
    console.log(this.stack[this.stack.length - 1])
    return this.stack[this.stack.length - 1]
  }

  getMin() {
    console.log(this.minValStack[this.minValStack.length - 1])
    return this.minValStack[this.minValStack.length - 1]
  }
}

const minStack = new MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
minStack.getMin() // => -3
minStack.pop()
minStack.top() // => 0
minStack.getMin() // => -2
