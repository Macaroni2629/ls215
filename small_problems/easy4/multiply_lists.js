Multiply Lists
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

Example:

Copy Code
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

function multiplyList(numbers1, numbers2) {
  const result = [];

  for (let i = 0; i < numbers1.length; i += 1) {
    result.push(numbers1[i] * numbers2[i]);
  }

  return result;
}

