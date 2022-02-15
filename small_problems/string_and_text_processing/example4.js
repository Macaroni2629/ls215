// Problem Description
// You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

// Your job is to return a list of complete numbers.

// The possible separators are: ["-", ":", ".."]

// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
// "1-3, 1-2" --> 1, 2, 3, 11, 12
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// "104-2" --> 104, 105, ... 112
// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545, 564, 565, .. 611

/*
PROBLEM RESTATED: Given a list of numbers in "short-hand" range.  We want to list out all of the numbers that were given in shorthand.


QUESTIONS:
1) What does shorthand mean?  (Only the significant part of the next number is written.)
2) What is the significant part of the number? (the last digit if the number is 2 digits long, the last two digits if the number is three digits long)
3) Does the 3 dots mean they want the dot explicitly in the output or they're just trying to save space and not listing all the numbers for example between 105 and 112?
4) What does a dash mean?  (A dash means a range.)
5) What does a ":" colon mean?  (A colon means an inclusive range.)
6) What does a comma mean?  (A comma means an explicit stop.)
7) Can we have negative numbers?  (Yes, it would just mean there might be two consecutive dashes visible)
8) Can a number ever be listed twice?  (No.)
9) Can you just have one number and call it a day? (Yes.)
10) What if your input is a mix of number strings and letters?  (Invalid input.)

RULES EXPLICIT:
1) The numbers are always increasing.
2) Short-hand means only the significant part of the next number is written.
3) There are 3 kinds of separators: dash for inclusive range, : for inclusive range, and ... to show inclusive range.
4) Job is to return a complete list of numbers.


RULES IMPLICIT:
// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21  // Comma does NOT imply range, means one number by itself.
// "1-3, 1-2" --> 1, 2, 3, 11, 12 // dash means range.
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12 // Colon means inclusive range
// "104-2" --> 104, 105, ... 112 // Dash means listing the first number, the second number.. then 3 dots until the last number stated in the range.
// "104-02" --> 104, 105, ... 202 // If it's a 3 digit number, the shorthand will use the last two digits as "short hand".
// "545, 64:11" --> 545, 564, 565, .. 611 // The first number is the lowest number.

//Implied all are integers, possibly only positive.

EDGE CASES: 
1) What if 0 is the first number listed?  (It's acceptable; 0 is a number.)
2) What happens if we put invalid data types like false?
3) What about NaN?  
4) What about decimal numbers like 0.5?
5) What about objects/arrays as input?

EXAMPLES/TEST CASES:
HAPPY PATH)
console.log(numberRange("1, 3, 7, 2, 4, 1") // === (1, 3, 7, 12, 14, 21))
console.log(numberRange("1-3, 1-2") // === (1, 2, 3, 11, 12))
console.log(numberRange("1:5:2") // === (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 12))
console.log(numberRange("104-2") // === (104, 105, 106, 107, 108, 109, 110, 111, 112))
console.log(numberRange("104-02") // === (104, 105, ... 202))
console.log(numberRange("545, 64:11") // === (545, 564, 565, .. 611))
console.log(numberRange("4, 5, 6:6") // === (4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16))

UNHAPPY PATH
console.log(numberRange("0")) === 0)
console.log(numberRange(false)) === "Invalid Input")
console.log(numberRange(NaN)) === "Invalid Input") // Note here will have to make guard clause checking for isNaN
console.log(numberRange("0.5")) === "Invalid Input") // Note will have to use isInteger to check if it's an integer
console.log(numberRange([])) === "Invalid Input")
console.log(numberRange({})) === "Invalid Input")
console.log(numberRange("")) === "Invalid Input") // Note here will have to add guard clause checking for empty string
console.log(numberRange("abc")) === "Invalid Input") // Note here will have to add guard clause checking for nondigits
console.log(numberRange("123abc")) === "Invalid Input")

INPUT(S):
  - Strings with digits, colons, dashes, and dots (ellipsis)

OUTPUTS:   
  -  Either a strin gthat says "Invalid Input" OR actual integer numbers
  
ALGORITHM (break into problems + guard clauses):

-Define function numberRange with parameter `stringRange`
  -Valid data type - Pass `stringRange` to helper function `validDataType`
    -Return false if `validDataType` returns false.
    
  -Check for invalid strings with helper function `validString`
    -Return false if string contains anything that's not a number, colon, dash, dot, or comma, or space.
  
  -Return false if it's an empty string.
  
  -Given the string now,
    Delete all the spaces.
    
  -Create an array of numbers
    Split on the commas
  
  "1, 3, 7, 2, 4, 1"
  
  -Looking at the first case dealing with just commas:
  -Starting from the leftmost number, I see that there's a comma right after it, so I understand that's a distinct, individual number, NOT a range.
  - I look at the next number, see it's a comma, understand it's a distinct individual number.
  
    -Pass to helper method `compareTwoNums`
    -While doing this, I must compare if `a` < `b`.  If it is, do nothing.
    -If false, then create a variable `increment`
      -Set `increment` = to left side number (number data type)
      -Increment by 1 until it's equal to the right side number + 10? (in string form)
      -Once they're equal, enumerate that value in the answer.
  
-Helper function `validDataType` with parameter `stringRange`
  -Check if typeof(stringRange) === `string`
  -Return true if it's a string
  -Return false if it's not string
  
*/

function compareTwoNums(num1, num2) {
 
}

console.log(compareTwoNums('7', '2')) // 12
console.log(compareTwoNums('104', '2')) // 112
console.log(compareTwoNums('104', '02')) // 202


// function longHand(stringRange) {
//   if (!validDataType(stringRange)) return false
//   if (!validString(stringRange)) return false
//   if (stringRange === '') return false

//   let noSpaces = stringRange.replaceAll(' ', '');
  
//   let arrayOfNumbers = noSpaces.split(/,/);
//   return arrayOfNumbers
// }

// function validDataType(stringRange) {
//   return  (typeof(stringRange) === 'string')
// }

// function validString(stringRange) {
//   if ((/[^\d\-\., ]/).test(stringRange)) {
//     return false
//   }
//   return true
// }


//HAPPY PATH
// console.log(numberRange("1, 3, 7, 2, 4, 1")) // === (1, 3, 7, 12, 14, 21))
//console.log(numberRange("1-3, 1-2")) // === (1, 2, 3, 11, 12))
// console.log(numberRange("1:5:2") // === (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 12))
// console.log(numberRange("104-2") // === (104, 105, 106, 107, 108, 109, 110, 111, 112))
// console.log(numberRange("104-02") // === (104, 105, ... 202))
// console.log(numberRange("545, 64:11") // === (545, 564, 565, .. 611))
// console.log(numberRange("4, 5, 6:6") // === (4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16))
// console.log(numberRange("1, 2, 3:5, 1-3") // === (1, 2, 3, 4, 5, 11, 12, 13))
  
// //UNHAPPY PATH
// console.log(numberRange("0")) === 0)
// console.log(numberRange(false) === false)
// console.log(numberRange(NaN) === false) // Note here will have to make guard clause checking for isNaN
// console.log(numberRange("0.5") === false) // Note will have to use isInteger to check if it's an integer
// console.log(numberRange([]) === false)
// console.log(numberRange({}) === false)
// console.log(numberRange("") === false) // Note here will have to add guard clause checking for empty string
// console.log(numberRange("abc") === false) // Note here will have to add guard clause checking for nondigits
// console.log(numberRange("123abc") === false)
