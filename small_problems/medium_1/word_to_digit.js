// Word to Digit
// Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.



// "Please call me at 5 5 5 1 2 3 4. Thanks."
/*
PROBLEM RESTATED: Write a function that takes a sentence string as an argument and returns that string with every occurrence converted to its corresponding digit character.

QUESTIONS:
1) What if another data type that's a string passed in? (Return false)
2) What if empty string is passed in? (Return empty string)
3) What if string digits are passed in? (Leave them there.)
4) What if repeated words are added like ('fourfourfive')?  (There won't be.)
5) What if there are dashes between word numbers like ('four-four')? (There won't be.)

RULES EXPLICIT:
1) 

RULES IMPLICIT:
1) 

EDGE CASES: 

EXAMPLES/TEST CASES:
wordToDigit('Please call me at five five five one two three four. Thanks.');// "Please call me at 5 5 5 1 2 3 4. Thanks."
Every spelled out word was converted to a digit.
HAPPY PATH

wordToDigit('zero zero zero zero one') // '0 0 0 0 1'
wordToDigit('eight...') // '8...'
wordToDigit([]) // false
wordToDigit('0 123') // '0 123'

UNHAPPY PATH (empty string, no argument, too many arguments, [], {}, null, undefined, Infinity, function)

INPUT(S):
  - String

  -Intermediate Data Structure: Array
OUTPUTS:
  - String
ALGORITHM (break into problems + guard clauses):
  - Declare a function `wordToDigit` taking parameter `string`
    -Pass `string` to helper function `isValidDataType`
      -Return false if it's not a string
      
    -Return empty string if it's an empty string
    
    -Declare array const `arrayOfNumbers` with english spellings as elements
    
    -Split string into `answerArray`, split on the space.
    
    -Iterate through `answerArray` with `map`.
      -Check if the word is an english spelling of a word number
        -If it is, return the digit version
        -If it's not, return the word.
    
    -Return the string joined.
  - Helper function `isValidDatType`
    -Return false if it's not a string
*/ 

function wordToDigit(string) {
  if (!(isValidDataType(string))) return false
  
  if (string === '') return '';
  
  const arrayOfNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  
  let answerArray = string.split(' ');
  
  return answerArray.map(word => {
    if (/(one|two|three|four|five|six|seven|eight|nine)/.test(word)) {
      if  ((/[^a-z]/).test(word.slice(-1))) {
        let punctuation = word.slice(-1)
        return arrayOfNumbers.indexOf(word.slice(0, word.length - 1)) + punctuation;
      }
      return arrayOfNumbers.indexOf(word)
    } else {
      return word;
    }
  }).join(' ')
}
  
function isValidDataType(string) {
  if (typeof(string) === "string") return true
  return false
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
