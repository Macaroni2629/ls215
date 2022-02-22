Letter Counter Part 2
Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

Examples:

Copy Code
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}

function wordSizes(words) {
  const wordsArray = words.split(' ');
  const count = {};

  for (let i = 0; i < wordsArray.length; i += 1) {
    let cleanWordSize = removeNonLetters(wordsArray[i].toLowerCase()).length;
    if (cleanWordSize === 0) {
      continue;
    }

    count[cleanWordSize] = count[cleanWordSize] || 0;
    count[cleanWordSize] += 1;
  }

  return count;
}

function removeNonLetters(string)  {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    if (isLetter(string[i])) {
      result += string[i];
    }
  }

  return result;
}

function isLetter(char) { return char >= 'a' && char <= 'z' }

//someone else's answer

function wordSizes(words) {
  if (!words) return {};

  words = words.replace(/\s+/g, ' ');
  return words.split(' ').map(word => word.replace(/[^a-z]/gi, '')).reduce((obj, word) => {
    obj[word.length] ? obj[word.length]++ : obj[word.length] = 1;
    return obj;
  } , {}) 
}