// Vigenere Cipher
//Practice problem with Audry February 4, 2022
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
/*

// For a quick lookup of a ciphertext per character, you may consult this tabula recta. Each row of the table corresponds to a Caesar Cipher encryption using the columns' character letter as a shift value.

// PROBLEM RESTATED: The Vigenere Cipher encrypts alphabetic text.  It uses a series of Caeser ciphers based on the letters of a keyword.  Meaning, a letter corresponds to a shift value.   Write a function. that implements a Vigenere ciphere.

//
a b c d e f g h i j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
example: pine
keyword: meat
p is 15
m is 12
15 - 12 = 3 --> B

i is 8
e is 4
8 + 4 = 12 --> M

n is 13
a is 0
13 - 0 = 13 --> n

e is 4
t is 19
19 + 4 = 23 --> x

cipher text: Bmnx


// QUESTIONS: 
1) What is a Caeser cipher? (Each letter of the keyword is treated as a shift value.  For example, the letter 'B' corresponds to a shift value of 1, 'd' corresponds to a shift value of 3.  The shift value used for a letter is equal to its index value in the alphabet.
2) What if the word has a space? (leave it)
3) What if a letter in the original word has a punctuation character there, and it lines up index-wise with the cipher word? (It's treated like it's not there and doesn't count towards the index count.)

// RULES EXPLICIT:
1) The character isn't moved if it isn't a character in the alphabet.  Example (!)
2) Case insensitive.  Meaning, 'e' is the same as 'E'.
3) 
// RULES IMPLICIT:
1) If the character is in the front half of the alphabet, meaning a-m, add the cipher value.
2) If the character is in the back half of the alphabet, meaning n-z, subtract the cipher value.
3) If there is a space, leave it there.
4) If there is another punctuation mark, leave it there.
5) If it starts out uppercase, it stays uppercase and vice versa.

// EDGE CASES: 
1) Incorrect data inputs like NaN, any number, boolean, object, array
2) Empty string as input?  Return empty string

// EXAMPLES/TEST CASES:
// HAPPY PATH
vigCipher('pine', 'meat') === ('bmnx')
vigCipher('appl', 'meat') === (mtpe')
vigCipher('Pine', 'meat') === ('Bmnx')
vigCipher('!Pin', 'meat') === ('!Bmn')
vigCipher('p_in', 'meat') === ('b_mn')


// UNHAPPY PATH
vigCipher([], 'meat') === false
vigCipher({}, 'meat') === false
vigCipher(98, 'meat') === false
vigCipher('', 'meat') === ''

// INPUT(S):
//   String of letters, spaces, underscores, punctuation

// OUTPUTS:
// string of letters, spaces, underscores, punctuation or false if invalid data type

//   - 
// ALGORITHM (break into problems + guard clauses):
// -Declare function `vigCipher` with parameters `word` and `cipher`
      -Validate Data Type
        -Pass `word` to helper function `isValidDataType`

      -Check for empty string
        -If string is empty, return empty string

      -Declare and initialize variable with `const` named `ALPHA_LOWERCASE` an array with the letters `a-z`.
      -Declare and initialize variable with `const` named `ALPHA_UPPPERCASE` with an array with letters `A-Z`.

      -Declare and initialize `answerString` to empty string ``.

      -Clean the string and keep track of all of the deletions with an object called `deletedStuff`
        -Pass the `word` to helper function
        -Save cleaned string as variable `cleanedString`
        -Save object of deleted things in variable `deleted`

      -Iterate through the word, character by character, WITH the index.
        //-If it's not a letter, just add that not letter character to empty string.

        -If it is a letter, check if it's in the range `a-m` or `A-M`.
          -pass to helper function `cipherDown` WITH the index.  AND the word associated with `cipher`.
          -Get returned letter
          -Add returned letter to `answerString`.

        -If it is a letter in the range `N-Z` or `n-z`..
          -Pass to helper function `cipherUp` WITH the index.  AND the word associated with `cipher`.
          -Get returned letter.
          -Add returned letter to `answerString`.

        -Put all the punctuation marks back in.
          -Given the object `deletedStuff` and pass in `answerString` to helper function `putBackPunct`.

      -Return answerString!!!

  -Helper function `putBackPunct`.
    -iterate through the object `deletedStuff`'s key value pairs.
    -Using `splice`, insert at the key(index) the value back into the answer string.
    -Return answer string.

  -Helper function `deletedStuff`
    -Iterate through the word, character by character
    -Check if the character is a letter, do nothing
    -If it's not a letter, find the index of the character that's not a letter
    -Store that index as a key and the character as a value in an object called `deleted`
    
    -Finally, clean the string and delete all non alpha characters and return that value.

  -Helper function `cipherDown`
    - Given the letter, save the index in `valueLetter`
    - Given the `cipher`, save the value in `valueCipher`
    - add the value of `valueLetter` and `valueCipher`.
    - Check if the letter is uppercase or lowercase
    - Access the ALPHAUP or ALPHADOWN value at that index given if the letter is uppercase or lowercase
    - Return that letter.

  -Helper function `cipherUp`
    - Given the letter, save the index in `valueLetter`
    - Given the `cipher`, save the value in `valueCipher`
    - subtract the value of `valueLetter` and `valueCipher`.
    - Check if the letter is uppercase or lowercase
    - Access the ALPHAUP or ALPHADOWN value at that index given if the letter is uppercase or lowercase
    - Return that letter.

  -Helper function `isValidDataType`
    -Use `typeof` operator with `word` to check if it returns `string`
    -If it does, return true
    -If it doesn't, return false.
// */


function vigCipher(word, cipher) {
  if (!isValidDataType(word)) return false;
  if (word === '') return '';

  const ALPHA_UPPERCASE = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z';

  const ALPHA_LOWERCASE = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  

}

function isValidDataType(word) {
  return (typeof(word) === "string");
 }

console.log(vigCipher([], 'meat') === false)
console.log(vigCipher({}, 'meat') === false)
console.log(vigCipher(98, 'meat') === false)
console.log(vigCipher('', 'meat') === '')