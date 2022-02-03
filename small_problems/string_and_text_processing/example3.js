// Problem Description
// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

//Problem: Given a bunch of letter blocks, write a function that returns true if the word can be spelled using the letter blocks.

// Examples:
// input: String of characters
// output: Boolean
// explicit requirements : 
// -You cannot use both letters from any given block.
// -You can only use each block once.
// -Return true or false
// -Case insensitive
// implicit requirements after questions?:
// -The max length of the string is 13 characters long because there's that many blocks.
// -the minimum length of the string is 1 character long.
// Questions:
// -Do I have to use all of the blocks? (No.)
// -What if I have non letter characters? (Return false)
// -What if I have a letter that's not on one of the blocks?  (Return false)
// -What if the wrong data type is input?  (Return false)
// -What if empty string is input? (Return false)
// -What if there's an empty space in the word? (just delete the empty space)
 
// Examples (write own and go through each one) (also write more requirements based on examples)


// Data structure:
//Input: string of characters
//output: boolean

// Algo 
/*
-Create data structure to represent the letter blocks for iteration
  -Create let variable `blocks` to an array of strings.  Each element represents the letters glued together.  example: ['BO', 'GT', etc....]
  
-Make a copy of `blocks` for keeping track of deletions later.  call it `copyBlocks`

-Define function isBlockWord that takes parameter `string`

-Check for valid inputs
  -Send to helper method to check if anything isn't a letter or a string or a space.
    -Return false if there's something there that isn't a letter or a space

-Remove all spaces and uppercase all letters

-Iterate through the string, one character at a time in the outer loop. Consider `for loop`. `i` is the variable for the outer loop, start at 0, condition being `i` is less than string.length, and increment `i` by 1 every iteration
  -Create an inner loop that's also a `for loop`. Use `j` as variable, initialize to 0, condition being `j` is less than `blocks` array.length.
  
    -Evaluate the expression `blocks[j].includes(string[i])`
      -If this evaluates to true, delete that string from `copyBlocks`
        -Execute this command: copyBlocks.splice(j, 1); and save in variable `removed`
          -Check if array returned is empty
            -If it is, return false
*/
//let blocks = ['BO', 'GT', 'VI', 'XK', 'RE', 'LY', 'DQ', 'FS', 'ZM', 'CP', 'JW', 'NA', 'HU']
function isValidInput(string) {
  let regex = new RegExp(/[^a-z\w]/)
  if (regex.test(string)) {
    return false;
  }

  return true;
}



function isBlockWord(string) {
  let blocks = ['B', 'O', 'G', 'T', 'V', 'I', 'X', 'K', 'R', 'E', 'L', 'Y', 'D', 'Q', 'F', 'S', 'Z', 'M', 'C', 'P', 'J', 'W', 'N', 'A', 'H', 'U']
  if (typeof(string) !== ('string')) return false;
  if (!string)  return false
  if (string === '') return false
  if (!isValidInput(string)) return false;
  string = string.toUpperCase();
  string = string.replace(' ', '');
  let perfect = true;

  let arrayOfChars = [...string];
  arrayOfChars.forEach(char => {
    if (blocks.includes(char)) {
      let index = blocks.indexOf(char)
      if (index % 2 === 0) {
        blocks.splice(index, 1);
        blocks.splice(index, 1);
      } else {
        blocks.splice(index, 1);
        blocks.splice(index - 1, 1);
      }
    } else {
      perfect = false;
    }
  })
  return perfect
}

// console.log(isBlockWord('BATCH'));      // true
// console.log(isBlockWord('BUTCH'));      // false
// console.log(isBlockWord('jest'));       // true
// console.log(isBlockWord('LA BUTCH'))    // false
// console.log(isBlockWord('GAG'));        // false
// console.log(isBlockWord(false));        // false
// console.log(isBlockWord('00$2'));       // false
// console.log(isBlockWord(''));           // false

//Nat
// console.log(isBlockWord(''));           // false
// console.log(isBlockWord());             // false
// console.log(isBlockWord(null));         // false
// console.log(isBlockWord({}));           // false
//console.log(isBlockWord(() => "hey"));  // false
//console.log(isBlockWord('B4UTCH6'));    // false
//console.log(isBlockWord('B*UTCH_'));    // false
//console.log(isBlockWord('BAATCH'));     // false
// console.log(isBlockWord('BUTCH'));      // false
// console.log(isBlockWord('jest'));       // true
// console.log(isBlockWord('BATCH'));      // true


//Anne
//console.log(isBlockWord('BATCH') === true);      // true
//console.log(isBlockWord('BUTCH')  === false)      // false
// console.log(isBlockWord('jest') === true);       // true
// console.log(isBlockWord('K') === true);          // true
// console.log(isBlockWord('BaSk') === true);       // true
// console.log(isBlockWord('MUSIC') === true);      // true
// console.log(isBlockWord('mutiny') === true);     // true
// console.log(isBlockWord('quEst') === true);      // true
// console.log(isBlockWord('Really') === false);     // false
// console.log(isBlockWord('movie') === false);      // false
// console.log(isBlockWord('sUsHi') === false);      // false
// console.log(isBlockWord('cookie') === false);     // false
// console.log(isBlockWord('BlocK') === false);      // false

// // assuming we clean str and just keep letters cases:
// console.log(isBlockWord('_ba sk_') === true);       // true
// console.log(isBlockWord('_/580K_') === true);       // true
// console.log(isBlockWord('MuS1C') === true);         // true
// console.log(isBlockWord('A5') === true);            // true
// console.log(isBlockWord('.q.u.E.s.t.') === true);   // true
// console.log(isBlockWord('/Ba  TCH/') === true);     // true
// console.log(isBlockWord('(Bu - TCH*') === false);    // false
// console.log(isBlockWord('(bobA123*') === false);     // false
// console.log(isBlockWord('@tasks*') === false);       // false
// console.log(isBlockWord('#4{box]') === false);       // false


// // edge cases:
// console.log(isBlockWord('') === false);          // false
// console.log(isBlockWord([]) === false);          // false
// console.log(isBlockWord({}) === false);          // false
// console.log(isBlockWord(null) === false);        // false
// console.log(isBlockWord(undefined) === false);   // false
// console.log(isBlockWord(NaN) === false);         // false
// console.log(isBlockWord(' ') === false);         // false
// console.log(isBlockWord(/jest/) === false);      // false
