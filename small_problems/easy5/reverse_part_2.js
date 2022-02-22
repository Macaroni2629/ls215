Reverse It Part 2
Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

Examples:

Copy Code
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

function reverseWords(string) {
  const words = string.split(' ');
  const reversedWords = [];

  for (let i = 0; i < words.length; i += 1) {
    let currentWord = words[i];
    if (currentWord.length >= 5) {
      reversedWords.push(currentWord.split('').reverse().join(''));
    } else {
      reversedWords.push(currentWord);
    }
  }

  return reversedWords.join(' ');
}

