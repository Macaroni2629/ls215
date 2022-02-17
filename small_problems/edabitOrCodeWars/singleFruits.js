https://edabit.com/challenge/FrFkH5BPnqz4pYpqD

// Splitting Objects Inside an Array
// You bought a few bunches of fruit over the weekend. Create a function that splits a bunch into singular objects inside an array.

/*Problem: given an array of objects, return an array of objects that splits the fruits into quantities of 1.

Input: an array of objects
output: an array of objects


Declare `result` to equal [];

Iterate through the array of objects: 
  -Helper function `isValidDataType`

  On each object, check if quantity is one
    If it is, create that in `result` that key value pair
    
    If it's not, pass that object to `createDuplicates` along with `result`
    
    return result
    
    
-Helper function `createDuplicates`
  -let count = object["quantity"]
  
  do a for loop
    let newObj = {name: object["name"], quantity: 1}
    result.push(newObj)
*/

function splitBunches(arrayOfObjects) {
  if (!isValidDataType(arrayOfObjects)) return false;
  
  let result = [];
  
  arrayOfObjects.forEach(object => {
    if (object["quantity"] === 1) {
      result.push(object);
    } else {
      createDuplicates(result, object)
    }
  })
  return result;
}

function createDuplicates(result, object) {
  let count = object["quantity"];
  
  for (let i = 0; i < count; i++) {
    let newObj = {name: object["name"], quantity: 1}
    result.push(newObj)
  }
}

function isValidDataType(arrayOfObjects) {
  if (Array.isArray(arrayOfObjects)) return true;
  return false;
}

splitBunches([
  { name: "grapes", quantity: 2 }
])// ➞ [
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 }
// ]


splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
])// ➞ [
//   { name: "currants", quantity: 1},
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 },
//   { name: "bananas", quantity: 1 },
//   { name: "bananas", quantity: 1 }
// ]
// Notes
// The input array will never be empty.
// Objects will always have a name and quantity over 0.
// The returned object should have each fruit in the same order as the original.