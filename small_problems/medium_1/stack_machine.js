// NOTE TO SELF NOT ALL ANSWERS ARE RIGHT
// Stack Machine Interpretation
// A stack is a list of values that grows and shrinks dynamically. A stack may be implemented as an Array that uses two Array methods: Array.prototype.push and Array.prototype.pop.

// A stack-and-register programming language is a language that uses a stack of values. Each operation in the language operates on a register, which can be thought of as the current value. The register is not part of the stack. An operation that requires two values pops the topmost item from the stack (i.e., the operation removes the most recently pushed value from the stack), operates on the popped value and the register value, and stores the result back in the register.

// Consider a MULT operation in a stack-and-register language. It removes the value from the stack, multiplies the removed stack value with the register value, then stores the result back in the register. For example, if we start with a stack of [3, 6, 4] (where 4 is the topmost item in the stack) and a register value of 7, the MULT operation mutates the stack to [3, 6] (the 4 is removed), and the result of the multiplication, 28, is left in the register. If we do another MULT at this point, the stack is mutated to [3], and the register is left with the value 168.

// Stack [3, 6, 4]

// 4 is topmost item in stack

// Register value of 7

// the MULT operation mutates the stack to [3, 6] and the result 28 is left in the register.

// Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
// DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
// REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.
// All operations are integer operations (which is only important with DIV and REMAINDER).

// Programs will be supplied to your language function via a string argument. Your function may assume that all arguments are valid programs — i.e., they will not do anything like trying to pop a non-existent value from the stack, and they will not contain any unknown tokens.

// Initialize the stack and register to the values [] and 0, respectively.

// Examples:

// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// Place 5 in the register
// PUSH - Push 5 into the stack
// 3 Place 3 in the register
// MULT Pop 5 from the stack and multiply it by the register value, storing the result in the register.
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5 // Place 5 in the register
// // 3 //Print the register value, which is 5.
// // 8 // Push the register value (5) on to the stack.  Leave the value in the register.
// 3 Place 3 in the register
// Print the register value (3)
// ADD Pop a value from the stack and add it to the register value by the popped stack value, storing the integer remainder of the divison back in the register.

// minilang('5 PUSH POP PRINT');
// // 5 // Place 5 in the register
//PUSH Push the register value onto the stack.  Leave value in the register.
// POP Remove the topmost item from the stack and place it in the register.
// PRINT Print the register value.

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5 // Place 3 in the register.
// // 10 // PUSH Push the register value (3) onto the stack.  Leave value in the register.
// // 4 // 4 Place 4 in the register.
// // 7 // PUSH Push the register value (4) onto the stack.  Leave value in the register.
// PRINT Print the register value

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
/*

PROBLEM RESTATED: A stack is a list that grows and shrinks dynamically.  Write a function that implements a miniature stack-and-register based programming language that has the following commands.


QUESTIONS:
1) What is a register?  (The current value.)
2) What's a MULT operation?  (A MULT operation removes the value from the stack, multiplies the removed stack value with the register value, then stores the result back in the register.)
3) What if invalid data type input?  (Return false)

RULES EXPLICIT:
1) Can only use 2 Array methods, push and pop.
2) The register is not part of the stack.
3) An operation that requires 2 values pops the topmost item from the stack, operates on the popped value and the register value, and stores the result back in the register.
4) n : Place a value, n, in the register. Do not modify the stack.
5) PUSH : Push the register value onto the stack. Leave the value in the register.
6) ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
7) SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
8) MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
9) DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
10)  REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
11) POP : Remove the topmost item from the stack and place it in the register.
12) PRINT : Print the register value.
13)  All operations are integer operations (which is only important with DIV and REMAINDER).

RULES IMPLICIT:

EDGE CASES: 

EXAMPLES/TEST CASES:
HAPPY PATH

UNHAPPY PATH (empty string, no argument, too many arguments, [], {}, null, undefined, Infinity, function)

INPUT(S):
  - String
Intermediary data structure: Array
OUTPUTS:
  - number 
ALGORITHM (break into problems + guard clauses):
  - Declare a function `minilang` that takes parameter `string`
    -Send to helper function `isValidDataType` and pass in `string`
      -Return false if it's not a string.
    -Return empty string if it's an empty string.
    -Split on the space and save to `arrayOfElements`
    -Declare a variable `register` to ;
    -Declare a variable `stackArray` to [];
    
    -Iterate through `arrayOfElements`, element by element
      -Identify if the element is a number or a command
      -If it's a number reassign `register` to current element.
      -If it's a command, pass to the helper methods of that very name along with the `register`, `stackArray`
    
    -Return the final value
    
  -Helper function isValidDataType
    -Check if it's a string
*/ 

function minilang(string) {
  if (!(isValidDataType(string))) return false
  if (string === '') return '';
  
  let arrayOfElements = string.split(' ');
  
  let register = 0
  
  let stackArray = [];
  
  arrayOfElements.forEach(element => {
    if ((/\d+/).test(element)) {
        element = Number(element)
        register = element;
    } else if (/PUSH/.test(element)) {
      stackArray.push(register);
    } else if (/ADD/.test(element)) {
      let popped = stackArray.pop();
      register += popped;
    } else if (/SUB/.test(element)) {
      let popped = stackArray.pop() 
      register -= popped;
    } else if (/MULT/.test(element)) {
      let popped = stackArray.pop();
      register *= popped;
    } else if (/DIV/.test(element)) {
      let popped = stackArray.pop();
      register /= popped;
    } else if (/REMAINDER/.test(element)) {
      let popped = stackArray.pop();
      register = register % popped;
    } else if (/POP/.test(element)) {
      let popped = stackArray.pop();
      register = popped;
    } else if (/PRINT/.test(element)) {
      console.log(register);
    }
  })
  return register
}

function isValidDataType(string) {
  if (typeof(string) === 'string') return true
  return false
}

//console.log(minilang({}));

//minilang('PRINT');
// // 0

//minilang('5 PUSH 3 MULT PRINT');
// // 15

//minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8
//minilang('5 PUSH POP PRINT');
// // 5

//minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

//minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12
//minilang('-3 PUSH 5 SUB PRINT');
// // 8

// console.log(minilang('6 PUSH'));
// // (nothing is printed because the `program` argument has no `PRINT` commands)