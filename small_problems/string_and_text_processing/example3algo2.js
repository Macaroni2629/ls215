/* Algorithm attempt part 2
-Define a function `isBlockWord` with parameter `string`.
  -Declare const BLOCKS to hold array of strings, with each string containing the letter pairs.  One letter is at index 0, and one letter is at index 1.
  
  -Upcase the string

  -Reject invalid data types
    -Pass `string` to helper method `invalidDataType`
    -Return true if valid data type.
  
  -Clean the string
    -Pass `string` to helper method `cleanString`
    -return as variable `cleaned_string`.

  -Check if string is empty.  If it is, return false.

  -Use `for loop` to iterate through `cleaned_string`.
    -initialize and `answerString` to ``.
    -Inside an inner `for loop`, iterate through `BLOCKS`.
      -Send to helper method `doesStringIncludeChar` and the char being iterated over
      -If the helper method returns true, add letterPAIR to `answerString`
      -If helper method returns false, do nothing.

  At end of function, write equality statement evaluating strict equality between
  `answerString` and [...new Set(answerString)].join('');

-doesStringIncludeChar helper method
  -Use the string from `BLOCKS` passed in and the char passed in to return a boolean indicating if the string includes the char or not.

-Invalid Data Type helper method with parameter `string`
  -Use `typeof` operator with argument `string`
  -Check if the typeof operator returns `string`
  -If it does, return true

-Clean String helper method with parameter `string`
  -Remove anything that isn't a letter using `replace` and replace with empty string ''
  -Also remove empty spaces and replace with ''
  -Uppercase all the letters
  -Return string cleaned

*/
function validDataType(string) {
  return (typeof(string) === 'string');
}

function cleanString(string) {
  let cleaned = string.replace(/[^a-z]/ig, '');
  let cleaned2 = cleaned.replaceAll(' ', '');
  let cleaned3 = cleaned2.toUpperCase();
  return cleaned3;
}

function doesStringIncludeChar(block, char) {
  return (block.includes(char))
}

function isBlockWord(string) {
  let blocks = ['BO', 'GT', 'VI', 'XK', 'RE', 'LY', 'DQ', 'FS', 'ZM', 'CP', 'JW', 'NA', 'HU']
  if (!validDataType(string)) return false
  string = string.toUpperCase();
  
  let cleanedString = cleanString(string)
  
  if (cleanedString === '') return false
  
  let answerString = ''
  
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < blocks.length; j++) {
     if (doesStringIncludeChar(blocks[j], string[i])){
       answerString += blocks[j];
     }
    }
  }

  return answerString === [...new Set(answerString)].join('')
  }



//  console.log(isBlockWord('BATCH'));      // true
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
// console.log(isBlockWord(() => "hey"));  // false
// console.log(isBlockWord('B4UTCH6'));    // false
// console.log(isBlockWord('B*UTCH_'));    // false
// console.log(isBlockWord('BAATCH'));     // false
// console.log(isBlockWord('BUTCH'));      // false
// console.log(isBlockWord('jest'));       // true
// console.log(isBlockWord('BATCH'));      // true


//Anne
// console.log(isBlockWord('BATCH') === true);      // true
// console.log(isBlockWord('BUTCH')  === false)      // true
// console.log(isBlockWord('jest') === true);       // true
// console.log(isBlockWord('K') === true);          // true
// console.log(isBlockWord('BaSk') === true);       // true
// console.log(isBlockWord('MUSIC') === true);      // true
// console.log(isBlockWord('mutiny') === true);     // true
// console.log(isBlockWord('quEst') === true);      // true
//console.log(isBlockWord('Really') === false);     // false
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
//  console.log(isBlockWord(' ')  === false);         // false
// console.log(isBlockWord(/jest/) === false);      // false
