/*

PROBLEM RESTATED: Given two numbers in SHORTHAND, in string form, find the true value of the second number?

QUESTIONS: 
1) How do I know for example that the second number is way larger than the second number?  
    

RULES EXPLICIT: What the numbers represent in reality-- the first number is always lower in value than the second one. 


RULES IMPLICIT: 
  - 2 arguments are always given in string form.
  - Possible to have leading zeroes.

RULES:
  -The next largest number from `num1` where the digits shown are the last few digits of that next number `num2`.

EDGE CASES: 
  - Leading zeroes.

EXAMPLES/TEST CASES:
HAPPY PATH
console.log(compareTwoNums('7', '2')) // 12 
Compare 7 and 2.  Is 7 less than 2?
No, it's not.
  Find the length of the first number.
  Subtract one from it.  Save in variable `power`
Use first number as starting point.
Increment by 1 in a loop UNTIL it's equal to the second number + 10 to the `power`
7 = 12?
8 = 12?
9 = 12?
10 = 12?
11 = 12?
12 = 12? YES


console.log(compareTwoNums('104', '2')) // 112 
console.log(compareTwoNums('104', '02')) // 202

console.log(compareTwoNums('1', '2')) // 2
  


UNHAPPY PATH
-

INPUT(S):
  - string nums
OUTPUTS:
  - number
ALGORITHM (break into problems + guard clauses):
  - Define function `compareTwoNums` with two parameters, `num1` and `num2`.

  -Find new value of `num2`
    -Find the length of num1.  Subtract 1.
    -Save in variable `power`
    -Reassign `num2` to itself + 10 ^ power
  
  - Start a `while`  loop, with the condition being while `increment` < `num2`.
    -increment `increment` by 1 until it's equal to `num2` 
    
    
  - Return `num2`

  Redone Algo
  -Declare function `compareTwoNums` taking parameter `num1` and `num2`.
    -Declare and initialize local variable `string` to string version of `num1`
    -Declare and initialize local variable `num1Number` to number version of `num1`.
    -Declare and initialize local variable `string2` to string version of `num2`.
    -Declare and initialize local variable `num2number` to number version of `num2`.
    -Declare and initialize local variable `sliceSize` to the length of `string2`.

    -Implement a `while` loop with condition being `num1Number` being less than 1000.
      -Increment `num1Number` by 1 every iteration.
      -Reassign `string1` to a string version of itself.
      -Implement an `if` conditional checking if `string1's` last few digits (which depends on `sliceSize`) is strictly equal to `string2's` last few digits (which depends on the same `sliceSize`).
        -If this is true, return `num1Number`.
  
*/

function compareTwoNums(num1, num2) {
  
  let string1 = String(num1)
  let num1Number = Number(num1)
  let string2 = String(num2)
  let num2Number = Number(num2)
  let sliceSize = string2.length;
  
  while (num1Number < 1000) {
    num1Number += 1
    string1 = String(num1Number)
    if (string1.slice(-sliceSize) === string2.slice(-sliceSize)) {
      return num1Number
    }
  }
  
}

console.log(compareTwoNums('7', '2')) // 12
console.log(compareTwoNums('104', '2')) // 112 
console.log(compareTwoNums('104', '02')) // 202
console.log(compareTwoNums('1', '2')) // 2
