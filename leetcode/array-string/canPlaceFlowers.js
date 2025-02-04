// 605. Can Place Flower

const canPlaceFlowers = (flowerbed, n) => {
  let count = 0

  for (let plot in flowerbed) {
    if (flowerbed[plot] === 0) {
      const leftVal = parseInt(plot) - 1
      const rightVal = parseInt(plot) + 1

      const left = flowerbed[leftVal]
      const right = flowerbed[rightVal]

      if (!left && !right) {
        flowerbed[plot] = 1
        count++
      }
    }
  }

  return count >= n ? true : false
}

// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)) // true
// console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)) // false
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)) // false
// console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1)) // true
// console.log(canPlaceFlowers([1, 0, 0, 0, 0], 2)) // true
// console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)) // true
// console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)) // false
// console.log(canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 1)) // false
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2)) // true

// n = flowerbed.length
// Time: O(n)
// Space: O(1)
