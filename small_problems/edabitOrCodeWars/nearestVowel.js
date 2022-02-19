// https://edabit.com/challenge/62BAcgsNSdwYmE9ty
// Nearest Vowel
// Given a letter, created a function which returns the nearest vowel to the letter. If two vowels are equidistant to the given letter, return the earlier vowel.

/*
Find a letter's index on the alphabet

find the indexes of all of the vowels in the alphabet
  -Put them in an object
  
Iterate through the vowels
  -Find the difference between the letter's index and the vowels
  -Return the vowel with the smallest difference


*/

// Examples

function nearestVowel(letter) {
  const ALPHA = "abcdefghijklmopqrstuvwxyz"
  
  let indexOfLetter = ALPHA.indexOf(letter);

  let arrayOfVowels = ["a", "e", "i", "o", "u"];
  
  let arrayOfIndexes = arrayOfVowels.map(vowel => {
    return ALPHA.indexOf(vowel);
  })
  
  let arrayOfDifferences = arrayOfIndexes.map(vowelIndex => {
    return Math.abs(vowelIndex - indexOfLetter);
  })
  
  let indexOfSmallest = arrayOfDifferences.indexOf(Math.min(...arrayOfDifferences))
  
  return arrayOfVowels[indexOfSmallest];
}

// console.log(nearestVowel("b"))// ➞ "a"

// console.log(nearestVowel("s"))// ➞ "u"

// console.log(nearestVowel("c"))// ➞ "a"

// console.log(nearestVowel("i"))// ➞ "i"
// Notes
// All letters will be given in lowercase.
// There will be no alphabet wrapping involved, meaning the closest vowel to "z" should return "u", not "a".

//note my answer does not cover tied letters so doesn't pass edabit right now