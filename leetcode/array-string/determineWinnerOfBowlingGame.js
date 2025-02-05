// 2660. Determine the Winner of a Bowling Game

// You are given two 0-indexed integer arrays player1 and player2, representing the number of pins that player 1 and player 2 hit in a bowling game, respectively.

// The bowling game consists of n turns, and the number of pins in each turn is exactly 10.

// Assume a player hits xi pins in the ith turn. The value of the ith turn for the player is:

// 2xi if the player hits 10 pins in either (i - 1)th or (i - 2)th turn.
// Otherwise, it is xi.
// The score of the player is the sum of the values of their n turns.

// Return

// 1 if the score of player 1 is more than the score of player 2,
// 2 if the score of player 2 is more than the score of player 1, and
// 0 in case of a draw.

/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 *
 * */
const getWinner = (player1, player2) => {
  // initialize counts to keep track of the players scores
  let score1 = 0
  let score2 = 0
  // loop through the players scores (using player1 because both players have
  // the same amount of scores)

  for (let i = 0; i < player1.length; i++) {
    // set two pointers to keep track of any 10s that were scored
    // if prevOne or prevTwo === 10 then double the score
    if (player1[i - 1] === 10 || player1[i - 2] === 10) {
      score1 += 2 * player1[i]
    } else {
      score1 += player1[i]
    }

    if (player2[i - 1] === 10 || player2[i - 2] === 10) {
      score2 += 2 * player2[i]
    } else {
      score2 += player2[i]
    }
  }
  // evaluate whos score is higher and return that 1, 2 || 0 in case of draw
  console.log('score one:', score1)
  console.log('score two:', score2)

  if (score1 > score2) {
    return 1
  } else if (score1 < score2) {
    return 2
  }

  return 0
}

console.log(getWinner([5, 10, 3, 2], [6, 5, 7, 3]))
