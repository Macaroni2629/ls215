// Sum of Sums
// Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. Examine the examples to see what we mean. You may assume that the array always contains at least one number.

// Examples:

/*
make slices

then add all the slices

*/

function sumOfSums(array) {
  let arrayOfSlices = [];
  makeSlices(arrayOfSlices, array);
  let arrayOfSums = makeSubs(arrayOfSlices);
  return arrayOfSums.reduce((sum, element) => sum + element, 0)
}

function makeSubs(arrayOfSlices) {
  return arrayOfSlices.map(subarray => {
    return subarray.reduce((sum, element) => sum + element, 0)
  })
}

function makeSlices(arrayOfSlices, array) {
  for (let i = 1; i <= array.length; i++) {
    arrayOfSlices.push(array.slice(0, i))
  }
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35