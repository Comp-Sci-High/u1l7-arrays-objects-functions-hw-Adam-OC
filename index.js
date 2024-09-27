// HOMEWORK: CRUD Operations and Functions 
// Follow the instructions and complete each task.

// TASK 1: Arrays - Create, Read, Update, Delete (CRUD)
// A. Create an array called `fruits` that contains: "apple", "banana", "cherry".
// B. Read (log) the second fruit in the array.
// C. Update the third fruit to "orange".
// D. Add a new fruit, "grape", to the end of the array.
// E. Delete the last fruit in the array.
// F. Log the updated array.
let fruit = ["apple", "banana", "cherry"]
console.log(fruit)
fruit.push("orange")
fruit.pop()

// TASK 2: Objects - Create, Read, Update, Delete (CRUD)
// A. Create an object called `student` with the keys: name, age, and grade. (add your own values)
// B. Read (log) the student's age.
// C. Update the student's grade to "A+".
// D. Add a new property `isGraduated` and set it to `true`.
// E. Delete the `age` property from the object.
// F. Log the updated student object.

let student = {
   name:"Adam Osorio",
   age:17,
   grade:12,
   height:"5'9.5",
}
console.log(student.age)
student['grade'] = "A+"
student.IsGraduated = "true"
delete student.age
console.log(student)

// TASK 3: Functions - Create and Call Functions
// A. Write a function called `calculateTotal` that takes two inputs: price and quantity.
//    The function should return the total price by multiplying price by quantity.
function calculateTotal(x,y){
   let price = x * y
   return price
}


// B. Call the `calculateTotal` function 3 times and console log the outputs
// First with the inputs 20 and 5
// Second with the inputs 12 and 8
// Third with the inputs 9 and 42
console.log(calculateTotal(20,5))
console.log(calculateTotal(12,8))
console.log(calculateTotal(9,42))



/*
   ==== Final Commit Instructions ====
   At this point, commit your work with an appropriate commit message.
   Sync changes to push your commits and submit the homework!
*/
