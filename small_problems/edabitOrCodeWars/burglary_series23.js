//https://edabit.com/challenge/MregZPPJWSxhXtrNB

// Burglary Series (23): Find and Remove
// The insurance guy calls. They were about to pay you all that fortune you've been anxiously waiting for, but they detected further irregularities; the list of stolen items is misformatted and appears to contain other entries that don't belong there. Find and remove them.

// You receive an object with nested objects with strings as values. Convert their values to number and return an object without the entries that evaluate to NaN.

/*
Problem: Given an object which is a house, the keys are rooms and the values are stuff in the room. the stuff's keys are objects and the values are their cost

They want us to convert the string numbers to Numbers and if the value is NaN then remove the property completely

rules/requirements:

input:
output:

questions:

Examples/test cases:

Data structures:

Algorithm:

Declare arrayOfKeyRooms = Object.keys(object)

Iterate through the room names, one by one
  Pass into helper function `formatProperties` passing the room
  
  
  
Helper function `formatProperties`
  declare `arrayOfItems` set it equal to Object.keys(object)

  -Iterate through the item names, one by one
    -If one of them when you do Number(string) !== NaN
      then mutate it
    
  -Then filter the result array foor the ones that don't equal NaN
*/

function findAndRemove(mansion) {
  let arrayOfRooms= Object.keys(mansion);
  let answer = {}
  arrayOfRooms.forEach(roomName => {
    let newRoom = formatProperties(mansion[roomName])
    answer[roomName] = newRoom
  })
  return answer;
}

function formatProperties(room) {
  let arrayOfItems = Object.keys(room);
  arrayOfItems.forEach(itemName => {
    room[itemName] = Number(room[itemName]);
  })
  
  let arrayOfSubarrays = Object.entries(room);
  
  let b = arrayOfSubarrays.filter(subarray => {
    return !isNaN(subarray[1])
  })
  
  let c = Object.fromEntries(b)
  return c;
}



console.log(findAndRemove({
    bedroom: {
      slippers: "10000",
      piano: "550",
      call: "vet",
      travel: "world",
    }}))
  // }) ➞ {
  //   bedroom: {
  //     slippers: 10000,
  //     piano: 5500,
  //   },
  // }
 // findAndRemove({
 //    kitchen: {
 //      ["gold spoons"]: "900",
 //      piano: "550",
 //      notes: "ga0r76ba22g4e",
 //    },
 //    cellar: {
 //      reminder: "dog",
 //      bottle: "750",
 //    }
  // }) ➞ {
  //   kitchen: {
  //     ["gold spoons"]: 900,
  //     piano: 550,
  //   },
  //   cellar: {
  //     bottle: 750,
  //   },
  // }
// Notes
// The type of NaN is actually number.
// If you have suggestions on how to present or further test this challenge please leave a comment.
// This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.