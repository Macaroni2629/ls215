Reverse It Part 1
Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order.

Examples:

Copy Code
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}