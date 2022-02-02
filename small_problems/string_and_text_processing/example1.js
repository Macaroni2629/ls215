// Problem Description
// Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces" "", dash"-"", dot"."", and parentheses"()" that should be ignored.

// The rules are as follows:

// If the phone number is less than 10 digits, assume that it is a bad number.
// If the phone number is 10 digits, assume that it is good.
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
// If the phone number is 11 digits and the first number is not 1, then it is a bad number.
// If the phone number is more than 11 digits, assume that it is a bad number.
// For bad numbers, just a return a string of 10 0s.

// input: string versions of numbers with special characters like spaces, dashes, dots, parentheses

// output: digits in string form?

// requirements:
// -Number must be 10 digits OR 11 digits with a 1 first
//   -If the number is 11 digits with a 1 first, then trim off the 1 and use the last 10 digits
// -If number is not valid, return a string of 10 0's.
// -If non digit characters are entered, they are removed.
// -If they input false, infinity.. anything other than. adigit, dash, comma parentheses, space, return 10 0's.

// Questions:
// -Output 10 numbers or 10 string digits?
// -What if first number of 10 digits is a 0?
// -What if all digits are 0's?
// -What if area code starts with 1?
// -What if they input a special character that's not a dash, comma, parentheses, spaces?

// Examples (write own and go through each one) (also write more requirements based on examples)


// checkNumber('000-000-0000') === 0000000000
// checkNumber('a12394') === 0000000000
// checkNumber('1234567890009') === 0000000000
// checkNumber('123-345-3456') === 1233453456
// checkNumber('1-123-123-1234') === 1231231234
// checkNumber('#942') === 0000000000
// checkNumber('321.321.3214') === 3213213214
// checkNumber('(345)123-1234') === 3451231234
// checkNumber('false 123 null') === 0000000000
 
// Data structure:
// Start as a string

// end as a string

// Algo

    // Guard clause - return 10 0's if any character that's not a digit, dash comma, parentheses, space
// Clean string - remove dashes, commas, parentheses, spaces
 //check if length is equal to 11 with a 1 in front because the require ment states that if length is 11, it HAS to have a one at index 0
    // if it's not 1 at index 0, return 10 0's
    // If it is, trim off 1 and return number
//check if length is equal to 10
// convert remaining digits to numbers

function cleanString(number) {
  let a = (number.match(/[\d]/g) || []).join('')
  if (!a) return "0000000000"
  return a;
}

function findNumber(number) {
  if (number === '') return "0000000000"
  if (typeof(number) === 'object') return "0000000000"
  let regex = /[^\d\-\(\) \.]/
  if (regex.test(number)) {
    return "0000000000"
  }
  
  let cleanedString = cleanString(number)
  if (cleanedString.length === 11 && cleanedString[0] === '1' ) {
    cleanedString = cleanedString.slice(1);
  } 
  
  if (cleanedString.length === 10) {
    return cleanedString
  } else {
    return "0000000000"
  }
}
console.log(checkNumber('000-000-0000')) //=== "0000000000"
console.log(checkNumber('a12394')) //=== "0000000000
console.log(checkNumber('1234567890009')) //=== "0000000000"
console.log(checkNumber('123-345-3456')) //=== 1233453456
console.log(checkNumber('1-123-123-1234')) //=== 1231231234
console.log(checkNumber('#942')) //=== "0000000000"
console.log(checkNumber('321.321.3214')) //=== 3213213214
console.log(checkNumber('(345)123-1234')) //=== 3451231234
console.log(checkNumber('false 123 null')) //=== "0000000000"