// Next Featured Number Higher than a Given Value
// A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

// NOTE: The largest possible featured number is 9876543201.

/*
Problem: Write a function named `featured` that takes an integer as an argument and returns the NEXT featured number greater than the original number.

rules/requirements:
A featured number has 3 qualities:
1) It's odd
2) it's a multiple of 7
3) All of its digits occur exactly once.
4) If there's NO next featured number, return There is no possible number that fulfills those requirements.


questions:
1) I might get negative number, or decimal.  if I get a negative number, find the next POSITIVE featured number.  if I get a decimal, round it to the nearest integer, and THEN find the next featured number.  So if it's a negative decimal, round it, and then find the next featured number that's positive.
2) If I get other data types, return string "Invalid."
3) If the input is 0, find the next featured number.

Examples/test cases:
featured(12);           // 21   
odd, multiple of 7, all digits occur exactly once
featured(20);           // 21
odd, multiple of 7, all digits occur exactly once
featured(21);           // 35 
odd, multiple of 7, all digits occur exactly once
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."
featured(-7) // 7
featured(-3.5) // 7
function(-14) // 7

featured("") // "Invalid"
featured(undefined) // "Invalid"
featured(Null) // "Invalid"
featured(NaN) // "Invalid"
featured(Infinity) // "Invalid"
featured() // "Invalid"
featured(-7, 0, 2) // 7
featured([]) // "Invalid"
featured(function() {}) // "Invalid"
featured({}) // "Invalid"

Data structures:
input: integer
intermediate structure:
while loop
output:integer


Algorithm:
-Declare a function `featured` that takes `number` as a parameter
  -pass to helper function `invalidDataType` pass `number`
    -If false, return "Invalid"
    
  -If number === 9876543201 return "There is no possible number that fulfills those requirements."
  
   -If !Number.isFinite(number) return "Invalid"
  
 
  -Check if number is <= 0.  If it is, return 7.
  
  -Do an if statement, checking if it's an integer.  if it's not, round it.
  
  -Given the number, use a do while loop with the condition being while `!testFeatured`
    -increment number by 1
    -Pass to helper function `testFeatured` save in `testFeaturedNum`
  
  -return !!testFeaturedNumber
  
-Helper function `testFeatured`
  if (number % 2 === 0) return false
  if (number % 7 !== 0) return false
  -Declare arrayOfDigits = [...String(number)]
  if ([...new Set(arrayOfDigits)].length !== arrayOfDigits.length) return false
  
-Helper function `isValidDataType`
  -Use typeof(number) === 'number' to check that they're all numbers
*/

// function featured(number) {
//   if (!isValidDataType(number)) return "Invalid"
  
//   if (number >= 9876543201) return "There is no possible number that fulfills those requirements."
  
//   if (number <= 0) return 7;
  
//   if (!Number.isFinite(number)) return "Invalid"
  
//   if (!Number.isInteger(number)) {
//     number = Math.round(number)
//   }
  
//   let testFeaturedNumber;
  
//     do {
//     number += 1;
//     testFeaturedNumber = testFeatured(number);
//   } while (!testFeatured(number))
  
//   return number;
// }

// function testFeatured(number) {
//   if (number % 2 === 0) return false;
//   if (number % 7 !== 0) return false;
//   let arrayOfDigits = [...String(number)]
//   if ([...new Set(arrayOfDigits)].length !== arrayOfDigits.length) return false
//   return true;
// }



// function isValidDataType(number) {
//   if (typeof number === "number") return true;
//   return false;
// }


//anne 
function invalidInput(num) {
  return !Number.isFinite(num) || num < 0;
}

function noNextNum(num) {
  return num >= 9876543201;
}

function allUnique(num) {
  let strDigits = String(num);
  return new Set(strDigits).size === strDigits.length;
}

function featured(num) {
  if (invalidInput(num)) return 'Invalid Input';
  if (noNextNum(num)) return 'There is no possible number that fulfills those requirements.';

  let featuredNum;
  let starting = num - (num % 7) + 7;
  starting = starting % 2 === 1 ? starting : starting + 7;

  while (!featuredNum) {
    if (allUnique(starting)) featuredNum = starting;
    starting += 14;
  }

  return featuredNum;
}

//Nat
let invalidInput = arg => !(Number.isInteger(arg));
let odd = num => num % 2 !== 0;
let unique = num => [...new Set([...String(num)])].length === String(num).length;

function divisibleBy7(num) {
  while (num % 7 !== 0) {
    num += 1;
  }

  return num;
}

function featured(argNum) {
  if (invalidInput(argNum)) return 'error';
  let num = divisibleBy7(argNum);
  if (odd(num) && unique(num) && argNum != num) return num;

  while (true) {
    num += 7;
    if (odd(num) && unique(num)) return num;
    if (num >= 9876543201) return "There is no possible number that fulfills those requirements.";
  }
}


// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
//  console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
console.log(featured(9876543202));   // "There is no possible number that fulfills those requirements."


// console.log(featured(-7, 0, 2)) // 7

// console.log(featured(3.5)) // 7

// console.log(featured(-7)) // 7
// console.log(featured(-3.5)) // 7
// console.log(featured(-14)) // 7

// console.log(featured("")) // "Invalid"
// console.log(featured(undefined)) // "Invalid"
// console.log(featured(null)) // "Invalid"
// console.log(featured(NaN)) // "Invalid"
// console.log(featured(Infinity)) // "Invalid"
// console.log(featured()) // "Invalid"
// console.log(featured([])) // "Invalid"
// console.log(featured(function() {})) // "Invalid"
// console.log(featured({})) // "Invalid"