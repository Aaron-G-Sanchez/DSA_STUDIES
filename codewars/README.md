# CODEWARS JS

A collection of codewars challenges done in javascript.

| Problem                                                           | Difficulty |
| ----------------------------------------------------------------- | ---------- |
| [Sum of Digital Root](./digitalRoot.js)                           | 6Kyu       |
| [Array.diff](./arrayDif.js)                                       | 6kyu       |
| [Longest repetition](./longestRepetition.js)                      | 6kyu       |
| [Does My Number Look Big In This](./doesMyNumberLookBigInThis.js) | 6kyu       |
| [Bit Counting](./bitCounting.js)                                  | 6kyu       |

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

## [Persistent Bugger](https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/javascript)

Description:
Write a function, `persistence`, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

## [Does My Number Look Big In This](https://www.codewars.com/kata/5287e858c6b5a9678200083c)

Description:
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

## [Bit Counting](https://www.codewars.com/kata/526571aae218b8ee490006f4)

Description:
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

## Longest Common Prefix

Description:
Write a function that returns the longest common prefix found in an array of strings.

## Stop gninnipS My sdroW!

Description:
Write a function that takes in a string of one or more words, and returns the same string,
but with all words that have five or more letters reversed (Just like the name of this Kata).
Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

## TODOs

- [ ] Create a jest testing environment to validate each problem.
