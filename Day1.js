// Activity 1: Variable Declaration

// . Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var num = "12345"
console.log(num);

//-- Perefer not use "var" because of the issue in block scope and functional scope.

// . Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let name = "Biraj"
console.log(name);

// Activity 2: Constant Declaration

// . Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const ans = true;
console.log(ans);

// Activity 3: Data Types

// . Task 4: Create variables of different data types (number, string, boolean, object, array) and
// log each variable's type using the typeof operator.
let str = 'String';
console.log(typeof str);
let num = 123;
console.log(typeof num);
let bigint = 900719925124740999;
console.log(typeof bigint);
let bol = true;
console.log(typeof bol);
let ud = undefined;
console.log(typeof ud);
let nul = null;
console.log(typeof nul);
let student = {
    firstName: "John",
    lastName: null,
    class: 10
};
console.log(typeof student);
// Activity 4: Reassigning Variables

// . Task 5: Declare a variable using 1et , assign it an initial value, reassign a new value, and log both values to the console.
let a1 = "Biraj"
console.log(a1)
a1 = "Coder"
console.log(a1);
// Activity 5: Understanding const

// . Task 6: Try reassigning a variable declared with const and observe the error.
/*
//TypeError: Assignment to constant variable.
const a1 = "Biraj"
console.log(a1)
a1 = "Coder"
console.log(a1);
*/

// Feature Request:
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
