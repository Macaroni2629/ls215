/*
https://edabit.com/challenge/wP54uMbnHEhaubPgQ
Shifting Letters Cypher
The function is given three parameters:

"alphabet" a string of 26 lower-case letter,
"s" a string of lower-case letters to be encoded,
`shifts` a list of integers of the same length as "s".

To encode the string one has to perform n rounds (the length of "s"):

First round – shift first letter s[0] by shifts[0] amount according to the "alphabet". The shift is circular, i.e. for ordinary alphabet and shift == 1 "z" -> "a" is applied.

Second round – shift two first letters new s[0], s[1] by shifts[1] amount.

Third round – shift three first letters new s[0], new s[1], s[2] by shifts[2] amount.
Continue shifting increasing amount of letters.

Last n-th round – shift all letters by shift[n-1] amount according to the "alphabet".
Return the encoded string of the same length as s.


Examples
shiftChars("abcdefghijklmnopqrstuvwxyz", "abc", [1, 1, 1]) ➞ "ddd"
"a" is shifted down so "a" is now "b"
b -> c and b -> c ====> ccc
c -> d c-> d c -> ====> ddd
// a is shifted by 3 to d  
// b is shifted by 2 to d
// c is shifted by 1 to d

possible pattern: for first element-- add up all the elements inside, shift that many
second element --add up all elements from array[1] to the end
...
last element shift[n - 1]

shiftChars("adbecfghijklmnopqrstuvwxyz", "abc", [1, 1, 1]) ➞ "ecf"
a -> d  ==> dbc
d -> b   b --> e ==> bec
b --> e  e --> c. c --> f. ecf

// a is shifted by 3 to e
// b is shifted by 2 to c
// c is shifted by 1 to f

shiftChars("abcdefghijklmnopqrstuvwxyz", "yywygs", [1, 1, 1, 1, 1, 1]) ➞ "edabit"
// y is shifted by 6 to e. Notice circular shift.
// y is shifted by 5 to d. Notice circular shift.
// w is shifted by 4 to a. Notice circular shift.
// y is shifted by 3 to b. Notice circular shift.
// g is shifted by 2 to i
// s is shifted by 1 to t

shiftChars('vortlxngidwmpzakebhcsjufqy', 'dmhmv', [5, 2, 3, 4, 1]) ➞ "qjveo"
// d is shifted by 15 to q
// m is shifted by 10 to j
// h is shifted by 8 to v. Notice circular shift.
// m is shifted by 5 to e
// v is shifted by 1 to o

/*
Problem: The function is given 3 parameters:
1st parameter: alphabet
2nd parameter: "s" a set of lowercase strings to be encoded
3rd parameter: `shifts` a list of integers the same length as `s`

To encode the string, you have to perform s's length rounds.

First round shift-- shift `s`[0] shifts[0] number of characters down.

second round shift-- shift s[0] and s[1] by shifts[1] characters

third shift three first letters new s[0], new s[1], s[2] by shifts[2] amount.


rules/requirements:
1) the alphabet is circular, i.e., after 'z', start back at 'a'
2) Summary of shifting: 
Given `alphabet` and `stringToEncode`, then find the index of the character in the string.

Slice from that index to the end of the `shift` array.  Add up all those elements. Save in `shiftAmount`

Find that in the alphabet and return that new character

input: `alphabet` in string form, `string`, and `array`
output: an encoded string

questions:

Examples/test cases:

Data structures:
Input: strings, arrays
intermediate: an array to store the alphabet
output: string

Algorithm:
-Declare a function `shiftChars` with parameters `alphabet`, `s`, and `shifts`
 -Declare const `ALPHA` assign to [...alphabet].
 
 -Iterate through the string, character by character, with index , with `map` (and turn the string into an array of characters)
  -declare `shiftAmount` make that the return value of helper function `findShiftAmount` passing in `shifts` array`, `index`
  -declare newIndex make it the sum of `shiftAmount` and `index` (NOTE with index being the index of where the letter sits in `alphabet` NOT the string `s`)
  - Use `index` from map method to pass to `findShiftAmount` to know where to slice.
  -Find the index of where the letter sits in the `alphabet` and call it `oldIndex`
  -Make sure that I'm not off the alphabet
    -newIndex = newIndex % 26
  -return ALPHA[newIndex]
  
  -Join everything at the end  and return it
-Helper function `findShiftAmount`
  -Given `shifts` array, save in `slicedArray` shifts.slice(index)
  -Declare `total` 
  -Add  elements up in `slicedArray` with a `for loop`
  -Return `total` which is an integer
  
PEDAC : 39.33
PED: 20 min
A:  5 min 
C:  14 min 25 sec


Notes:
- Great communication
- Parsed through the problem carefully and went through each test case given
- Great at debugging — didn’t get flustered
- Verbalizes expected return/log before running the code 
- Updates algorithm accordingly 
- Great focus

*/

function shiftChars(alphabet, s, shifts) {
  const ALPHA = [...alphabet];
  
  return [...s].map((char, index) => {
    let oldIndex = ALPHA.indexOf(char)
    let shiftAmount = findShiftAmount(shifts, index)
    let newIndex = shiftAmount + oldIndex;
    newIndex = newIndex % 26
    return ALPHA[newIndex]
  }).join('')
}

function findShiftAmount(shifts, index) {
  let slicedArray = shifts.slice(index);
  let total = 0;
  for (let i = 0; i < slicedArray.length; i++) {
    total += slicedArray[i]
  }
  return total;
 }

console.log(shiftChars("adbecfghijklmnopqrstuvwxyz", "abc", [1, 1, 1]))// ➞ "ecf"
console.log(shiftChars("abcdefghijklmnopqrstuvwxyz", "yywygs", [1, 1, 1, 1, 1, 1])) // "edabit"

console.log(shiftChars('vortlxngidwmpzakebhcsjufqy', 'dmhmv', [5, 2, 3, 4, 1])) // "qjveo"
console.log(shiftChars("abcdefghijklmnopqrstuvwxyz", "abc", [1, 1, 1])) // "ddd"