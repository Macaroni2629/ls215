// For example, the problem is ‘Write a function called doubler that doubles every value in an array’

// One test case: doubler([5, 4]) // [10, 8]

// So one question could be - do I need to account for negative numbers

// If you decide to say yes - code according to that. If not, also fine but let me know so I can tell which questions you’ve asked.
/*
PROBLEM RESTATED: Write a function that doubles every value in an array.


QUESTIONS:
-Questions regarding specifically to the data type passed in: (not talking about when these data types are inside arrays.)
1) What about strings like "a"?  (Return false because it's not an array.)
2) What if an empty string is the value?  (Return false because it's not an array)
3) What if it's an empty space?  (Return false because it's not an array)
4) What if it's an object? (Return false because an object isn't an array.)
5) What if undefined is the value? (Return false because it's not an array.)
6) What if NaN is the value? (Return false because it's not an array.)
7) What if it's Infinity?  (Return false because it's not an array.)
8) What if the value is 0?  (Return false because it's not an array)
9) What if it's nested arrays like [['a']]?  (Return [['a'],['a']]  Copy just one level in.)


RULES EXPLICIT:
1) The function accepts one array.
2) The array may contain values.


RULES IMPLICIT:
Questions dealing with the data types of the elements that are inside the array.
1) strings should be doubled (for example, ['a'] => ['a', 'a'])
2) empty strings should be returned as empty strings.
3) empty spaces should be returned as doubled empty spaces.  i.e. " " => "  "
4) Objects should be duplicated.
5) Arrays should be duplicated.
6) Undefined should just be duplicated and take up two spaces in the array.
7) NaN should be duplicated.
8) Infinity should be duplicated.
9) 0 should be duplicated.

EDGE CASES: 

EXAMPLES/TEST CASES:
HAPPY PATH
console.log(doubler([1, 2, 3]) === [2, 4, 6])
console.log(doubler([0, -9, 0.5]) === [0, -18, 1])
console.log(doubler(["a", "$", "."]) === ["a", "a", "$", "$", ".", "."])
console.log(doubler(["NaN", "undefined"]) === ["NaN", "NaN", "undefined", "undefined"])
console.log(doubler([Infinity]) === [Infinity, Infinity])

UNHAPPY PATH / INVALID DATA TYPES
console.log(doubler({}) === false)
console.log(doubler(NaN) === false)
console.log(doubler(undefined) === false)
console.log(doubler("") === false)
console.log(doubler(" ") === false)

INPUT(S):
  - array of elements

OUTPUTS:
  - array of elements
ALGORITHM (break into problems + guard clauses):
   -Pass element to helper function `isValidDataType` to check if it's a valid data     type.
  - Declare function `doubler` with parameter `array`.
    -Iterate through the array, one element at a time with `map`
    
    -Pass to helper function `doubleElement`
      -Return new array and save in `arrayOfTransformed`
    
    -Check if every element is equal to the one in the final
    
    

  -Helper function `isValidDataType`
    -Use `Array.isArray(array)` to check if it's an array
    -If it is, return true
    -If it's not, return false.
    
 -Helper function `doubleElement`
    -Check if the element is a number using `typeof` === `number`
    -If it is, double the number
  -  If it's any other data type, return two copies of the value
    
  
*/

function doubler(array) {
  if (!isValidDataType(array)) return false;
  
  let arrayOfTransformed = doubleElement(array);
  
  return arrayOfTransformed;
}

function doubleElement(array) {
  let answer = [];
  array.forEach(element => {
    if (typeof(element) === 'number') {
      answer.push(element);
    } else {
      answer.push(element);
      answer.push(element);
    }
  })
  return answer;
}

function isValidDataType(element) {
  return Array.isArray(element)
}


console.log(doubler([1, 2, 3]))// === [2, 4, 6])
console.log(doubler([0, -9, 0.5]))// === [0, -18, 1])
console.log(doubler(["a", "$", "."]))// === ["a", "a", "$", "$", ".", "."])
console.log(doubler(["NaN", "undefined"]))// === ["NaN", "NaN", "undefined", "undefined"])
console.log(doubler([Infinity]))// === [Infinity])

console.log(doubler({}) === false)
console.log(doubler(NaN) === false)
console.log(doubler(undefined) === false)
console.log(doubler("") === false)
console.log(doubler(" ") === false)

//Anna's answer
function doubler(arr) {
  let doubledArray = [];

  arr.forEach(elem => {
    if (typeof elem === 'string') {
      doubledArray.push(elem.repeat(2));
    } else if (typeof elem === 'number') {
      if (Number.isNaN(elem)) {
        doubledArray.push(NaN, NaN);
      } else {
        doubledArray.push(elem * 2);
      }
    } else if (Array.isArray(elem)) {
      doubledArray.push([elem, elem]);
    } else if (typeof elem === 'boolean' || typeof elem === 'undefined') {
      doubledArray.push(elem, elem);
    } else if (elem === null) {
      doubledArray.push(null);
    } else if (typeof elem === 'object') {
      doubledArray.push({ '1': elem, '2': elem});
    }
  });
    
  return doubledArray;
}