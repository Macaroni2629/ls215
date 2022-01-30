// Swap Case
// Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

// Examples:

function swapCase(string) {
  let arrayOfChars = string.split('');

  return arrayOfChars.map(letter => {
    if (letter.match(/[a-z]/)) {
      return letter.toUpperCase();
    } else if (letter.match(/[A-Z]/)) {
      return letter.toLowerCase();
    } else {
      return letter;
    }
  }).join('');
}

// Copy Code
console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"