// Problem Description

// The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

// The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

//     Counting from the rightmost digit and moving left, double the value of every second digit
//     For any digit that thus become 10 or more, subtract 9 from the result
//         1111 becomes 2121
//         8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
//     Add all these digits together
//         1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
//         8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

// If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

// Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.

//Problem restated: The Luhn formula is a checksum formula used to validate a variety of identification numbers like credit card numbers and Canadian social insurance numbers.
// It compares a number against its included check digit, which is appended to a partial number to generate the full number.  
// The number must pass the test.  Counting from the rightmost digit and moving left.  Every 2nd digit, double it.  If the doubling of the number is greater than 10, subtract 9 and put that number there.

//Once you've gone through all the numbers, add all the digits up.  That sum is the CHECKSUM.
// If the checksum ends in 0, then the number is valid. 
  //If the checksum does not end in 0, then the number is invalid.

// input: a string of digits with spaces
// output: a string stating "valid" or "invalid"

// Explicit requirements: 
// Number will be given in string format.
// Can ignore all non-numeric numbers in a string.

// Implicit Requirements:
/*
Questions:
1) What does it mean to ignore non numeric numbers?  Return the string as invalid automatically or filter out and clean the string? (I think this means to just filter out all the non numeric numbers and then deal with the remaining numbers.)
2) What if the string number has zero spaces? (Just treat as is.)
3) What if string number is all 0's? (It's a valid number, so treat as is.)
4) What if you have string characters that are not a space or number? (Ignore theme, which means delete them and then deal with the remaining numbers.)
5) What if you have other data types in there as input? (Return Invalid input )
6) What's the smallest minimum number of characters possible? (probably one digit at least to get checksum score)
7) What's the largest number of characters possible? (infinitely many?)
8) What if I pass in an empty string? (return "Invalid input")
9) What if I pass in a digit character of just one number? (it's okay can calculate checksum with one digit)
10) If there is a non digit character, does it count in the counting of the every other? (I'm going to assume delete all non digit characters and spaces)
11) Do the spaces count towards the every 2nd character?  (No)
12) What if you pass in empty string? (Return "Invalid input")
13) What if 0 is the string input?  (Treat as normal number)
14) If they say start from the right side, do we have to start from the right side if we can figure out going from the left?

*/

// Examples (write own and go through each one) (also write more requirements based on examples)

// Data structure: 
/*
input: string number
output: string stating valid or invalid

*/

// Algo
/*
-Declare function called `checkLuhn` that takes one parameter `stringNum`

-Pass the value assigned to `stringNum` to a helper function called `checkValidDataType` with parameter `stringNum`
  -Inside this helper function, perform `typeof` operator on the parameter `stringNum`
  -Check if the `typeof` operation returns `string`, if it does, return true
  -If it doesn't, return false

-Evaluate the return value of the `checkValidDataType` function back in the main function `checkLuhn` 
  -If it evaluates to truthy, continue on in the main function.
  -If it evaluates to falsy, return `Invalid data type`.

-Check if string is empty
  -If it is, return "Empty string input"

-Clean the String
  -Remove any characters that aren't numbers and return it back to main function `checkLuhn` using helper function `cleanString`
  -name returned value `cleanedString` from function `checkLuhn`

-Now, pass the `cleanedString` to helper function `calcChecksum` with parameter `stringNum`.
  -Inside helper function `calcChecksum`,
    -Check if the string length is odd or even.
      -If the string length is even, (if the string length is odd double all the values at the odd numbered indexes.)
        -Pass to helper function `calcChecksumEven`
        -Inside helper function `calcChecksumEven` with parameter `stringNum`
          -Initialize a local variable `num` to `` empty string.
          -Write a `for loop` with declaring variable `i` to stringNum.length - 1, with the condition being i greater than or equal to 0, and decrementing i by 1 every iteration
            -At each iteration, check if the index is even
              -If it is, convert the string digit to a number and then double it and then push it into the string.
                -Check if the sum is greater than or equal to 10.
                  -If it is, subtract 9 and push that number in.
                  -If it's not, push that number in.
              -If it's odd, just push the number back into the string.

      -Then iterate through all the digits and sum them up.
      -If the last digit is a 0, return 'valid'
      -If the last digit is not zero, return 'invalid'
    example even 21 => 41 => 5 not valid want to double the even numbered indexes
            odd 325 => 345 => 12 not valid want to double the odd numbered indexes

*/
function checkValidDataType(stringNum) {
  if (typeof(stringNum) === 'string') {
    return true;
  } else {
    return false;
  }
}

function cleanString(stringNum) {
  return stringNum.replace(/[^\d]/ig, '');
}

function calcChecksumEven(stringNum) {
  let answer = [];
  let num;
  for (let i = stringNum.length - 1; i >= 0; i--) {
    num = stringNum[i];
    if (i % 2 === 0) {
      num = Number(num) * 2
      if (num >= 10) {
        num -= 9
        answer.unshift(String(num));
      } else {
        answer.unshift(String(num));
      }
    } else {
      answer.unshift(num)
    }
  }
  let arrayOfNums = answer.map( stringNum => {
    return Number(stringNum)
  })
  let sum = arrayOfNums.reduce((acc, currentValue) =>  {
    return acc += currentValue
  }, 0)
  let stringSum = String(sum);
  if (stringSum[stringSum.length - 1] === '0') {
    return 'Valid'
  } else {
    return 'Invalid'
  }
}

function calcChecksumOdd(stringNum) {
  let answer = [];
  let num;
  for (let i = stringNum.length - 1; i >= 0; i--) {
    num = stringNum[i];
    if (i % 2 === 1) {
      num = Number(num) * 2
      if (num >= 10) {
        num -= 9
        answer.unshift(String(num));
      } else {
        answer.unshift(String(num));
      }
    } else {
      answer.unshift(num)
    }
  }
  let arrayOfNums = answer.map( stringNum => {
    return Number(stringNum)
  })

  let sum = arrayOfNums.reduce((acc, currentValue) =>  {
    acc += currentValue
  })

  let stringSum = String(sum);

  if (stringSum[stringNum.length - 1] === '0') {
    return 'Valid'
  } else {
    return 'Invalid'
  }
}

function calcChecksum(stringNum) {
  if (stringNum.length % 2 === 0) {
    return calcChecksumEven(stringNum)
  } else {
    return calcChecksumOdd(stringNum)
  }
}

function validNumber(stringNum) {
  if (!checkValidDataType(stringNum)) { return "Invalid input" }
  let cleanedString = cleanString(stringNum);
  if (cleanedString === '') {return "Empty string input"}
  let checkSum = calcChecksum(cleanedString);
  return checkSum;
}



//Anne
// console.log(validNumber('1111')) //=== false);
// console.log(validNumber('8763')) //=== true);
// console.log(validNumber('2323 2005 7766 3554')) //=== true);
// console.log(validNumber('.2323. 2005 7766 3554.')) //=== true);
// console.log(validNumber('8763 8763 8763 8763')) //=== true);
// console.log(validNumber('a876a3')) //=== true);
// console.log(validNumber('1010')) //=== false);
// console.log(validNumber('5151 5151 51')) //=== true);
// console.log(validNumber('_5151 5151 51_')) //=== true);
// console.log(validNumber('2222')) //=== false);
// console.log(validNumber('4242')) //=== true);
// console.log(validNumber('678 999 8212')) //=== false);
// console.log(validNumber('800 36 7473')) //=== false);
// console.log(validNumber('3554   2323  7766  2005 ') )//=== true);
// console.log(validNumber('34') )//=== true); //(3*2 + 4 = 6 + 4 = 10 % 10 = 0)


// // edge cases:
// console.log(validNumber('')) //=== false);
// console.log(validNumber('abc')) //=== false);
// console.log(validNumber([])) //=== false);
// console.log(validNumber({})) //=== false);
// console.log(validNumber(null)) //=== false );
// console.log(validNumber(undefined)) //=== false);
// console.log(validNumber(true)) //=== false);
// console.log(validNumber(NaN)) //=== false);

// // Natalie
// console.log(validNumber('1111')) //=== 'not valid')
// console.log(validNumber('8763')) //=== 'valid') 
// console.log(validNumber("2323 2005 7766 3554")) //=== 'valid')
// console.log(validNumber("2323a2005b7766c3554")) //=== 'valid') 
// console.log(validNumber('')) //=== 'not valid')
// console.log(validNumber(1111)) //=== 'not valid')
// console.log(validNumber(null)) //=== 'not valid') 
// console.log(validNumber({})) //=== 'not valid')
// console.log(validNumber()) //=== 'not valid') 

// //Rona
console.log(validNumber('1111')) //=== 'Invalid' ) // 2121 => 6 => Invalid
console.log(validNumber('8763')) //=== 'Valid') // 7733 => 20 => Valid
console.log(validNumber('1234')) //=== 'Invalid') // 1264 => 13 => Invalid
console.log(validNumber('4589 a%09234')) //=== "Invalid") // 418909264 => 43 => Invalid
console.log(validNumber('0')) //=== 'Valid')

console.log(validNumber(false)) //=== "Invalid input") 
console.log(validNumber('')) //=== 'Empty string input')
console.log(validNumber([])) //=== 'Invalid input')
console.log(validNumber({})) //=== 'Invalid input')

