// Lettercase Percentage Ratio
// Write a function that takes a string and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

// Examples:

/*
Problem: Given a string, write a function that takes a string and returns an object that has 3 key value pairs, with the key being a classification that each character was put into, which is the choice of uppercase, lowercase, or neither.

rules/requirements:
1) The lowercase property key/property means percentagewise, how many characters are lowercase.
2) Same goes for uppercase, percentagewise, how many characters are uppercase.
3) If the character isn't a letter, then it's "neiter" and falls under that category.
4) the string will ALWAYS contain at least ONE character. (meaning, no empty strings passed in, and there's ALWAYS an argument passed in.)

implicit rules/questions
1) undefined data type - return empty object
2) null - return empty object
3) NaN - return empty object
4) any number at all - return empty object
5) Infinity - return empty object
6) no argument - return empty object
7) too many arguments - don't worry about it.
8) an array - return empty object
9) an object - return empty object
10) empty string - return empty object

input: string of at LEAST one character
intermediate Data types: array of subarrays [[uppercase: percentage][lowercase: percentage][neither: percentage]] (Object.fromEntries(argument))
output: an object with 3 keys lowercase uppercase neither and percentage 
key percentage format is 00.00 so go to the hundredths place, or two decimal places to the right of the dot.

questions:
1) can get invalid data types want to return an empty object
2) undefined

Examples/test cases:
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
10 characters total
5/10 are lowercase hence 50%
1/10 are uppercase hence 10%
4/10 are neither hence 40%

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
8 characters total
3/8 characters are lowercase hence 37.5% are lowercase
3/8 characters are uppercase hence 37.5%
2/8 are neither so 25%

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
3 characters total
3/3 are "neither so 100%"

Data structures:
String
Array of subarrays
object

Algorithm:
-Declare a function named `letterPercentages` taking parameter `string`.
  -Pass to helper function `validDataType` to reject invalid data types
    -Return {} if !validDataType
    
  -If string === '' return {}
    
  -Tabulate the characters
    -Pass 'string' to `countCharacters` helper method
    -Save in `scoreboard` variable
    
  -Format the values to the right percentages
    -Pass to helper method `formatPercentages`
    -Save in `answer`
    
  -Return `answer`
    
-Helper function `formatPercentages` passing in `scoreBoard` and `string`
  -Find total characters in the original string by getting string.length to `stringLength`
  
  -Declare `arrayOfKeys` = Object.keys(scoreBoard);
  
  -Iterate through `arrayOfKeys`, meaning neither, then uppercase, then lowercase
    -Mutate scoreBoard
      -reassign the value of neither to save this in variable `percentage `(count / stringLength)  .toFixed(2)
      - percentage = percentage.toFixed(2)
    
    
-Helper function `validDataType`
  -Check if typeof(string) === string
    -Return false if not
    
-Helper function `countCharacters`
  -Declare an object `scoreBoard` with 3 properties: uppercase, lowercase, neither and set all values to 0.
  
    -Iterate through string, character by character by first converting it to an array of characters
    -Do if else statements so they stop at one place.
    -Find all non alpha characters, 
      -Tabulate in. theobject
    -Find uppercase letters
      -Tabulate them in the object

      
    -Find lowercase letters
      -Tabulate them
      -Pass to helper method `checkLowerCase`
  
   Return `scoreBoard`
   
-Helper function `checkIfAlpha` pass `scoreBoard`
  -/[^a-z]/ig.test(char)
  -If true, increment neither by `1`

*/

// -Helper function `formatPercentages` passing in `scoreBoard` and `string`
//   -Find total characters in the original string by getting string.length to `stringLength`
  
//   -Declare `arrayOfKeys` = Object.keys(scoreBoard);
  
//   -Iterate through `arrayOfKeys`, meaning neither, then uppercase, then lowercase
//     -Mutate scoreBoard
//       let originalCount = scoreBoard[letterType]
 //         -Reassign at that key  (originalCount / stringLength) * 100
//       - percentage = percentage.toFixed(2)
    
    

function letterPercentages(string) {
  if (!validDataType(string)) return {};
  
  if (string === '') return {};
  
  let scoreBoard = countCharacters(string);
  
  let formattedScoreBoard = formatPercentages(scoreBoard, string)
  return scoreBoard;
}

function formatPercentages(scoreBoard, string) {
  let stringLength = string.length;
  
  let arrayOfKeys = Object.keys(scoreBoard);
  
  arrayOfKeys.forEach(letterType => {
    let originalCount = scoreBoard[letterType]
    scoreBoard[letterType] = ((originalCount / stringLength) * 100).toFixed(2)
  })
  return scoreBoard;
}

function checkUpperCase(char, scoreBoard) {
  if (char === char.toUpperCase()) {
    scoreBoard["uppercase"] += 1;
  }
}

function checkIfAlpha(char, scoreBoard) {
  if (/[^a-z]/gi.test(char)) {
    scoreBoard["neither"] += 1;
  }
}

function countCharacters(string) {
  let scoreBoard = {lowercase: 0, uppercase: 0, neither: 0};
  
  [...string].forEach(char => {
    if (/[^a-z]/gi.test(char)) {
      checkIfAlpha(char, scoreBoard)
    } else if (/[A-Z]/g.test(char)) {
      scoreBoard["uppercase"] += 1;
    } else if (/[a-z]/g.test(char)) {
      scoreBoard["lowercase"] += 1;
    }
  })
  return scoreBoard;
}

function validDataType(string) {
  if (typeof(string) === "string") return true
  return false;
}

console.log(letterPercentages('abCdef 123'));
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
console.log(letterPercentages('12abABCD')) // {lowercase: "25.00", uppercase: "50.00", neither: "25.00"}

console.log(letterPercentages('')) //{}
console.log(letterPercentages(null))  // {}
console.log(letterPercentages(NaN)) // {}
console.log(letterPercentages(8)) // {}
console.log(letterPercentages(Infinity)) // {}
console.log(letterPercentages()) // {}
console.log(letterPercentages([])) // {}
console.log(letterPercentages({})) // {}

// 55 minutes
// Going through the examples, better, but algorithm, better, still too high level. Spend more time there.  Good job correcting your mistakes.
// Go through specific example while going 

//Be even more explicit with algo.
//