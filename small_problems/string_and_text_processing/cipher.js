// Problem Description
// Implement encoding and decoding for the rail fence cipher.

// The Rail Fence cipher is a form of transposition cipher that gets its name from the way in which it's encoded. It was already used by the ancient Greeks.

// In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence, then moving up when we get to the bottom (like a zig-zag). Finally the message is then read off in rows.

// For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .
// Then reads off:

// WECRLTEERDSOEEFEAOCAIVDEN
// To decrypt a message you take the zig-zag shape and fill the ciphertext along the rows.

// ? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// The first row has seven spots that can be filled with "WECRLTE".

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// Now the 2nd row takes "ERDSOEEFEAOC".

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// Leaving "AIVDEN" for the last row.

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .
// If you now read along the zig-zag shape you can read the original message.
/*
// PROBLEM RESTATED: Implement encoding and decoding for the rail fence cipher.

// QUESTIONS:
1) Do we have to be able to print out that output with the 3 dots on 3 lines? (no, that's just showing the encoding process.)
2) What is a rail fence cipher?   (the message is written downwards on successive "rails" of an imaginary fence, then moving up when we get to the bottom (like a zig-zag). Finally the message is then read off in rows.)
3) What happens to the spaces in the input?  How do you decode the spaces once they're gone? (For simplicity, the spaces are just essentially ignored for the decoding process in order to simplify the problem.)
4) We have to encode AND decode, meaning another function that decodes it back to the original sentence? (yes)
5) Can the number of rails vary? (yes.)


// RULES EXPLICIT:
1) The message is written downwards on successive rails, then moving up when we get to the bottom, kind of like written diagonally in a word search that zigs and zags between 3 lines of text very uniformly.
2) 

// RULES IMPLICIT:
1) Only strings with spaces and alpha characters allowed.
2) It starts going diagonally down first in terms of zig/zag.
3) Never goes straight down or horizontal UNLESS it's one rail.

// EDGE CASES: 
1) What if there are non alpha characters, like punctuation? (Delete them)
2) What if empty string is input? (output false)
3) What if empty space is input? (output false)
4) What about invalid data types? (output false)

// EXAMPLES/TEST CASES:
// HAPPY PATH
When it's one rail, the encoding is like the word itself. so 'WORD' => ???? => 'WORD' encoded
When it's two rails, the encoding is like this:
'W?R?'
'?O?D'
=> WROD

When it's 3 rails, the encoding is like this:
'W???'
'?O?D'
'??R?'
=> WODR
4 rails:
'W???'
'?O??'
'??R?'
'???D'
=> WORD

// UNHAPPY PATH
-Any invalid

// INPUT(S)/OUTPUTS:
  Encoding
//   - String with spaces input
    - String with no spaces output
  Decoding
    -String
    -String
//   - 
// ALGORITHM (break into problems + guard clauses):
//  ENCODING
// -Define a function `encode` with 2 parameters, `string` and `numberOfRails`.
    -Helper function `isValidDataType`
    -Helper function `cleanString` to remove punctuation and spaces and non alpha characters and numbers
    -Invoke helper method `createRails` passing `numberofRails`. Save in `answer`
    -Each subarray represents a rail/row.
    
    
  -Iterate over the given `string`, with `index`
    -let subarrayNumber = index % numberOfRails
    -answer[subarrayNumber].push(string[i])
    
  -Join all the subarrays at the end.
    
    
  -Helper method `createRails` takes parameter `numberOfRails`
    -Declare `holder` to `new Array(numberOfRails).fill([])`
    -Return to main method.

// */
function isValidDataType(string) {
  if (typeof(string) === 'string') return true
  return false
}

function cleanString(string) {
  return string.replace(/[^a-z]/ig, '')
}

function createRails(numberOfRails) {
  numberOfRails = numberOfRails - 1
  let holder = new Array
  for (let i = 0; i <= numberOfRails; i++) {
    holder.push([])
  }
  return holder;
}

function encode(string, numberOfRails = 3) {
  if (numberOfRails === 1) return string;
  if (!isValidDataType(string)) return false
      
  let cleanedString = cleanString(string);
  
  let answer = createRails(numberOfRails);
  numberOfRails = numberOfRails - 1;
  let upOrDown = "DOWN";
  string = [...string];
  let currentRailNum = 0;
  let i = 0;
  while (i < cleanedString.length) {
    answer[currentRailNum].push(cleanedString[i]);
    if (currentRailNum === numberOfRails) {
      upOrDown = "DOWN";
    } else if (currentRailNum === 0) {
      upOrDown = "UP";
    }

    if (upOrDown === "UP") {
      currentRailNum += 1;
    } else {
      currentRailNum -= 1;
    }
    i += 1;
  }

  let b = answer.map(subarray => subarray.join(''))
  let c = answer.join('')
  return c.replaceAll(',', '')
}


//console.log(encode("WEAREDISCOVEREDFLEEATONCE", 5)) //=== 'WCLEESOFECAIVDENRDEEAOERT');
// console.log(encode('ABCDEFGHIJKLMNOP', 1) === 'ABCDEFGHIJKLMNOP');
//console.log(encode('WEAREDISCOVEREDFLEEATONCE') === 'WECRLTEERDSOEEFEAOCAIVDEN');
// console.log(encode('XOXOXOXOXOXOXOXOXO', 2) === 'XXXXXXXXXOOOOOOOOO');
// console.log(encode('THEDEVILISINTHEDETAILS', 3) === 'TEITELHDVLSNHDTISEIIEA');
// console.log(encode('$WO R D', 3) === "WODR");