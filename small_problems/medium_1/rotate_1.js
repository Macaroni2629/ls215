// Rotation Part 1
// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.
// Review the test cases below, then implement the solution accordingly.

// rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
// rotateArray(['a']);                    // ["a"]
// rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
// rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
// rotateArray([]);                       // []

// // return `undefined` if the argument is not an array
// rotateArray();                         // undefined
// rotateArray(1);                        // undefined


// the input array is not mutated
// const array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]
/*
PROBLEM RESTATED: Write a function that rotates an array by moving the first element to the end of the array.  

QUESTIONS: 
1) What if the input is not an array? (Return undefined).
2) What if there are empty items inside the array? (You won't be given an array with empty items.)

RULES EXPLICIT:
1) Do not modify the original array.
2) If the input is not an array, return undefined.
3) If the input is an empty array, return an empty array.

RULES IMPLICIT:
1) When the element at index 0 is an object and contains elements inside of it, nothing changes about the inside contents of the element.
2) The elements moved are unchanged except for the index at which they are located.

EDGE CASES: 

EXAMPLES/TEST CASES:
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
The 7 is moved from the 0 index to the last index.  All the other ones moved down one index.
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
The 'a' is moved from 0 index to last index.  All the other ones moved down one index.
rotateArray(['a']);                    // ["a"]
It stays in place because there are no other elements.
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
The one is moved from 0 index to the last index.
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
The object at 0 index is moved to last index, all the other ones are moved down.
rotateArray([]);                       // []
An empty array returns an empty array.
*/
//HAPPY PATH
// rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
// rotateArray(['a']);                    // ["a"]
// rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
// rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
// rotateArray([0, 1, 2]) // [1, 2, 0]
// rotateArray([null, undefined, 3]) // [undefined, 3, null]
// const array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]

//UNHAPPY PATH
// rotateArray();                         // undefined
// rotateArray(1);                        // undefined
// rotateArray([]);                       // []
// rotateArray(undefined) // undefined
// rotateArray(Infinity) // undefined
// rotateArray(0) // undefined
// rotateArray({}) // undefined
//INPUT(S):
// Array of elements

//OUTPUTS:
// Array of elements

/*  - 
ALGORITHM (break into problems + guard clauses):
  -Declare a function named `rotateArray` that takes parameter `array`
    -Pass `array` to helper function `isValidArray`
      -If false, return false
    -Check if array is empty.  If it is, return [].
    -Copy the array with `slice` and save in `copyArray`
    
    -Use `shift` to push out first element at index 0. And save in `shifted`
    
    -Use `push` to push back into `copyArray`
      
    -Return `copyArray`
  -Helper function `isValidArray`
    -Make sure the data type is an array by using `Array.isArray`
*/

function rotateArray(array) {
  if (!isValidArray(array)) return false
  if (array.length === 0) return [];
  
  let copyArray = array.slice();
  let shifted = copyArray.shift();
  
  copyArray.push(shifted);
  
  return copyArray;
}

function isValidArray(array) {
  if (Array.isArray(array)) return true
  return false
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([0, 1, 2])) // [1, 2, 0]
console.log(rotateArray([null, undefined, 3])) // [undefined, 3, null]
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));                        // undefined
// console.log(rotateArray([]));                       // []
// console.log(rotateArray(undefined)) // undefined
// console.log(rotateArray(Infinity)) // undefined
// console.log(rotateArray(0)) // undefined
// console.log(rotateArray({}))// undefined