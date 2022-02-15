//NOTE TO SELF DO NOT HAVE WORKING SOLUTION YET

// Vigenere Cipher
// The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

// Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:

// plaintext: Pineapples don't go on pizzas!
// keyword: meat

// Applying the Vigenere Cipher for each alphabetic character:
// plaintext : Pine appl esdo ntgo onpi zzas
// shift     : meat meat meat meat meat meat
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

// result: Bmnxmtpeqw dhz'x gh ar pbldal!
// Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

// Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

// For a quick lookup of a ciphertext per character, you may consult this tabula recta. Each row of the table corresponds to a Caesar Cipher encryption using the columns' character letter as a shift value.
/*

PROBLEM RESTATED: Implement a Vigenere cipher on a text.

QUESTIONS:
1) How to deal with invalid inputs, specifically invalid data types that aren't strings like arrays, objects? (Return the original string)
2) What if the keyword is longer than the text? (Just match up the keyword letters with the letters that are there in the string.

RULES EXPLICIT:
1) The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution.
2) Each letter of the keyword is treated as a shift value.
3) The shift values are the same for lowercase and uppercase letters.  For example, both `A` and `a` have a shift value of 0.  `B` and `b` both have a shift value of 1.
4) The key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.  aka apostrophes, exclamation points, and spaces all get ignored.
5) The case of the keyword doesn't matter.  In other words, "MeAt" === "mEaT".

RULES IMPLICIT:
1) 

EDGE CASES: 

EXAMPLES/TEST CASES:
Example:
Pineapples don't go on pizzas!
keyword: meat 
output: Bmnx mtpe qwdh zxgh arpb ldal
Notice we repeat meat as the keyword over and over again, ignoring spaces and special characters.

console.log(cipher('hello', 'aaaA')) // 'hello'
console.log(cipher('hello', 'bBbB')) // 'ifmm'
console.log(cipher('HeLlO', 'bbbb')) // 'IfMmP'

HAPPY PATH
console.log(cipher('hello', 'aaaA')) // 'hello'
console.log(cipher('hello', 'bBbB')) // 'ifmm'
console.log(cipher('HeLlO', 'bbbb')) // 'IfMmP'


UNHAPPY PATH (empty string, no argument, too many arguments, [], {}, null, undefined, Infinity, function)
console.log(cipher('hello', [])) // 'hello'
console.log(cipher('hello', null)) // 'hello'
console.log(cipher('hello', function () {})) // 'hello'
console.log(cipher('hello', NaN)) // 'hello'
console.log(cipher('hello', Infinity)) // 'hello'
console.log(cipher([], 'aaaa')) // false
console.log(cipher('', 'aaaa')) // ''
console.log(cipher({}), 'bbbb')) // false

INPUT(S):
  - String
  - Intermediate data structures: array 
OUTPUTS:
  - String
ALGORITHM (break into problems + guard clauses):
  - Declare a function `cipher` that takes two parameters, `string` and `keyword`.
    -Pass `string` to helper function `isValidDataType` to check if it's a string
      -If it isn't, return false

    -Pass `keyword` to helper function `isValidDataType`
      -Check that it's a number
        -If it isn't, return false.

    -If it's an empty string, return an empty string ''

    -Declare a constant ALPHA_UPPER and ALPHA_LOWER and create the array from "A" to "Z" and 'a' to 'z'.

    -create `arrayOfLetters` from `string`.

    -Iterate through the word one character at a time with `map`
      -First, check if it's NOT a letter
        -If it's NOT a letter, return the original character.
      -Check if it's a letter.
        -Check if it's upper or lowercase.
          If it's upper case, use the constant ALPHA_UPPER 
          If it's lower case, use the constant ALPHA_LOWER
          -If it's not, just return that character
      -Look up the index of the current character using `indexOf` and save in `currentIndex`

      -Declare a `for loop` and loop through the keyword continuously
        -Look at the index of the letter using `indexOf`
        -Save in `moveDown`

      
      -Save in `currentLetter` what you get when you add `currentIndex` and `moveDown`
        -Check if the new index is greater than 25
        -If it is, modulo 25

      -Return new array joined to form a string
*/ 

function cipher (string, keyword) {
  if (!isValidDataType(string)) return false
  if (!isValidDataType(keyword)) return string

  if (string === '') return '';

  const ALPHA_UPPER = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const ALPHA_LOWER = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let arrayOfLetters = [...string];

  let keyPosition = 0;
  let index;
  let answer = arrayOfLetters.map(char => {
    if ((/[^a-z]/ig).test(char)) {
      return char;
    } else if ((/[A-Z]/).test(char)) {
      let currentIndex = ALPHA_UPPER.indexOf(char);
      currentKeyLetter = keyword[keyPosition]
      index = ALPHA_UPPER.indexOf(currentKeyLetter);
      keyPosition = findKeyPosition(keyPosition, keyword)
      currentIndex += index;
      return ALPHA_UPPER[currentIndex];
    } else if ((/[a-z]/).test(char)) {
      let currentIndex = ALPHA_LOWER.indexOf(char);
      currentKeyLetter = keyword[keyPosition];
      console.log(currentKeyLetter);
      index = ALPHA_LOWER.indexOf(currentKeyLetter);
      keyPosition = findKeyPosition(keyPosition, keyword)
      currentIndex += index;
      return ALPHA_LOWER[currentIndex];
    }
  })

  return answer;
}

function findKeyPosition(keyPosition, keyword) {
  if (keyPosition >= keyword.length) {
    keyPosition = 0;
    return keyPosition;
  }
  keyPosition += 1;
  return keyPosition;
}

function isValidDataType(string) {
  if (typeof(string) === 'string') return true
  return false
}

// console.log(cipher('hello', [])) // 'hello'
// console.log(cipher('hello', null)) // 'hello'
// console.log(cipher('hello', function () {})) // 'hello'
// console.log(cipher('hello', NaN)) // 'hello'
// console.log(cipher('hello', Infinity)) // 'hello'
// console.log(cipher([], 'aaaa')) // false
// console.log(cipher('', 'aaaa')) // ''
// console.log(cipher({}, 'bbbb')) // false

console.log(cipher('hello', 'aaaA')) // 'hello'
console.log(cipher('hello', 'bBbB')) // 'ifmmn'
console.log(cipher('HeLlO', 'bbbb')) // 'IfMmP'