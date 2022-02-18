https://edabit.com/challenge/jkkhAZ2C9Zy4SHbtj

// vThe Bottom of the Matrix
// This challenge concerns square matrices (same number of rows and columns) as the below example illustrates:

/*
Problem: Given an array of subarrays
Return an array with all the upper right numbers turned into zeroes.

rules/requirements:

input:an array of subarays with numbers in them
output:

questions:

Examples/test cases:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

Data structures:

Algorithm:
*/

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// [
//   [1, 0, 0],   the 2 and 3 are 0's now coordinates 0, 1 and 0, 2
//   [4, 5, 0],   the 6 is a zero now coordinates 0, 2
//   [7, 8, 9]    the diagonal coordinates are 0, 0; 1, 2; and 2, 2
// ]

/*
at row zero output one, then the rest are zeroes at row zero, spot 0, fill in the one
at row 1, 

or the opposite thinking, at row zero, output 


*/

// The entries in the diagonal line from the top left to the bottom right form the main diagonal of the matrix. In this case, 1,5,9 form the main diagonal.

// Write a function that returns the matrix obtained by replacing the entries above the main diagonal with 0s.

// For example, for the matrix above you should return:

// [
//   [1, 0, 0],
//   [4, 5, 0],
//   [7, 8, 9]
// ]

function lowerTriang(arrayOfSubarrays) {
  let subarrayLength = arrayOfSubarrays.length;
  arrayOfSubarrays.forEach((subarray, indexRow) => {
    mutateSubarray(subarray, indexRow, subarrayLength)
  })
  return arrayOfSubarrays;
}

function mutateSubarray(subarray, indexRow, subarrayLength) {
  let numberOfZeroes = subarrayLength - indexRow - 1
  let amountToPop = numberOfZeroes;
  while (amountToPop > 0) {
    subarray.pop();
    amountToPop -= 1
  }
  while (numberOfZeroes > 0) {
    subarray.push(0)
    numberOfZeroes -= 1;
  }
}


lowerTriang([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) //➞ [
//   [1, 0, 0],
//   [4, 5, 0],
//   [7, 8, 9]
// ]

// lowerTriang([
//   [5, 7],
//   [7, 9]
// ]) //➞ [
//   [5, 0],
//   [7, 9]
// ]

// lowerTriang([
//   [1, 8, 8, 1],
//   [2, 7, 7, 2],
//   [3, 6, 6, 3],
//   [4, 5, 5, 4]
// ]) //➞ [
//   [1, 0, 0, 0],    // diagonal coordinates are 0, 0; 1, 2; 2, 2; 3, 3
//   [2, 7, 0, 0],    // zero coordinates 0, 1; 0, 2; 0, 3; 1, 2; 1, 3; 2, 3
//   [3, 6, 6, 0],
//   [4, 5, 5, 4]
// ]
// Notes
// As in the examples, the size of the matrices will vary (but they will always be square).
// In Linear Algebra, matrices with 0s above the diagonal are called lower triangular matrices.

// Natalie's solution

function lowerTriang(arrayOfSubarrays) {
  return arrayOfSubarrays.map( (subArray, index1) => {
    return subArray.map( (ele, index2) => index2 > index1 ? 0 : ele );
  });
}