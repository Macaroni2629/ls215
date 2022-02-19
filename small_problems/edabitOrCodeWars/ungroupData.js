//https://edabit.com/challenge/NcRsSwrJbMm4dRbCk

// Ungroup Data in an Object
// You volunteered to help out teaching a preschool in your area! You were given an array of all students and some important data about them, grouped by their teacher. Create a function that will ungroup every student so you can look at their details individually.

/*
Problem: Given an array of all students grouped by teacher, write a function that will ungroup every student so you can look at their details individually.

rules/requirements:

input: an array of objects.  Each object is a class with a teacher.-
output:
 an array of objects; each object is a student. Each student may have different properties.
questions:

Examples/test cases:

Data structures:

Algorithm:
-Declare function `ungroupStudents` taking parameter `arrayOfObjects`

-Declare `answer` = []

-Iterate through array of objects, passing one class at a time
 -Declare arrayOfClasses with Object.keys(arrayOfObjects)
 
 -Iterate through arrayOfClasses, one class at a time.
  -Access the class's data property
    -Pass the data array into `makeStudent` helper function, ppassing an array of Objects along with the teacher property along with `answer`
    
    
  -Return answer
    
    
-Helper function `makeStudent`
  -Iterate through the data, one student at a time
    -Create an object, duplicate the data
    -Then also create the key value property for teacher
    
    -Push that all into `answer`
*/

function ungroupStudents(school) {
  let answer = [];
  
  let arrayOfClasses = Object.keys(school)
  arrayOfClasses.forEach((classObjectKey, index) => {
    let arrayOfStudents = school[classObjectKey].data    
    makeStudent(arrayOfStudents, answer, school[index]["teacher"])
  })
  return answer;
}

function makeStudent(arrayOfStudents, answer, teacher) {
  arrayOfStudents.forEach(studentObject => {
    let newObj = {}
    newObj["teacher"] = teacher;
    let newStudent = Object.assign(newObj, studentObject)
    answer.push(newObj);
  })
}



console.log(ungroupStudents([{
  teacher: "Ms. Car",
  data: [{
     name: "James",
     emergencyNumber: "617-771-1082",
  }, {
     name: "Alice",
     alergies: ["nuts", "carrots"],
  }],
}, {
  teacher: "Mr. Lamb",
  data: [{
    name: "Aaron",
    age: 3
  }]
}]) )



// [{
//   teacher: "Ms. Car",
//   name: "James",
//   emergencyNumber: "617-771-1082",
// }, {
//   teacher: "Ms. Car",
//   name: "Alice",
//   alergies: ["nuts", "carrots"],
// }, {
//   teacher: "Mr. Lamb",
//   name: "Aaron",
//   age: 3,
// }]