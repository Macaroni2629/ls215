// The function takes a string argument and it has to only have numbers and letters

// The function takes an array, which can't be empty and all the arguments have to be numbers

// Grocery List
// Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.

// In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

// Example:

// Copy Code
// buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// First make sure that the input is an array
//   -and make sure it's not empty 
//   -if it is empty, return empty array?
//   -if it's an array of subarrays, make sure the subarrays aren't empty
//   -Check if the subarray has two elements
//   -Check if subarray[0] is a string
//   -Check if subarray[1] is a positive integer
  
/*
helper function isValidDataType
  -this one just checks if it's an array
  -it being the outer data structure
  -and also the inner subarrays

*/

let isArray = array => Array.isArray(array);

function buyFruit(arrayOfFruits) {
  if (!isValidDataType(arrayOfFruits)) return false
  
  
  

  
  
}


function isValidDataType(array) {
  return isArray(array) && everySubArrayIsValid(array) && everyArrayHasCorrectData(array)
}
  
function everySubArrayIsValid(array) {
  return array.every(subarray => {
    return isArray(subarray);
  })
}

// console.log(everySubArrayIsValid([[], 'cat'])) //false
  
function everyArrayHasCorrectData(array) {
  return array.every(([fruitName, fruitQuantity]) => {
  return (typeof fruitName === 'string' && 
          typeof fruitQuantity === 'number' && 
          Number.isInteger(fruitQuantity) && 
          fruitQuantity > 0)
  })
}
                    
console.log(buyFruit([[{}, null]]))  // false
console.log(buyFruit([["watermelon", 10]])) // nothing
console.log(buyFruit([["pear", -5]])) // false
console.log(buyFruit([['pea', 100], {}])) // false
console.log(buyFruit([['candy', 5], ['fish', 100]])) // nothing
console.log(buyFruit(undefined))