Now I Know My ABCs
A collection of spelling blocks has two letters per block, as shown in this list:

Copy Code
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument and returns true if the word can be spelled using the set of blocks, false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

Examples:

Copy Code
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true

function isBlockWord(word) {
  const blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
  const letters = word.split('');

  for (let i = 0; i < letters.length; i += 1) {
    let matchingBlock = blocks.filter(block => block.includes(letters[i].toUpperCase()))[0];

    if (matchingBlock === undefined) {
      return false;
    } else {
      blocks.splice(blocks.indexOf(matchingBlock), 1);
    }
  }

  return true;
}

function isBlockWord(word) {
  const BLOCKS = ['BO', 'GT', 'VI', 'XK', 'RE', 'LY', 'DQ', 'FS', 'ZM', 'CP', 'JW', 'NA', 'HU'];
  for(currentBlock of BLOCKS) {
    let regex = new RegExp(`[${currentBlock}]`, 'gi');
    let counter = word.match(regex) ? word.match(regex).length : 0;

    if (counter > 1) {
      return false;
    }
  }
  return true;
}

function isBlockWord(text) {
  const blocks = [
    ['B', 'O'],
    ['G', 'T'],
    ['V', 'I'],
    ['X', 'K'],
    ['R', 'E'],
    ['L', 'Y'],
    ['D', 'Q'],
    ['F', 'S'],
    ['Z', 'M'],
    ['C', 'P'],
    ['J', 'W'],
    ['N', 'A'],
    ['H', 'U'],
  ];

  const foundIndexes = [];
  const filteredText = text.replace(/[^a-z]/gi, '');
  const textArray = [...filteredText.toUpperCase()];

  textArray.forEach(character => {
    blocks.forEach((subarray, index) => {
      if (subarray.includes(character)) {
        foundIndexes.push(index);
      }
    });
  });

  return foundIndexes.length === new Set(foundIndexes).size;
}

function isBlockWord(word) {
  if (typeof word !== 'string' || word.length === 0 || word.match(/[^a-z]/gi)) {
    return false;
  }

  const blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

  return word.toUpperCase().split('').every((char) => {
    let idx = blocks.findIndex((block) => block.includes(char));

    if (idx !== -1) blocks.splice(idx, 1);

    return (idx !== -1);
  });
}