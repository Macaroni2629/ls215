// Diamonds
// Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.
/*

PROBLEM RESTATED: 
Write a function that displays a four-pointed diamond in an `n` by `n` grid, where `n` is an odd integer.

QUESTIONS:
1) What if `n` is even? (return false)
2) What if a different data type is passed in like [], {}, null, Infinity, -Infinity, undefined?  (Return false)
3) What if a negative number is passed? (Return false)
4) What is a fractional number is passed like 0.5? (Return false)
5) What if 0 is input?  (return false)
6) What if empty string is input? (return false)
7) What if empty space is input? (Return false)

RULES EXPLICIT:
1) Diamond is four-pointed.
2) `n` is an odd integer.
3) The argument will always be an odd integer.
4) 

RULES IMPLICIT:
1) An input of 1 will just return one star.
2) Input of `n` means there will be `n` rows of stars.
3) Each row increases by 2 stars until it gets to the Math.round(n / 2) row, which is the peak
EDGE CASES: 

EXAMPLES/TEST CASES:
HAPPY PATH
console.log(diamond(1)); // Input of 1 has one row.

// *

console.log(diamond(3)); // Input of 3 has 3 rows.

//  *       //Each line is 3 characters long.
// ***     // The middle row has 3 stars.
//  *

console.log(diamond(9)); // Input of 9 has 9 stars.

//     *
//    ***
//   *****
//  *******       //Each line/row is 9 characters long.
// *********     // The middle row has 9 stars
//  *******
//   *****
//    ***
//     *

console.log(diamond(5))
//   *  
//  *** 
// *****
//  *** 
//   * 
UNHAPPY PATH
console.log(diamond(4)) === false
console.log(diamond(0)) === false
console.log(diamond(-5)) === false
console.log(diamond('a')) === false
console.log(diamond(null)) === false
console.log(diamond(undefined)) === false
console.log(diamond([])) === false
console.log(diamond({})) === false
console.log(diamond(' ')) === false
console.log(diamond('')) === false

INPUT(S):
  - Odd integer

Intermediary data types will involve adding numbers together and concatenating strings.

OUTPUTS:
  - String of stars and spaces
ALGORITHM (break into problems + guard clauses):
-Define a function `diamond` that takes parameter `number`
  -Helper function `invalidDataType` pass `number`

  -Guard clause check that the number is greater than 0 and odd.
  -Guard clause check that the number is an integer.

  Declare local variable `topHalfSize` = Math.round(number / 2)

  Declare local variable `bottomHalfSize` = Math.floor(number / 2)

  - Top Half with `topHalfSize` passed in
    -Send to helper method `topHalf`
  - Bottom Half  with `bottomHalfSize` passed in
    -Send to helper method `bottomHalf`

  - Return the concatenation of the top half with the bottom half.

-Helper function `topHalf`
  - Declare `leftSpace` to ' '.
  - Declare `stars` to "*".
  - Declare `rightSpace` to ' '.
  - Declare `numberOfSpaces` to topHalfSize - 1
  - Declare `numberOfStars` to 1.

  - Declare `answer` to "".
  - Declare `rowNumber` to 0.
  - `While loop` with condition being while `rowNumber` <= topHalfNumber
  - push into `answer` spaces.repeat(numberOfSpaces) + stars.repeat(numberOfStars) + spaces.repeat(numberOfSpaces) + "\n"
  - increment `numberOfStars` by 2
  - decrement `numberOfSpaces` by 1.

-Helper function `bottomHalf`
  - Declare `space` to ' '.
  - Declare `stars` to "*".
  - Declare `numberOfSpaces` to 1.
  - Declare `numberOfStars` to number - 2.

  - Declare `answer` to "".
  - Declare `rowNumber` to 0.
  - `While loop` with condition being while `rowNumber` <= bottomHalfNumber
  - push into `answer` spaces.repeat(numberOfSpaces) + stars.repeat(numberOfStars) + spaces.repeat(numberOfSpaces) + "\n"
  - decrement `numberOfStars` by 2
  - increment `numberOfSpaces` by 1.
-Helper function `invalidDataType`
  -Check if it's not a number
  -If it's not a number, return false
*/
function diamond(number) {
  if (invalidDataType(number)) return false;
  if (!(number > 0) || number % 2 === 0) return false;
  if (!Number.isInteger(number)) return false;
  let topHalfSize = Math.round(number / 2);
  let bottomHalfSize = Math.floor(number / 2);

  let topHalf = makeTopHalf(topHalfSize);
  let bottomHalf = makeBottomHalf(bottomHalfSize);
  console.log(topHalf.join("\n"))
  console.log(bottomHalf.join("\n"))
  return
}

function makeBottomHalf(bottomHalfSize) {
  let space = ' ';
  let stars = "*";
  let numberOfSpaces = 1;
  let numberOfStars = bottomHalfSize * 2 - 2 + 1;
  
  let answer = [];
  let rowNumber = 0;

  while (numberOfStars >= 1) {
    let line = space.repeat(numberOfSpaces) + stars.repeat(numberOfStars) + space.repeat(numberOfSpaces);
    answer.push(line)
    numberOfStars -= 2;
    numberOfSpaces += 1;
    rowNumber += 1;
  }
  return answer;
}

function makeTopHalf(topHalfSize) {
  let space = ' ';
  let stars = "*";
  let numberOfSpaces = topHalfSize - 1;
  let numberOfStars = 1;
  let rowNumber = 0;
  let answer = [];

  while (numberOfSpaces >= 0) {
    let line = space.repeat(numberOfSpaces) + stars.repeat(numberOfStars) + space.repeat(numberOfSpaces);
    answer.push(line);
    rowNumber += 1;
    numberOfStars += 2;
    numberOfSpaces -= 1;
  }
  return answer;
}

function invalidDataType(number) {
  if (typeof(number) === 'number') return false
  return true;
}

// console.log(diamond(4)) //=== false
// console.log(diamond(0)) //=== false
// console.log(diamond(-5)) //=== false
// console.log(diamond('a')) //=== false
// console.log(diamond(null)) //=== false
// console.log(diamond(undefined)) //=== false
// console.log(diamond([])) //=== false
// console.log(diamond({})) //=== false
// console.log(diamond(' ')) //=== false
// console.log(diamond('')) // === false


//console.log(diamond(1));

// *

//console.log(diamond(3));

//  *
// ***
//  *

console.log(diamond(5));

//console.log(diamond(9));

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *