// Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.

// 'Bubble Sort' is one of the simplest sorting algorithms available. Although it is not an efficient algorithm, it is an excellent exercise for student developers. In this exercise, you will write a function that sorts an array using the bubble sort algorithm.

// A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of each pair of consecutive elements are compared. If the first value is greater than the second, the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps — at which point the array is completely sorted.

// We can stop iterating the first time we make a pass through the array without making any swaps because this means that the entire array is sorted.

// For further information — including pseudo-code that demonstrates the algorithm, as well as a minor optimization technique — see the Bubble Sort Wikipedia page.

// Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.


/*
PROBLEM RESTATED: Write a function that takes an array as an argument and sorts that array usin gthe bubble sort algorithm.  

QUESTIONS:
1) what about numbers with more than one digit?  (Sort in ascending order.)
2) Are we going to be sorting mixed data types?  (no.)

RULES EXPLICIT:
1) The sorting should be done in place.  That is, the function should mutate the array.
2) Stop iterating the first time we make a pass through the array without making any swaps.
3) Bubble sort works by making multiple passes (iterations) through an array.  The two values of each pair are compared.  If the first value is greater than the second, the two elements are swapped. 

RULES IMPLICIT:
1)When sorting strings, go by alphabetical order.

EDGE CASES: 

EXAMPLES/TEST CASES:
HAPPY PATH

UNHAPPY PATH (empty string, no argument, too many arguments, [], {}, null, undefined, Infinity, function)

INPUT(S):
  - Array of numbers or strings

OUTPUTS:
  - Array of numbers or strings
ALGORITHM (break into problems + guard clauses):
-Declare function `bubbleSort` with parameter `array`.
  - declare `atLeastOneSwitch === true`
  
  - Make a copy of the `array` and call it `arrayCopy`
  
  -Declare `index` to 0.
  
  - Declare a `while` loop, with the condition being `zeroFlips === true`
    -Compare first indexed element to next element.
    -Is the first element greater than the second?
      -If so, flip it.
      -reassign `zeroflips` to `false`
  
*/ 
function bubbleSort(array) {
  let numberOfFlips;
  while (numberOfFlips !== 0) {
    [array, numberOfFlips] = doOneRound(array);
  } 
}

function doOneRound(array) {
  let numberOfFlips = 0;
  let index = 0;
  while (index < array.length) {
    if (array[index] > array[index + 1]) {
      let holder = array[index];
      array[index] = array[index + 1];
      array[index + 1] = holder;
      numberOfFlips += 1
      index += 1
    } else {
      index += 1;
    }
  }
  return [array, numberOfFlips]
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]