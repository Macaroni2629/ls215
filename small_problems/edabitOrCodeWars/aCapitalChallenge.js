//https://edabit.com/challenge/gjKemfXwedir9y7D4

// A Capital Challenge
// Given two strings, s1 and s2, select only the characters in each string where the character in the same position in the other string is in uppercase. Return these as a single string.

// To illustrate, given the strings s1 = "heLLo" and s2 = "GUlp", we select the letters "he" from s1, because "G" and "U" are uppercase. We then select "lp" from s2, because "LL" is in uppercase. Finally, we join these together and return "help".

/*
Problem:

rules/requirements:

input:
output:

questions:

Examples/test cases:

Data structures:

Algorithm:
-Figure out which string is the shorter one.  Assign the shorter one `shorter` and the longer one `longer`.  Pass to helper function `whichOneIsShorter`

  -Iterate through the shorter one, character by character.  save in [shorter, longer]
  
  -Declare answer to ``
  
  -Check if one of the characters is lowerCase and one is upperCase
    -Pass both characters to helper function `oneLowerOneUpper`
    
  -Return answer;
    
-Helper function `whichOneIsShorter` 
  -Figure out  which one is shorter

-Helper function `oneLowerOneUpper`
  -Check if one is upper and one is lower
    -If this is true, add to `answer` the lowercase character
*/

function selectLetters(string1, string2) {
  let [shorter, longer] = whichOneIsShorter(string1, string2);
  
  let answer = ''
  [...shorter]forEach((char, index) => {
  oneLowerOneUpper(answer, char, string2[index]);
  })
}

function oneLowerOneUpper(answer, char1, char2) {
  if (char1.toUpperCase === char1 && char2.toLowerCase )
}

function whichOneIsShorter(string1, string2) {
  let shorter;
  let longer;
  if (string1.length < string2.length) {
    shorter = string1;
    longer = string2
  } else {
    shorter = string2;
    longer = string1;
  }
  return [shorter, longer];
}


console.log(selectLetters("heLLO", "GUlp")) // "help"

// console.log(selectLetters("1234567", "XxXxX")) //➞ "135"

// console.log(selectLetters("EVERYTHING", "SomeThings")) //  "EYSomeThings"
// Notes
// The strings don't have to be the same length.
// Strings can contain non-alphabetic characters.

function selectLetters(s1, s2) {
  let select = (x,y) => x.split("").filter((c,i)=>/[A-Z]/.test(y[i])).join("");
  return select(s1, s2) + select(s2, s1);
}