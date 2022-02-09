// Now I Know My ABCs
// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument and returns true if the word can be spelled using the set of blocks, false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

// Examples:
/*

PROBLEM RESTATED: Write a function that takes a word string as an argument and returns true if the word can be spelled using the set of blocks, false otherwise.

QUESTIONS:
1) Can you use two letters from the same block?  (No.)
2) Can you use the same letter twice?  (No.)
3) What if the string contains punctuation or other non alpha characters or numbers? (Remove them, clean the string.) 
4) What if string contains spaces?  (Delete the spaces and then you can deal with the word.)
5) Does it have to be a real word?
6) What's the minimum length a word can be? (1 character)
7) What's the max length?  13 letters because that's how many blocks there are.


RULES EXPLICIT:
1) Letters are case-insensitive.
2) Return true if the word can be spelled using the set of blocks, false otherwise.

RULES IMPLICIT:
1) Max length is 13 letters since that's how many blocks there are.


EDGE CASES: 
1) Invalid data input like null, undefined, boolean, array, object, function
2) 


// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

EXAMPLES/TEST CASES:
HAPPY PATH
console.log(isBlockWord('HARE')) // false
console.log(isBlockWord('HA D')) // true
console.log(isBlockWord('$POG')) // true
console.log(isBlockWord('ZAGA')) // false

UNHAPPY PATH
console.log(isBlockWord([])) // false
console.log(isBlockWord({})) // false
console.log(isBlockWord(null)) // false
console.log(isBlockWord(undefined)) // false
console.log(isBlockerWord(3)) // false
console.log(isBlockerWord(NaN)) // false
console.log(isBlockerWord(-Infinity)) // false

INPUT(S):
  - String
  -Intermediate data structures--possibly an array to store the "blocks"
OUTPUTS:
  - boolean
  
ALGORITHM (break into problems + guard clauses):
  -Define a function `isBlockWord` that takes a `string`.
    -Pass `string` to helper function `validDataType` to see if it's not a string.
    -Uppercase all letters
    -Clean string - Pass to helper function to clean string called `cleanString`.  Remove non alpha characters.
  
    -Define a local variable `blocks` and set it equal to an array of subarrays containing all the blocks
      -Iterate through the blocks one at a time.
      - Create a Regex instance for each letter in the block
      - Save the array of matches in variables `a` and `b` 
        -To avoid having `null`, use || statement and have `a` or `b` point to empty array [] if there are no matches.
      - Write an || statement that makes sure one of the letters is used one or zero times and. the other one not at all.  And then write the opposite.
    
// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M 
*/

function isBlockWord(string) {
  if (!validDataType(string)) return false;
  string = string.toUpperCase();
  let cleanedString = cleanString(string);
  let blocks = [["B", "O"], ["X", "K"], ["D", "Q"], ["C", "P"], ["N", "A"], ["G", "T"], ["R", "E"], ["F", "S"], ["J", "W"], ["H", "U"], ["V", "I"], ["L", "Y"], ["Z", "M"]];
  
  return blocks.every(block => {
    let regex1 = new RegExp(`${block[0]}`, "gi");
    let regex2 = new RegExp(`${block[1]}`, "gi");
    let a = string.match(regex1) || [];
    let b = string.match(regex2) || [];
    return (a.length <= 1 && b.length === 0) || (a.length === 0 && b.length <= 1)
  })
  
}

function validDataType(string) {
  if (!(typeof(string) === 'string')) return false
  return true
}

function cleanString(string) {
  return string.replace(/[^a-z]/ig, '');
}


console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('HARE')) // false
console.log(isBlockWord('HA D')) // true
console.log(isBlockWord('$POG')) // true
console.log(isBlockWord('ZAGA')) // false

console.log(isBlockWord([])) // false
console.log(isBlockWord({})) // false
console.log(isBlockWord(null)) // false
console.log(isBlockWord(undefined)) // false
console.log(isBlockWord(3)) // false
console.log(isBlockWord(NaN)) // false
console.log(isBlockWord(-Infinity)) // false
