https://edabit.com/challenge/xrsiqZKrMoT2skt9i

// Burglary Series (22): Sign All
// You finally receive the entire stolen list document from the police. You need to sign at the end of the document but also each sub-list corresponding to each room in your house where the items were stolen.

// You are given two arguments, one object with nested objects and a string that corresponds to your name. The object already contains several signature properties, one on the root, the others on each nested object. Return an object with all containing signature values set to your name.

// Examples
/*
Declare function `signAll` that takes parameter `obj` `name`

  Declare `arrayOfKeys1` = and pass in `obj` as argument.
  
  


*/

// const signAll = (obj, name) => {
//   for (const o in obj) obj[o].signature = name;
//   obj.signature = name;
//   return obj;
// };

function signAll(o, s) {
  Object.keys(o).forEach(e=>{
    o[e]['signature']=s
  })
  o['signature']=s
  return o
}

// function signAll(obj, name) {
//   let arrayOfKeys1 = Object.keys(obj)
//   let newObj = {...obj}
  
//   arrayOfKeys1.forEach(key => {
//     if (key === 'signature') {
//       newObj[key] = name;
//     }
//   });
  
//   arrayOfKeys1.forEach(key => {
//     if (key !== 'signature') {
//       checkForSignatures(key, newObj, name)
//     }
//   })
  
//   return newObj;
// }

// function checkForSignatures(key, newObj, name) {
//   let newObj2 = obj[key];
  
//   let arrayOfKeys = Object.keys(newObj2);
  
//   arrayOfKeys.forEach(key => {
//     if (key === 'signature') {
//       newObj2[key] = name
//     }
//   })
// }



 const obj = {
    kitchen: {
      painting: 100,
      piano: 1000,
      signature: "",
    },
    bathroom: {
      stereo: 220,
      signature: "",
    },
    signature: "",
  };

 console.log(signAll(obj, "Rocky")) // ➞ {
//     kitchen: {
//       painting: 100,
//       piano: 1000,
//       signature: "Rocky",  // changed
//     },
//     bathroom: {
//       stereo: 220,
//       signature: "Rocky",  // changed
//     },
//     signature: "Rocky",  // changed
// }