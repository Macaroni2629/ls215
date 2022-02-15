// Triangle Sides
// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

// Examples:
/*
Problem: Write a function that takes the lengths of the 3 sides of a triangle as arguments and returns  one of the following four strings representing the triangle's classification.

rules/requirements:
explicit:
1) Equilateral means all 3 sides are of equal length.
2) Isosceles: 2 sides are of equal length, 3rd different.
3) Scalene - all 3 sides are of differeng lengths.
4) Valid Triangle - sum of the lengths of the 2 shortest sides must be greater than the length of the longest side AND every side must have a length greater than 0. 
5) 

implicit:
1) Will always be given 3 arguments.
2) Can be given non-integer numbers.
3) Can be given 0 as an argument, but that's an invalid input anyways.
4) 

input: 3 numbers
output: string or false

questions:
1) What if pass in invalid data type?( Return false)
2) What if pass in non integer number? (It's an acceptable number as long as it's greater than 0.)
3) What if you pass in too many arguments?  (only use first 3)
4) What if yu pass in not enough arguments? (Return false)
5) What if you pass in Infinity? (Return false)
6) What about NaN? (It's not a valid number, so return false)

Examples/test cases:
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid" // invalid because one of the 3 sides is 0
console.log(triangle(3, 1, 1));        // "invalid" // invalid because sum of 2 sides is less than 3rd
console.log(triangle(3, 4, 5, 6)); // "scalene"

console.log(triangle()) // false
console.log(triangle('', 3, 6)) // false
console.log(triangle([], 2, 3)) // false
console.log(triangle({}, 5, 6)) // false
console.log(triangle(undefined, 5, 6)) // false
console.log(triangle(3, 4, 5, 6)) "scalene"
console.log(triangle((2, 3))) // false
console.log(triangle((Infinity, 4, 5))) // false

Data structures:

Input:  3 positive numbers

Intermediate data structures: 

output: String indicating equilateral, isosceles, scalene, or "invalid"

Algorithm:

-Declare a function `triangle` that takes 3 numbers `num1`, `num2`, `num3`.
  -Declare `holder` to [...args] and hold all 3 arguments
  -Pass `holder` to `isValidDataType` to make sure all elements are numbers and NOT Infinity and greater than 0

  -Pass `holder` to `isValidTriangle`
  
  -if num1 === num2 === num3
    return "equilateral"
  -if num1 === num2 || num2 === num3 || num1 === num3
    return "isosceles"
  -else return "scalene"
  
 
-Helper function `isValidTriangle`
  -Must check that the sum of 2 sides is greater than the third side
  -if first and second side are less than 3rd side, return false
  -if second and third side are less than first side, return false
  -if first and third side are less than second side, return false
  -otherwise return true
  
  
-Helper function `isValidDataType`
  -Check all elements are numbers
  -Check all numbers are NOT Infinity
  -Check all numbers are greater than 0.
  -Check number is NOT NaN.

*/

// function triangle(num1, num2, num3) {
//   console.log(num1, "num1", num2, "num2", num3, "num3")
//   let holder = [...arguments]
//   if (holder.length === 0) return false;
//   if (holder.some(element => element === Infinity)) return false
// }

// Triangle Sides
// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

// Examples:
/*
Problem: Write a function that takes the lengths of the 3 sides of a triangle as arguments and returns  one of the following four strings representing the triangle's classification.

rules/requirements:
explicit:
1) Equilateral means all 3 sides are of equal length.
2) Isosceles: 2 sides are of equal length, 3rd different.
3) Scalene - all 3 sides are of differeng lengths.
4) Valid Triangle - sum of the lengths of the 2 shortest sides must be greater than the length of the longest side AND every side must have a length greater than 0. 
5) 

implicit:
1) Will always be given 3 arguments.
2) Can be given non-integer numbers.
3) Can be given 0 as an argument, but that's an invalid input anyways.
4) 

input: 3 numbers
output: string or false

questions:
1) What if pass in invalid data type?( Return false)
2) What if pass in non integer number? (It's an acceptable number as long as it's greater than 0.)
3) What if you pass in too many arguments?  (only use first 3)
4) What if yu pass in not enough arguments? (Return false)
5) What if you pass in Infinity? (Return false)
6) What about NaN? (It's not a valid number, so return false)

Examples/test cases:
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid" // invalid because one of the 3 sides is 0
console.log(triangle(3, 1, 1));        // "invalid" // invalid because sum of 2 sides is less than 3rd
console.log(triangle(3, 4, 5, 6)); // "scalene"

console.log(triangle()) // false
console.log(triangle('', 3, 6)) // false
console.log(triangle([], 2, 3)) // false
console.log(triangle({}, 5, 6)) // false
console.log(triangle(undefined, 5, 6)) // false
console.log(triangle(3, 4, 5, 6)) "scalene"
console.log(triangle((2, 3))) // false
console.log(triangle((Infinity, 4, 5))) // false

Data structures:

Input:  3 positive numbers

Intermediate data structures: 

output: String indicating equilateral, isosceles, scalene, or "invalid"

Algorithm:

-Declare a function `triangle` that takes 3 numbers `num1`, `num2`, `num3`.
  -Declare `holder` to [...args] and hold all 3 arguments
  -Pass `holder` to `isValidDataType` to make sure all elements are numbers and NOT Infinity and greater than 0

  -Pass `holder` to `isValidTriangle`
  
  -if num1 === num2 === num3
    return "equilateral"
  -if num1 === num2 || num2 === num3 || num1 === num3
    return "isosceles"
  -else return "scalene"
  
 
-Helper function `isValidTriangle`
  -Must check that the sum of 2 sides is greater than the third side
  -if first and second side are less than 3rd side, return false
  -if second and third side are less than first side, return false
  -if first and third side are less than second side, return false
  -otherwise return true
  
  
-Helper function `isValidDataType`
  -Check all elements are numbers
  -Check all numbers are NOT Infinity
  -Check all numbers are greater than 0.
  -Check number is NOT NaN.

*/

let checkIsNumber = element => element !== Infinity && 
                               element > 0 && 
                               typeof(element) === 'number' && 
                               !isNaN(element);

function triangle(num1, num2, num3) {
  let holder = [...arguments]
  if (holder.length === 0) return false;
  if (holder.some(element => element === Infinity)) return false
  if (!isValidDataType(holder)) return false;
  if (!isValidTriangle(holder)) return "Invalid";

  if (holder.every(element => element === holder[0])) {
    return "equilateral"
  } else if (holder[0] === holder[1] || holder[0] === holder[2] || holder[1] === holder[2] ) {
    return "isosceles"
  } else {
    return "scalene"
  }
}

function isValidTriangle(holder) {
  if (holder[0] + holder[1] < holder[2]) {
    return false
  } else if (holder[1] + holder[2] < holder[0]) {
    return false
  } else if (holder[0] + holder[2] < holder[1]) {
    return false
  } 
  return true;
}

function isValidDataType(holder) {
  holder.every(element => {
    if (checkIsNumber(element)) return true;
    return false;
  })
}

// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
//  console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // false // invalid because one of the 3 sides is 0
// console.log(triangle(3, 1, 1));        // "invalid" // invalid because sum of 2 sides is less than 3rd
// console.log(triangle(3, 4, 5, 6)); // "scalene"
// console.log(triangle(3, 4, 5, 6)) //"scalene"
// console.log(triangle(3, 4, NaN)) // false because NaN

//console.log(triangle()) // false
// console.log(triangle('', 3, 6)) // false
// console.log(triangle([], 2, 3)) // false
// console.log(triangle({}, 5, 6)) // false
// console.log(triangle(undefined, 5, 6)) // false
console.log(triangle(2, 3)) // false
console.log(triangle(Infinity, 4, 5)) // false