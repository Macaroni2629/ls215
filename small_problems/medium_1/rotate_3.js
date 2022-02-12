//NOTE TO SELF WAS NOT ABLE TO ACCOUNT FOR LEADING 0's

// Rotation Part 3
// Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

// maxRotation(735291);          // 321579
// maxRotation(3);               // 3
// maxRotation(35);              // 53
// maxRotation(105);             // 15 -- the leading zero gets dropped
// maxRotation(8703529146);      // 7321609845



/*
PROBLEM RESTATED: Write a function that takes an integer as an argument and returns the maximum rotation of that integer.

QUESTIONS:
1) What does maximum rotation mean?  (It means you rotate it a certain number of times, starting from the outermost digit on the left and working your way towards the right.)

RULES EXPLICIT:
1) After you rotate the digit you're on, you fix it and all the ones to the let of it and rotate towards the right.
2) Leading zeroes get dropped.

RULES IMPLICIT:
1) If it's one digit long, just return itself.


EDGE CASES: 

EXAMPLES/TEST CASES:
// maxRotation(735291);          // 321579
352917 0 fixed
329175 1 fixed
321759 2 fixed
321597 3 fixed
321579 4 fixed

// maxRotation(3);               // 3
// maxRotation(35);              // 53
// maxRotation(105);             // 15 -- the leading zero gets dropped
// maxRotation(8703529146);      // 7321609845
HAPPY PATH

UNHAPPY PATH

INPUT(S):
  - number

OUTPUTS:
  - number
ALGORITHM (break into problems + guard clauses):
  - Declare a function `maxRotation` that takes parameter `number`
    -Pass number to `isValidDataType`
      -Return false if it's not a number
      
    -If the number is one digit long, return itself.
    
    -Declare `leftSide` and set it equal to the whole number in string form in an array
    
    -Declare `rightSide` and set it equal to an empty array
    
    -Declare `howManyToHold` and set it equal to 0.
    
    - Declare a while loop and have the condition be while `howManyToHold` is less than or equal to original number's length.
      -Pass `leftSide` into `rotateRightMostDigits`
      -Get the array back rotated
      -Add left side and right side back together
      -Increment `howManyTohold` by 1, and split by that amount
      -Keep doing this over and over until `howManyToHold` is equal to original number's length
      
      
      
  -Helper function `isValidDataType`
    -Return false if it's not number
*/

function maxRotation(number) {
  if (!isValidDataType(number)) return false;
  if (String(number).length === 1) return number;
  let stringLength = String(number).length;
  let currentNumber = number;
  let fixed = [];
  
  while (fixed.length < stringLength) {
    if (typeof(currentNumber) === 'object') {
      currentNumber = currentNumber.join('');
      currentNumber = Number(currentNumber)
    }
    let rotatedNumber = rotateRightmostDigits(currentNumber)
    currentNumber = [...String(rotatedNumber)]
    let nextDigit = currentNumber.splice(0, 1)[0]
    fixed.push(nextDigit)
  }
  let answer = fixed.join('');
  return Number(answer);
}


function isValidDataType(number) {
  if (typeof(number) === "number") return true
  return false;
}


function rotateRightmostDigits(number, n) {
  const numberString = String(number);
  const firstPart = numberString.slice(0, numberString.length - n);
  const secondPart = numberString.slice(numberString.length - n);
  const resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

// LS answer
function maxRotation(number) {
  for (let i = String(number).length; i > 1; i -= 1) {
    number = rotateRightmostDigits(number, i);
  }

  return number;
}