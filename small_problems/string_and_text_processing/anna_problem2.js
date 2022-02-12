// Your job is to write a function which increments a string at its end.
// If the string already ends with a number, the number should be incremented by 1.
// If the string doesn’t end with a number, the number 1 should be appended to the new string.



/*

PROBLEM RESTATED: Write a function that increments a string at its end.  

QUESTIONS:
1) What if the last character of a string is a space? (Just tack on a 1 to the new string.)
2) What about invalid data types like false, null, NaN, undefined, array, object, Infinity, etc? (Return false)
3) What if the last character of a string is punctuation? (Tack on a 1.)
4) What if the last character of a string is "0"? (Increment by 1.)
5) What if the last character of a string is "9"?  (Increment to 10.)
6) What if empty string is the argument? (Append 1)
7) What if no argument is passed? (Return false)

RULES EXPLICIT:
1) If the string already ends with a number, the number should be incremented by 1.
2) If the string doesn't end with a number, the number 1 should be appended to the new string.
3) 

RULES IMPLICIT:
1) If string ends in 0, increment to 1.
2) If string ends at 9, increment to 10.

EDGE CASES: 

EXAMPLES/TEST CASES:
console.log(incrementer('computer')); // 'computer1'
//String ends with a letter not a number, so append 1.
console.log(incrementer('computer1')); // 'computer2'
//String ends with 1, so increment number by 1.
console.log(incrementer('hello0')) // 'hello1'
console.log(incrementer('hello ')) // 'hello 1'
console.log(incrementer('hello9')) // 'hello10'

HAPPY PATH

UNHAPPY PATH

INPUT(S):
  - 

OUTPUTS:


  - 
ALGORITHM (break into problems + guard clauses):
  - 
*/

function incrementer(string) {
  if (!isValidDataType(string)) return false
  
  if (string === '') return "1"
  
  if (string.match(/[^0-9]$/)) {
    string = string + "1"
  } else if (string.match(/[0-9]$/)) {
    let number = string.match(/[0-9]$/).join('');
    number = Number(number);
    number += 1;
    string = string.slice(0, string.length - 1)
    string = string + number;
  } 
  return string
}

function isValidDataType(string) {
  if (typeof(string) !== "string") return false
  return true
}

console.log(incrementer(null)) // false
console.log(incrementer([])) // false
console.log(incrementer({})) // false
console.log(incrementer()) // false
console.log(incrementer(undefined)) // false
console.log(incrementer(NaN)) // false
console.log(incrementer(Infinity)) // false

console.log(incrementer('0')) // 1
console.log(incrementer('')) // 1
console.log(incrementer('hello0')) // 'hello1'
 console.log(incrementer('hello ')) // 'hello 1'
console.log(incrementer('hello9')) // 'hello10'
console.log(incrementer('bye7')) // 'bye8'
 console.log(incrementer('computer')); // 'computer1'
console.log(incrementer('computer1')); // 'computer2'
console.log(incrementer('hello19')); // 'hello110'