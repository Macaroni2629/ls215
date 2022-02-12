// Fibonacci Numbers (Recursion)
// The Fibonacci series is a sequence of numbers in which each number is the sum of the previous two numbers. The first two Fibonacci numbers are 1 and 1. The third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5, and so on. In mathematical terms, this can be represented as:

// F(1) = 1
// F(2) = 1
// F(n) = F(n - 1) + F(n - 2) where n > 2
// This simple sequence can easily be computed using a recursive function. A recursive function is one in which the function calls itself. For example, the following function is a recursive function that computes the sum of all integers between 1 and n:

function sum(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sum(n - 1);
  }
}
// A good recursive function has three primary qualities:

// It calls itself at least once.
// It has an ending condition — e.g., if (n === 1), in the sum function above.
// The results of each recursion are used in each step — e.g., n + sum(n - 1) uses sum(n - 1).
// Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.

// NOTE: This exercise verges on the Advanced level of exercises, so do not be discouraged if you are not able to solve it on your own; recursion is tricky, and even experienced developers can have difficulty dealing with it.

// Examples:
/*

console.log(fibonacci(1));       // 1
fibonacci(1) returns 1
console.log(fibonacci(2));       // 1

fibonnaci(2) returns 1

console.log(fibonacci(3));       // 2
fibonnaci(2) + 1
console.log(fibonacci(4));       // 3
equals fibonnaci(3) + 1
console.log(fibonacci(5));       // 5
equals fibonnaci(4) + 2
console.log(fibonacci(12));      // 144

console.log(fibonacci(20));      // 6765

*/
/*

PROBLEM RESTATED: Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.

QUESTIONS:
1) What about invalid data types? (Return false.)
2) What about a fractional number? (Round up, and then do it.)

RULES EXPLICIT:
1) Good recursive function has 3 primary qualities: calling itself once
2) Has en ending condition
3) Results of each recursion are used in each step

RULES IMPLICIT:
1) There is no zeroth Fibonnaci number
2) There are no negative Fibonnaci numbers
3) All numbers are integers.
4) 

EDGE CASES: 

EXAMPLES/TEST CASES:
HAPPY PATH

UNHAPPY PATH (empty string, no argument, too many arguments, [], {}, null, undefined, Infinity, function)

INPUT(S):
  - integer

Intermediate Data Structure: functions
OUTPUTS:
  - integer
ALGORITHM (break into problems + guard clauses):
  - Declare function `fibonacci` with parameter `number`
    -`invalidDataType` helper function accept `number`
    
    -
    
    
    
  
  -Helper function `invalidDataType` accept `number`
    -Return false if not a number
*/ 
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else {
    return fibonacci(nth - 1) + fibonacci(nth - 2);
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765