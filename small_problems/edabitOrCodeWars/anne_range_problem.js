/*
Description
Your task is to take arrays of numbers and compress them into ranges.

The numbers in the array are mostly consecutive. 

If you convert them as ranges,it will save a lot of space. You should 

write a function that will convert an
array of numbers into a string. 

A range, or series of consecutive numbers,
will be represented as two numbers separated by an underscore, a range of one
just by the number its self and multiple ranges separated by commas.

For example,
The numbers 5, 6, 7, 8 and 9 would be displayed as "5_9"
The number 6 would just be "6"
The numbers 3,4,5,6,9 would be "3_6,9"

Using the above system, you should write one functions:
toRange - convert an array of numbers to a range string

Warnings
The numbers could arrive all jumbled up so you'll need to sort them sometimes
the same number may appear more than once, duplicates should be discarded.

Edge cases
An empty array should become an empty string if passed to toRange. Also, ranges of 2 digits will take the same space whether they are represented as a sequence or a range.
I.e. "5,6,8,9".length === "5_6,8_9".length so there will be no compression,
but represent them as a range anyway for consistency.
*/
/*
Problem: To tak earrays of numbers and compress them into ranges.  Write. afunction that. willconvert an array of numbres into. astring.


rules/requirements:
1) Commas DO NOT mean necessarily a range.  Commas could mean either will turn into range (if the numbers are consecutive) OR just individual numbers enumerated.
2) Numbers might not be sorted.
3) Get rid of duplicates
4) Ranges of 2 digits will take the same space whether they are repesented as a sequence or a range.

questions:
1) If I get something that's not an array, then return "Invalid Input."
2) WILL have only one array
3) could also have NO array. Return "Invalid Input"
4) Elements ALWAYS be positive or negative integers or 0, or sparse array
5) Sparse array [1, , 2, 3, , 4] => '1_4' - Sparse array is having white spaces.  empty elements.
6) Do these elements count towards the length of the array? Yes
7) The sparse elements
8) Dont worry about NaN
9) Infinity don't worry it's not an integer
10) CANNOT MUTATE ORIGINAL ARRAY

Examples/test cases:

console.log(toRange([5, 6, 7, 8, 9])) // "5_9"

Have a looping mechanism
  -Have a startNumber
  -Have a currentNumber
    -Increment by 1 and check if it's equal to the next number
  -Keep incrementing until it's not equal to the next one.
  -That LAST number, string concatenate two numbers with an underscore.
  -Reassign next number as `startNumber`

currentNumber = array[0]
if (currentNumber + 1 = array[currentIndex + 1])

console.log(toRange[6]) // "6"
console.log(toRange[3, 4, 5, 6, 9])) // "3_6, 9"
console.log(toRange[]) // ''
console.log(toRange([1, , 2, 3, , 4])) // '1_4' // effectively the empty elements are removed.
console.log(toRange([-3, -2, -1, 9])) // "-3_-1, 9"
console.log(toRange([0, 8])) // "0, 8"
console.log(toRange([7, 4, 6, 5])) // "4_7"
console.log(toRange([4, 4, 6, 5, 7])) // "4_7"
console.log(toRange([2, 3, 5, 6]))
 

UNHAPPY PATH
console.log(toRange({}) // "Invalid Input"
console.log(toRange(null)) // "Invalid Input"
console.log(toRange(undefined)) // "Invalid Input"
console.log(toRange(function () {})) // "Invalid Input"
console.log(toRange(false)) // "Invalid Input"
console.log(toRange()) // "Invalid Input"

Data structures:
input: array of integers
output: String containing commas, underscores, integers

Algorithm:
Declare a function `toRange` with parameter `arr`
  -Pass to helper function `isValidDataType` `arr`
    -Return "Invalid Input" if it's not an array.

  -If it's an empty array, return an empty array.
  -Duplicate the array so you don't mutate the original one.
  -Remove duplicate values
  -Sort the values
  - Remove values that are `undefined`

  -Declare `answer` = [];

  - Iterate through the array, starting with index 0.
    - Save in `startNumber` index 0
    - Check if currentNumber + 1 is equal to the next number in the original array.
      - If it is, 
        - Move to the next iteration. (continue)
      - If it isn't, I have to figure out if this number is the beginning of a new range or if it's a   number by itself I have to push into `answer`
        -If this number is equal to `startNumber` then I have to push it into the `answer` array
          -Then I slice that number out
          -Reassign `startNumber` to `copyArr[0]`
        -If this number isn't equal to `startNumber` then I push a string range in.


  -Return the answer array joined.

Helper function `isValidDataType`
  -Check that the input value is an array.

*/

// Should return a string representing the ranges
function toRange(arr) {
  if (!isValidDataType(arr)) return "Invalid Input";
  if (arr.length === 0) return '';
  if (arr.length === 1) return arr;
  let copyArr = arr.slice();
  copyArr.sort((a, b) => a - b);
  copyArr = copyArr.filter(arr => arr !== undefined);
  copyArr = [...new Set(copyArr)]
  let answer = [];
  let startNum = copyArr[0]
  for (let i = 0; i < arr.length; i++) { 
    if (copyArr[i] + 1 === copyArr[i + 1]) {
      continue;
    } else {
      if (startNum === copyArr[i]) {
        answer.push(copyArr[i])
        copyArr = copyArr.slice(i + 1)
        startNum = copyArr[i + 1]
      } else {
        if (copyArr[i] === undefined) {
          answer.push(String(startNum))
          break;
        }
        answer.push(`${startNum}_${copyArr[i]}`)
        copyArr = copyArr.slice(i + 1);
        startNum = copyArr[0];
        if (copyArr[0] === undefined) {
          break;
        }
      }    
    }
  }

  return answer;
}

function isValidDataType(arr) {
  return Array.isArray(arr);
}

console.log(toRange([5, 6, 7, 8, 9])) // "5_9"
console.log(toRange([6])) // "6"
console.log(toRange([3, 4, 5, 6, 9])) // "3_6, 9"
console.log(toRange([])) // ''
console.log(toRange([1, , 2, 3, , 4])) // '1_4' // effectively the empty elements are removed.
 console.log(toRange([-3, -2, -1, 9])) // "-3_-1, 9"
 console.log(toRange([0, 8])) // "0, 8"
  console.log(toRange([7, 4, 6, 5])) // "4_7"
 console.log(toRange([4, 4, 6, 5, 7])) // "4_7"
 console.log(toRange([3, 2, 5, 6])) // "2_3, 5_6"
console.log(toRange([, 1, 2, 3])) // "1_3"


//UNHAPPY PATH
// console.log(toRange({})) // "Invalid Input"
// console.log(toRange(null)) // "Invalid Input"
// console.log(toRange(undefined)) // "Invalid Input"
// console.log(toRange(function () {})) // "Invalid Input"
// console.log(toRange(false)) // "Invalid Input"
// console.log(toRange()) // "Invalid Input"
// console.log(toRange([])) // ''

