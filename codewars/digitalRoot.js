const sumOfDigitalRoot = (n) => {
  // Check if length of number given is greater than 1
  if (n < 10) {
    return n
  }
  // convert the number to an array or a string. Something iterable. WENT WITH STRING! :)
  let iterableNum = new String(n)
  // loop through the array and get the sum
  let sum = 0
  for (let num of iterableNum) {
    sum += parseInt(num)
  }
  // pass the sum back into the function and start again
  return sumOfDigitalRoot(sum)
}

console.log(sumOfDigitalRoot(16)) // 1 + 6 =7
// console.log(sumOfDigitalRoot(942)) // 9 + 4 + 2 = 15  -->  1 + 5 = 6
// console.log(sumOfDigitalRoot(493193)) // 4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
