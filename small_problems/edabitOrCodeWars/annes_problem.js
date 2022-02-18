/*
Your task is to take a string of ranges and spread them out into individual
digits within an array.

The ranges are consecutive. You should write a function that will convert a
string of ranges into an array. A range, or series of consecutive numbers,
will be represented as two numbers separated by an underscore, a range of
one just by the number its self and multiple ranges separated by commas.

For example,
The range '5_9' should return an array [5, 6, 7, 8, 9]
The range '6' would just be [6]
The range '3_6,9' should return an array [3, 4, 5, 6, 9]

Using the above system, you should write a function:
toArray - convert a range string back to an array

Problem: Take a string of ranges and spread them out into individual digits within an array.

rules/requirements:
1) Ranges are consecutive, meaning a range IS a series of consecutive numbers.
2) can have a range of one, which is just the digit by itself with no underscore
3) commas imply multiply ranges.
4) Empty string input will output empty array.



questions:
1) input can get invalid input. If it's not a string, return "Invalid input"
2) Valid strings - can contain digits, underscores, commas.  Can also contain spaces and dashes for negative numbers.

Examples/test cases:

The range '5_9' should return an array [5, 6, 7, 8, 9]
_ underscore means enumerate the values from first number to last number, inclusive of last number
The range '6' would just be [6]
It's just by itself, no underscore, so just return that individual digit in the array
The range '3_6,9' should return an array [3, 4, 5, 6, 9]
This is a mix of the first two cases, an in individual number it self (9) and a range which is 3, 4, 5, 6

Data structures:
input:A string, containing digits, possibly underscores, possibly commas
intermediate: an array, Numbers, RegEx
output: an array object containing possibly digits

Algorithm:
-Declare a function named `toArray` taking parameter `stringRange`
  -Helper function `isValidDataType(stringRange)`
    -If false, return "Invalid input"
  
  -If `stringRange` === `` return [];
  
   -Declare variable `answer` = []
  
  -Split the string on `, ` save in `arrayOfRanges`
 
    -Iterate through `arrayOfRanges`, element by element.
    -Check if element.includes(_)
      -If it doesn't, push the number version of the element immediately into `answer`
      -If it does, pass to helper function `enumRange` passing the `element` and pass `answer`
      
    
  -Return `answer`

-Helper function `enumRange` '-5_-1'  
  -Declare variable `arrayOfRanges`, split on "_"
  -Declare firstNum = Number(arrayOfRanges[0])
  -Declare secondNum = Number(arrayOfRanges[1])
  
  for loop looping from firstNum to lastNum
    -eNumerate the numbers
    -push into `answer`

-Helper function `isValidDataType`
  -if typeof stringRange === `string` return true
*/


// Should return an array
function toArray(str) {
  if (!isValidDataType(str)) return "Invalid input";
  
  if (str === '') return [];
  
  let answer = [];
  
  let arrayOfRanges = str.split(/, /g);
  
  arrayOfRanges.forEach(element => {
    if (element.includes("_")) {
      enumRange(element, answer)
    } else {
      answer.push(Number(element))
    }
  })
  
  return answer;
}

function enumRange(element, answer) {
  let arrayOfRanges = element.split("_")
  let firstNum = Number(arrayOfRanges[0])
  let secondNum = Number(arrayOfRanges[1])
  
  for (let i = firstNum; i <= secondNum; i++) {
    answer.push(i)
  }
  return answer;
}

function isValidDataType(str) {
  if (typeof str === 'string') return true
  return false
}

console.log(toArray('5_9')) // [5, 6, 7, 8, 9]
console.log(toArray('6')) // [6]
console.log(toArray('3_6, 9')) // [3, 4, 5, 6, 9]
console.log(toArray('-4_0')) //
console.log(toArray('5_10')) // [5, 6, 7, 8, 9, 10]
console.log(toArray('3_8, 9, 10')) // [3, 4, 5, 6, 7, 8, 9, 10]

console.log(toArray('')) // []

console.log(toArray()) // "Invalid input"
console.log(toArray([])) // "Invalid input"
console.log(toArray(null)) //"Invalid input"
console.log(toArray(undefined)) // "Invalid input"
console.log(toArray(Infinity)) // "Invalid input"
console.log(toArray(NaN)) // "Invalid input"
console.log(toArray(function () {})) // "Invalid input"
console.log(toArray(/b/)) // "Invalid Input"
console.log(toArray(9)) // "Invalid input"
