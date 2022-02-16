// You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.
// Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it’s present), by listing the type’s of objects that should go into those bins.

// The bins should come in the same order as the materials listed above
// All bins should be listed in the output, even if some of them are empty
// If an object is made of two materials, its type should be listed in both of the respective bins
// The order of the type’s in each bin should be the same as the order of their respective objects was in the input list

/*
Problem: Given a list of objects.

rules/requirements: 
1) Existing materials are: paper, glass, organic, plastic
2) Must sort these objects across the 4 recyclibg bins accordig to their material (and second Material if it's present) by listing the type's objects that shold go into those bins
3) Bins should come in the same order as the materials listed above
4) All bins should be listed in hte output, even if some of them are empty
5) If an object is made of two materials, its should be listed in both fo the respective bins
6) the order of the types in each bin should be the same as the order of their respective objects was in the input list

input: An array of objects
output: an array of subarrays

questions:

Examples/test cases:

Data structures:
Array of objects
arrays and objects
and strings
Array of subarrays

Order is: [
array0 is paper
array1 is glass
array2 is organic
array3 is plastic
]

Algorithm:
-Declare function `sortGarbage`, accepting parameter `arrayOfObjects`.

  -Declare answer = new Array(4).fill().map(element => []);

  -Iterate through `arrayOfObjects` with parameter `garbageObject`
    -Pass to helper function `containsPaper`, passing the `garbageObject` and `answer`
    -Pass to helper function `containsGlass`, passing the `garageObject` and `answer`

-Helper function `containsPaper`
  -declare `arrayOfKeys` to Object.keys(garbageObject)
  
  -Iterate through `arrayOfKeys`, one key at a time.
    -if garbageObject[key] === "paper"
    -answer[0].push(garbageObject.type)


- Helper function `containsGlass`
  -declare `arrayOfKeys` to Object.keys(garbageObject)
  -Iterate through `arrayOfKeys`, one key at a time.
    -If garbageObject[key] === 'glass'
    -answer[1].push(garbageObject.type)
*/

function sortGarbage(arrayOfObjects) {
  let answer = new Array(4).fill().map(element => []);
  
  arrayOfObjects.forEach(garbageObject => {
    containsPaper(garbageObject, answer)
    containsGlass(garbageObject, answer)
    containsOrganic(garbageObject, answer)
    containsPlastic(garbageObject, answer)
  })
  
  return answer;
}

function containsPlastic(garbageObject, answer) {
  let arrayOfKeys = Object.keys(garbageObject);
  
  arrayOfKeys.forEach(key => {
    if (garbageObject[key] === "plastic") {
      answer[3].push(garbageObject.type)
    }
  })
}

function containsOrganic(garbageObject, answer) {
  let arrayOfKeys = Object.keys(garbageObject);
  
  arrayOfKeys.forEach(key => {
    if (garbageObject[key] === "organic") {
      answer[2].push(garbageObject.type)
    }
  })
}

function containsGlass(garbageObject, answer) {
  let arrayOfKeys = Object.keys(garbageObject);
  
  arrayOfKeys.forEach(key => {
    if (garbageObject[key] === "glass") {
      answer[1].push(garbageObject.type)
    }
  })
}

function containsPaper(garbageObject, answer) {
  let arrayOfKeys = Object.keys(garbageObject);
  
  arrayOfKeys.forEach(key => {
    if (garbageObject[key] === "paper") {
      answer[0].push(garbageObject.type)
    }
  })
}

let input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

console.log(sortGarbage(input));
// output = [
// ["wine bottle", "amazon box", "beer bottle"],
// ["wine bottle", "beer bottle"],
// ["rotten apples", "out of date yogurt"],
// ["out of date yogurt"]
// ]

//Anna's solution

function recycle(items) {
  let recycleGroups = { paper: [], glass: [], organic: [], plastic: [] };

  items.forEach(item => {
    getMaterial(recycleGroups, item, item.material);
    getMaterial(recycleGroups, item, item.secondMaterial);
  });

  return recycleGroups;
}

function getMaterial(items, item, material) {
  if (material === 'paper') {
      items.paper.push(item.type);
    } else if (material === 'glass') {
      items.glass.push(item.type);
    } else if (material === 'organic') {
      items.organic.push(item.type);
    } else if (material === 'plastic') {
      items.plastic.push(item.type);
  }
}

let input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

console.log(recycle(input));