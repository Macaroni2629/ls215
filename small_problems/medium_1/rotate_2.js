/*
Rotation Part 2
Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

Examples:

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

PROBLEM RESTATED: Write a function that rotates the last `n` digits of a number.

QUESTIONS:
1) What if string numbers are input for both/either parameters? (return false)
2) What about any other data types that aren't positive integers?
3) It looks like a 6 digit number is passed in to the first parameter.  Will it always be 6?  (No it can be any number of digits.)
4) What if there is a leading 0? (It will be read as an octal by the computer, so just assume the initial number won't start with a 0.)
5) What if the 2nd parameter wants to rotate more numbers than there are digits in the first parameter?  (Return false)
7) What if 0 is the second parameter? (Return false.)

RULES EXPLICIT:
1) Rotate by one digit to the left, moving the first digit to the end.

RULES IMPLICIT:
1) If the second parameter is 1, return the original number unchanged.
2) 

EDGE CASES: 

EXAMPLES/TEST CASES:
rotateRightmostDigits(735291, 1);      // 735291
no change because rotating one digit only
rotateRightmostDigits(735291, 2);      // 735219
The 9 and the 1 switch places.
rotateRightmostDigits(735291, 3);      // 735912
The '2' gets moved to the end, and 9 and 1 move down one index each.
rotateRightmostDigits(735291, 4);      // 732915
The 5 gets moved to the end, and all the digits to the right move down one index each.
rotateRightmostDigits(735291, 5);      // 752913
The 3 gets moved to the end, and all the digits to the right move down one index each.
rotateRightmostDigits(735291, 6);      // 352917
The 7 gets moved to the end, and all the other digits move down one index each.

UNHAPPY PATH
rotateRightMostDigits(12345, 0) // false

rotateRightMostDigits([], 8) // false
rotateRightMostDigits({}, 10) // false
rotateRightMostDigits(null, 10) // false
rotateRightMostDigits(123, 12) // false
rotateRightMostDigits('a', 12) // false
rotateRightMostDigits([1, 2, 3], NaN) // false
rotateRightMostDigits(undefined, 3) // false


HAPPY PATH
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917


INPUT(S):
  The first parameter is a number with a lot of digits.  The second parameter is another positive integer

  -Intermediate data types--Array, possibly string
OUTPUTS:
  -One integer

  - 
ALGORITHM (break into problems + guard clauses):
  -Declare function `rotateRightMostDigits` with parameters `rotate` and `number`
    - pass `isValidDataType` the element held by `rotate`
    - pass `isValidDataType` the element held by `number`
    
    -Check if `number` is greater than the length of `rotate`
      -If it is, return false
      
    -Check if first digit of `rotate` is 0. ****
      -If it is, return false
      
    -Turn `rotate` into a string of digits in an array
      -turn `rotate` into a string
      -Then put it in an array called `arrayOfStringDigits`
      
      
    -Splice off the part that I'm going to rotate
      -let `startIndex` equal to the length of the array minus `number` 
      -Use `splice`, `startIndex`, and `number` as number of items to splice
      -save in variable `spliced`
      
     -pass `spliced` to helper function `rotater` to rotate characters
       -Get rotated array back
       -Save in `rotated`
       
    - push `rotated` back into `arrayOfStringDigits`
    
    -Return `arrayOfStringDigits` joined and then converted to Number.
    
    
  -Helper function `rotater`
    -`Shift` out the element at index 0.  Save in `shifted`
    -push `shifted` element back into array
    -Return array
    
  -Helper function `isValidDataType`
    -Check that it's a number that's greater than 0, is an integer with Number.isInteger.
*/

function rotateRightMostDigits(rotate, number) {
  if (!isValidDataType(rotate)) return false
  if (!isValidDataType(number)) return false
  
  if (String(rotate).length < number) return false
  
  let arrayOfStringDigits = String(rotate)
  arrayOfStringDigits = [...arrayOfStringDigits]
  
  let startIndex = arrayOfStringDigits.length - number
  let spliced = arrayOfStringDigits.splice(startIndex, number);
  let rotated = rotater(spliced);
  
  arrayOfStringDigits = [...arrayOfStringDigits, ...rotated]
  
  let stringDigits = arrayOfStringDigits.join("")
  return Number(stringDigits)
}

function rotater (spliced) {
  let shifted = spliced.shift();
  spliced.push(shifted)
  return spliced
}

function isValidDataType(number) {
  if (number > 0 && Number.isInteger(number)) return true;
  return false
}
//HAPPY
console.log(rotateRightMostDigits(735291, 1));      // 735291
console.log(rotateRightMostDigits(735291, 2));      // 735219
console.log(rotateRightMostDigits(735291, 3));      // 735912
console.log(rotateRightMostDigits(735291, 4));      // 732915
console.log(rotateRightMostDigits(735291, 5));      // 752913
console.log(rotateRightMostDigits(735291, 6));      // 352917

//UNHAPPY
console.log(rotateRightMostDigits([], 8)) // false
console.log(rotateRightMostDigits({}, 10)) // false
console.log(rotateRightMostDigits(null, 10)) // false
console.log(rotateRightMostDigits(123, 12)) // false
console.log(rotateRightMostDigits('a', 12)) // false
console.log(rotateRightMostDigits([1, 2, 3], NaN)) // false
console.log(rotateRightMostDigits(undefined, 3)) // false
//console.log(rotateRightMostDigits(0123, 2)) // false


console.log(rotateRightMostDigits(12345, 0)) // false