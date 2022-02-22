Counting Up
Write a function that takes an integer argument and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.

Examples:

Copy Code
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

function sequence(limit) {
  const result = [];

  for (let i = 1; i <= limit; i += 1) {
    result.push(i);
  }

  return result;
}

