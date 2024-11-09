# CODEWARS JS

A collection of codewars challenges done in javascript.

| Problem                                      | Difficulty |
| -------------------------------------------- | ---------- |
| [Sum of Digital Root](./digitalRoot.js)      | 6Kyu       |
| [Array.diff](./arrayDif.js)                  | 6kyu       |
| [Longest repetition](./longestRepetition.js) | 6kyu       |

| Interview practice                                |     |
| ------------------------------------------------- | --- |
| [Longest Common Prefix](./longestCommonPrefix.js) |     |

## [Sum of Digital Root - 6kyu](https://www.codewars.com/kata/541c8630095125aba6000c00/javascript)

Description:
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

## [Array.diff - 6kyu](https://www.codewars.com/kata/523f5d21c841566fde000009/javascript)

Description:
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

## [Longest Repetition](https://www.codewars.com/kata/586d6cefbcc21eed7a001155)

## [Duplicate Encoder](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript)

Description:
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.

## [Take a Ten Minute Walk](https://www.codewars.com/kata/54da539698b8a2ad76000228/javascript)

Description:
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

## Longest Common Prefix

Description:
Write a function that returns the longest common prefix found in an array of strings.

## TODOs

- [ ] Create a jest testing environment to validate each problem.
