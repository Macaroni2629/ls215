Double Char Part 1
Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

Examples:

Copy Code
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

function repeater(string) {
  const stringArray = [];

  for (let i = 0; i < string.length; i += 1) {
    stringArray.push(string[i], string[i]);
  }

  return stringArray.join('');
}
