/*
Declare the function, accept the template

Make constants for nouns: `nouns` an array containing all the adjectives
Make constants for verbs: `verbs` an array containinga ll the verbs
Make constants for and so on and so forth for adjectives, adverbs

split on spaces and assign to `arrayOfWords` and iterate word by word, using `map`
  check if "NOUN" === word for example /NOUN/.test(word) then do word.replace(word, randomWord(nouns))
  
    If it does, replace with a randomly chosen word from the nouns array
  same goes for verbs, adverbs, adjectives
  else
    just return the original word
    
return the whole array joined??

-helper function `randomWord`, taking a parameter `arrayOfChoices`
  -find the length of arrayOfChoices.length and save in `arrayLength`
  -let randomVariable = Math.random() * arrayLength;
  -return arrayOfChoices[randomVariable]

*/
function madlibs(template) {
  const nouns = ["fox", "dog", "head", "leg", "tail", "cat"];
  const adjectives = ["quick", "lazy", "sleepy", "noisy", "hungry"];
  const verbs = ["jumps", "lifts", "bites", "licks", "pats"];
  const adverbs = ["easily", "lazily", "noisily", "excitedly"];
  
  let arrayOfWords = template.split(' ')
  let a = arrayOfWords.map(word => {
    if (/NOUN/.test(word)) {
      return word.replace(/NOUN/, randomWord(nouns))
    } else if (/ADJECTIVE/.test(word)) {
      return word.replace(/ADJECTIVE/, randomWord(adjectives))
    } else if (/ADVERB/.test(word)) {
      return word.replace(/ADVERB/, randomWord(adverbs))
    } else if (/VERB/.test(word)) {
      return word.replace(/VERB/, randomWord(verbs))
    } else {
      return word;
    }
  })
  
  return a.join(' ')
}

function randomWord(arrayOfChoices) {
  let arrayLength = arrayOfChoices.length;
  
  let randomVariable = Math.floor(Math.random() * arrayLength);
  return arrayOfChoices[randomVariable];
}

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
//------

let template1 = 'The ADJECTIVE brown NOUN ADVERB VERB the ADJECTIVE yellow NOUN, who ADVERB VERB his NOUN and looks around.'

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

let template2 = 'The NOUN VERB the NOUN\'s NOUN.';

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".