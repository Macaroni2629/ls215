// Caesar Cipher
// Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

// Examples:
/*

PROBLEM RESTATED: Write a function that implements the Caeser Cipher.

QUESTIONS: 
1) What is a "key"?  (It is how many letters to right shift.)
2) What is "ciphertext"?  (The encrypted plaintext.)
3) What about non alpha characters?  (Ignore them, but leave them there.)
4) What about spaces? (Ignore them, but leave them there.)
5) What about case sensitivity?  (If it's capitalized letter, shift it down to another capitalized word . And vice versa for lowercase letters.)
6) Is "A" at 1 or 0?  ("A" is at 0 because it's easier to start at 0 indexes.  Just do modulo with 25 instead of 26.)
7) What if you pass a negative number as the second parameter?  (RETURN ORIGINAL STRING)
8) What if second parameter is not a number? (RETURN ORIGINAL STRING)
9) What if second parameter is a special number? (RETURN ORIGINAL STRING)
10) What if second input is a decimal? (ROUND UP AND DO IT)
11) What if input is a string with just spaces? (RETURN AN EMPTY STRING)

RULES EXPLICIT:
1) Any other character that isn't a letter is left as is.
2) If the key value for the shifting exceeds the length of the alphabet, it wraps around from the beginning.
3) 

RULES IMPLICIT:
1) ?

EXTRA NOTES:
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

console.log(alphabet)

EXAMPLES/TEST CASES:
// simple shift
caesarEncrypt('A', 0);       // "A"
The key is 0, so it's shifted 0 spaces.
caesarEncrypt('A', 3);       // "D"
The key is 3, so it's shifted 3 letters down.
// wrap around
caesarEncrypt('y', 5);       // "d"
The key is 5, so it's shifted 5 letters down but since it's the end of the alphabet, it goes back to the beginning from `a` and returns `d`.
caesarEncrypt('a', 47);      // "v"
The key is 47, so since there are 26 letters in the alphabet, it goes through the alphabet twice essentially and returns `v`.
47 % 26 = 21 which is v

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
HAPPY PATH

UNHAPPY PATH (empty string, no argument, too many arguments, [], {}, null, undefined, Infinity, function)
console.log(caeserEncrypt('')) // ''
console.log(caeserEncrypt()) // false
console.log(caeserEncrypt([])) // false
console.log(caeserEncrypt({})) // false
console.log(caeserEncrypt(undefined)) // false
console.log(caeserEncrypt(Infinity)) // false
console.log(caeserEncrypt(function () {})) // false
INPUT(S):
  - String and a number
  - Intermediary Data Structures - need 2 arrays to hold capital and lowercase letters.
OUTPUTS:
  - String
ALGORITHM (break into problems + guard clauses):
  - Declare a function `caeserEncrypt` that takes a string `string` and a number `number`.
      - Helper function `isValidDataType`
        - Make sure that it's a string.  If it's not, return false.

      - Helper function `isValidDataType2` and `number`.
        - Make sure that it's a positive integer.  If it's not, return false.
        - If it is a number, check if it's an integer.
          -If it's not, round up and return it.
        
      - Helper function `isVal

      - Check if it's an empty string.  Return empty string if it is.

  - Declare 2 constants `UPPER` and `LOWER` that contains the letters `A` to `Z` and `a` to `z`.

  - Turn the string into an `arrayOfLetters`.  

  -Initialize `answer` to ''.

  - Iterate through the string, character by character.  
    - Check if the letter is uppercase or lowercase or NOT a letter
      -If it's not a letter just add it to `answer` unchanged.
    - Find the currentIndex by using `indexOf` and save in `currentIndex`.
    - Add `number` to `currentIndex` to make `newIndex`
    - Check if `newIndex` is greater than or equal to 26.  
      - If it is, do `newIndex` = newIndex % 26
    - Return either UPPER[newPosition] or LOWER[newPosition]
    - 

  - Join them all at the end.

  - Helper function `isValidDataType`
    -Return true if it's a valid Data type string, false if it's not
*/

function caesarEncrypt(string, number) {
  if (!isValidDataType(string)) return false;
  [boolean, number] = isValidDataType2(number);
  if (!boolean) return string;

  if (string === "") return "";
  let answer = '';

  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const UPPER = alpha.map((x) => String.fromCharCode(x));
  const LOWER = UPPER.slice().map(letter => letter.toLowerCase());
  
  let arrayOfLetters = [...string]

  arrayOfLetters.forEach(char => {
    if ((/[a-z]/).test(char)) {
      let currentIndex = LOWER.indexOf(char)
      let newIndex = currentIndex + number;
      if (newIndex >= 26) {
        newIndex = newIndex % 26;
      }
      answer += LOWER[newIndex]
    } else if ((/[A-Z]/).test(char)) {
      let currentIndex = UPPER.indexOf(char)
      let newIndex = currentIndex + number;
      if (newIndex >= 26) {
        newIndex = newIndex % 26;
      }
      answer += UPPER[newIndex];
    } else {
      answer += char;
    }
  })

  return answer;
}

function isValidDataType(string) {
  if (typeof(string) === "string") return true
  return false;
}

function isValidDataType2(number) {
  if (number > 0 && Number.isInteger(number)) {
    return [true, number]
  } else if (number > 0 && !Number.isInteger(number)) {
    number = Math.round(number);
    return [true, number]
  } else {
    return [false, null];
  }
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"
console.log(caesarEncrypt('B', 1.5))  // "D"

// wrap around
 console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
 console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
"Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

console.log(caesarEncrypt("a", 1)) // "b"
console.log(caesarEncrypt("b", 2)) // "d"
console.log(caesarEncrypt("_a", 1)) // "_b"

console.log(caesarEncrypt('', 1)) // ''
console.log(caesarEncrypt()) // false
console.log(caesarEncrypt([], 2)) // false
console.log(caesarEncrypt({}, 3)) // false
console.log(caesarEncrypt(undefined, 4)) // false
console.log(caesarEncrypt(Infinity, 5)) // false
console.log(caesarEncrypt(function () {})) // false
console.log(caesarEncrypt('hi', [])) // 'hi'
