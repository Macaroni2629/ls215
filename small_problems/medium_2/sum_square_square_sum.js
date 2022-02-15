// Sum Square - Square Sum
// Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

/*
Problem: Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first `n` positive integers.

rules/requirements:
Will be given an integer.

input:integer

intermediate data structures: an array to store sums
output:integer

questions:
1) What if you pass in a negative number? (Return false.)

Examples/test cases:
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640 --> (1 + 2 + 3...)**2 - (1**2 + 2**2 + ...10**2) 
console.log(sumSquareDifference(1));      // 0 --> (0)**2 - (0**2) = 0
console.log(sumSquareDifference(100));    // 25164150 --> 

console.log(sumSquareDifferences(-3)); //  false

Data structures:
Input: positive integer or 0
output: positive integer or 0

Algorithm:
-Declare a function `sumSquareDifference` taking parameter `number`
  -let firstNumber = findFirstNumber(number) // pass to helper function
  
  -Declare secondNumber = findSecondNumber(number) // pass to helper function
  
  -return first number - second number
  
-Helper function `findSecondNumber` 
  -Declare sum to 0
  -Create a for loop looping from 1 to n
    -each number, square it, then add to sum
  
-Helper function `findFirstNumber`
  -Declare sum to 0
  -Create a for loop looping from 1 to n
  
  -find sum and then square it
  -return squared number
  
*/

// Examples:

function sumSquareDifference(number) {
  let firstNumber = findFirstNumber(number);
  
  let secondNumber = findSecondNumber(number);
  
  return firstNumber - secondNumber;
}

function findSecondNumber(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i ** 2
  }
  return sum;
}

function findFirstNumber(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i
  }
  
  sum = sum ** 2
  
  return sum;
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150