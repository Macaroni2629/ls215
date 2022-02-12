/*
next problem: Given an array of alphanumeric characters, sort even numbers in order leaving the  rest of the alphanumeric characters in their original position

PROBLEM RESTATED: Given an array of alphanumeric characters, sort even numbers BUT leave the rest of the alphanumeric characters in their original position.

QUESTIONS:
1) What does alphanumeric mean?  (only numbers and letters, not punctuation, underscores, etc.)
2) What to do when there are string versions of a number when compared to the number version of a number? e.g. 8 vs "8" (The string "8" is not a number, it's a string, so don't sort it.)
3) What to do with all the invalid inputs from other data types like null, undefined, object, strings when passed as an argument? (Return false.)
4) Is NaN an even number? (No because NaN % 2 === NaN)
5) Is Infinity an even number? (No because Infinity % 2 === NaN)
6) What about nested arrays, do you sort the things inside of them? like [[2], [0]]?  (The subarrays are not numbers, so don't sort them.)
7) What if more than 1 one argument is passed?  (Ignore the rest.)
8) Do you want me to mutate the original array? (Yes.)

RULES EXPLICIT:
1) Leave the rest of the alpha numeric characters in their original position.
2) Sort even numbers.

RULES IMPLICIT:
1) Sort even numbers in ascending order.

EDGE CASES: 

EXAMPLES/TEST CASES:
HAPPY PATH

UNHAPPY PATH (empty string, no argument, too many arguments, [], {}, null, undefined, Infinity, function)

INPUT(S):
  - array of numbers
Intermediate Data Structures: 

OUTPUTS:
  - array of numbers
ALGORITHM (break into problems + guard clauses):
  - Declare a function `sortEvens` that takes parameter `array`
    -Helper function `validDataType`
    
    -Declare `holder` to {}.
    
    -Iterate through the `array`, one element at at time.
      -Check if the element is even.
        -If it is, store the `index` as the key in `holder` and the element in the array as the value.
        
    -Declare `arrayOfValues` and use `Object.values`, passing in `holder` as an argument.
    
    -Sort `arrayOfValues`.
    
    -Declare `arrayOfKeys` and use `Object.keys`, passg in `holder` as an argument.
    
    -Iterate through `arrayOfKeys`, also using `index` as a parameter.
      -On each element, mutate `array` by using array[element] = arrayOfValues[index]
      
    -Return array
  
  -Helper function `validDataType`
*/

function sortEvens(array) {
  if (!(validDataType(array))) return false
  
  let holder = {};
 
  holder = getEvens(holder, array)
  
  let arrayOfValues = getValuesSorted(holder)
  
  let arrayOfKeys = Object.keys(holder);
  
  arrayOfKeys.forEach((element, index) => {
    array[element] = arrayOfValues[index];
  })
  
  return array;
}

function getValuesSorted(holder) {
   let arrayOfValues = Object.values(holder); 
  arrayOfValues.sort((a, b) => {
    return (a - b);
  });
  return arrayOfValues;
}


function getEvens(holder, array) {
   array.forEach((element, index) => {
    if (element % 2 === 0 && typeof(element) === 'number') {
      holder[index] = element
    }
  })
  return holder;
}

function validDataType(array) {
  if (typeof(array) === 'object' && Array.isArray(array)) return true
  return false
}

console.log(sortEvens([5, 3, 2, 8, 1, 4])) // [5, 3, 2, 4, 1, 8])
console.log(sortEvens([98, 0, 2, 3, 4, 5])) // [0, 2, 4, 3, 98, 5]
console.log(sortEvens([1, 2, 3])) // [1, 2, 3]
console.log(sortEvens([-10, 1, 2, 0])) // [-10, 1, 0, 2]
console.log(sortEvens(["alpha", "beta", 5, 2])) // ["alpha", "beta", 5, 2]
console.log(sortEvens([NaN, 0, 5])) // [NaN, 0, 5]
console.log(sortEvens([Infinity, 2, 10, 6])) // [Infinity, 2, 6, 10]
console.log(sortEvens([null, 0, undefined, -6])) // [Infinity, -6, undefined, 0]

console.log(sortEvens()) // false
console.log(sortEvens('')) // false
console.log(sortEvens(undefined)) // false
console.log(sortEvens({})) // false
console.log(sortEvens(function() {})) // false
console.log(sortEvens([[2], [0]])) // [[2], [0]]

