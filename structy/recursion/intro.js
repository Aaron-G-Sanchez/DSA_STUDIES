// Recursion
// Basic recursion consists of two main ingredients
// 1) Base case: Exit step of recursive calls
// 2) Recursive step: the logic and then the recursive call

const countdown = (n) => {
  if (n === 0) return

  console.log(n)
  countdown(n - 1)
}

countdown(10) // prints numbers 10 - 1
