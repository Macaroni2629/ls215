// Ah here’s a second one on objects too - no need to worry about test cases

// just solve

// Given the below recipe for chocolate cake write a function cake() that takes two inputs: ingredient and amount.
// The recipe should be adjusted according to the amount passed into the function. An Object containing all ingredients and their new amounts should be returned.

// If I have just 80g of caster sugar, how much will I need of the other ingredients?

 //cake('caster sugar',80) => {'caster sugar': '80g', butter: '85g', eggs: 1.5, 'self-raising flour': '57.5g', 'cocoa powder': '27.5g'}

// Note that the new amounts should be rounded to 1 decimal place and unit of measurement for amount will always be in grams, unless the ingredient is eggs.

/*ALGORITHM
-Declare a function `cake` that accepts two parameters `ingredient` and `amount`
  -Declare `arrayOfSubarrays` and set it equal to Object.entries(recipe)
  -Clean the subarrays pass to `cleanArrayOfSubarrays` and save in `cleanedSubarrays`
  -Declare answer = {}
  
  -Pass to helper function `figureOutWhichOne` `cleanedarrayOfSubarrays`, `ingredient`, and  `amount`and save in `newRatio`
  
  -Iterate through arrayOfSubarrays, one subarray at a time.
    -Set answer[subarray[0]] = subarray[1] * ratio
    
    
  -Return answer;


-Helper function `cleanArrayOfSubarrays`
  -Iterate through subarrays, one subarray at a time with `map`
    -let newString = subarray[1].replace(/g/gi, "")
    - return [subarray[0], Number(subarray[1])]

-Helper function `figureOutWhichOne`
  -Iterate through `arrayOfSubarrays`, one ingredient/recipe subarray at a time
    -When subarray[0] === ingredient
      -
      -find ratio which is equal to amount / subarray[1]
      - save in `newRatio`
      -Return `newRatio`
*/


function cake(ingredient, amount, recipe) {
  let arrayOfSubarrays = Object.entries(recipe);
  let cleanedArrayOfSubarrays = cleanSubarrays(arrayOfSubarrays)
  let answer = {};
  let newRatio = figureOutWhichOne(cleanedArrayOfSubarrays, ingredient, amount)
  figureOutProportions(answer, arrayOfSubarrays, newRatio)
  formatAnswer(answer)
  return answer;
}

function formatAnswer(answer) {
  let arrayOfKeys = Object.keys(answer);
  arrayOfKeys.forEach(ingredient => {
    if (ingredient !== "eggs") {
      let numberVersion = answer[ingredient];
      answer[ingredient] = String(numberVersion) + "g"
    }
  })
}

function figureOutProportions(answer, arrayOfSubarrays, newRatio) {
  let numberVersion;
  arrayOfSubarrays.forEach(subarray => {
     if (typeof(subarray[1]) === "string") {
      numberVersion = subarray[1].replace(/[a-z]/ig, "");
      numberVersion = Number(numberVersion)
     }
    answer[subarray[0]] = numberVersion * newRatio;
  })
}

function cleanSubarrays(arrayOfSubarrays) {
  return arrayOfSubarrays.map(subarray => {
    if (typeof(subarray[1]) === 'string') {
      let newString = subarray[1].replace(/g/gi, "");
      return [subarray[0], Number(newString)]
    } else {
      return subarray
    }
   })
                              
}

function figureOutWhichOne(arrayOfSubarrays, ingredient, amount) {
  let newRatio;
  arrayOfSubarrays.forEach(subArrayIngAmt => {
    if (subArrayIngAmt[0] === ingredient) {
      newRatio = amount / subArrayIngAmt[1];
    }
  })
  
  return newRatio;
}

let recipe = { 
  'caster sugar': '160g', 
  butter: '170g', 
  eggs: 3, 
  'self-raising flour': '115g', 
  'cocoa powder': '55g'
};


console.log(cake('caster sugar', 200, recipe))