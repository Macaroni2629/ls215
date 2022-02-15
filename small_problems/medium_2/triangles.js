// Tri-Angles
// A triangle is classified as follows:

// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.
// To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

/*
Problem: Given 3 numbers, which represent the angles of a triangle, return whether the triangle is acute, right, obtuse, or invalid.

rules/requirements:
1) A Right triangle has one angle that's 90 degrees.
2) An acute triangle has all 3 angles being less than 90 degrees
3) An obtuse triangle has one triangle greater than 90 degrees.
4) A VALID triangle is one in which all 3 angles must sum to 180 AND every angle must be greater than 0.
5) Can assume all angles have integer values.
6) Assume that the arguments are in degrees.

input: 3 angles in integer form
Intermediate Data Structures: Array to hold the angles
output: A string that says acute, right, obtuse, or invalid.

questions:
1) What about invalid data types?  (Return false)
2) What if one of the arguments is not an a positive integer greater than 0?  (Return false)
3) What if not enough arguments?  (Return false)
4) What if too many argumenes?  (Just use the first 3)
5) What if NaN is one of them? (Return false)
6) What about Infinity? (Return false)
7) What about a boolean?  (Return false)


Examples/test cases:

console.log(triangle(60, 70, 50));       // "acute" // all 3 angles are less than 90 degrees
console.log(triangle(30, 90, 60));       // "right" // one angle is 90 degrees
console.log(triangle(120, 50, 10));      // "obtuse" // one angle is over 90 degrees
console.log(triangle(0, 90, 90));        // "invalid" // One angle is 0 degrees
console.log(triangle(50, 50, 50));       // "invalid" // all 3 angles do not sum up to 180

console.log(triangle()) // false
console.log(triangle('', 90, 20)) // false
console.log(triangle(undefined, 20, 100)) // false
console.log(triangle(null, 80, 100)) // false
console.log(triangle(NaN, 20, 50)) // false
console.log(triangle(Infinity, 20, 100)) // false
console.log(triangle(function() {}, 20, 50)) // false
console.log(triangle(false, 30, 40)) // false

Data structures:
helper Functions


Algorithm:
-Declare function `triangle` that takes parameters, `angle1`, `angle2`, and `angle3`
  -Declare holder to [...arguments]
  -Pass to helper function `isValidDataType`

  -Pass to helper function `isValidTriangle`

  -Pass to helper method `classifyTriangle`
  
  
-Helper function `classifyTriangle`
  -if any of the angles are equal to 90 degrees, return "right"
  -if ALL of the angles are less than 90, return "acute"
  -else, return "obtuse"


-Helper function `isValidDataType`
  -Check every input is a number data type.

-Helper function `isValidTriangle`
  -Make sure all 3 angles add up to 180.
  -Make sure none of the angles are 0 degrees.
  -Return "Invalid" if either of these criteria are not met.
  

*/

function triangle(ang1, ang2, ang3) {
  let holder = [...arguments]
  if (!isValidDataType(holder)) return false;
  if (!isValidTriangle(holder)) return "Invalid";

  if (holder.some(angle => angle === 90)) return "right";
  if (holder.every(angle => angle < 90)) return "acute";
  return "obtuse"
}

function isValidTriangle(holder) {
  if (holder.some(angle => angle === 0)) return false
  if (holder[0] + holder[1] + holder[2] !== 180) return false
  return true;
}

function isValidDataType(holder) {
  if (holder.every(element => typeof(element) === 'number')) return true;
  return false
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

console.log(triangle()) // "Invalid"
console.log(triangle('', 90, 20)) // false
console.log(triangle(undefined, 20, 100)) // false
console.log(triangle(null, 80, 100)) // false
console.log(triangle(NaN, 20, 50)) // Invalid
console.log(triangle(Infinity, 20, 100)) // Invalid
console.log(triangle(function() {}, 20, 50)) // false
console.log(triangle(false, 30, 40)) // false