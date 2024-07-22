// Day 3: Control Structures
// Tasks/Activities:

// Activity 1: If-Else Statements

// . Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num=0;

if (num>0) {
    console.log("Positive");
}
else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// . Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 88
if (age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("18+ Only Allowed");
}

// Activity 2: Nested If-Else Statements

// . Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let num1=1;
let num2=2;
let num3=3;

if (num1 > num2 && num1 > num3) {
    console.log("num1 is bigger");
} else if (num2 > num1 && num2 > num3) {
    console.log("num2 is bigger");
} else {
    console.log("num3 is bigger");
}

// Activity 3: Switch Case
// . Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day;
switch (new Date().getDay()) {
  case 0:
    day = console.log("Sunday");
    break;
  case 1:
    day = console.log("Monday");
    break;
  case 2:
    day = console.log("Tuesday");
    break;
  case 3:
    day = console.log("Wednesday");
    break;
  case 4:
    day = console.log("Thursday");
    break;
  case 5:
    day = console.log("Friday");
    break;
  case  6:
    day = console.log("Saturday");
  default:
    console.log("Please provide specific number");
    break;
}

// . Task 5: Write a program that uses a switch case to assign a grade (A', 'B', 'C', 'D', 'F) based on a score and log the grade to the console.

let grade = 100;

switch (grade/10) {
    case 10 :
    case 9:
        console.log("A Grade");
        break;
    case 8:
        console.log("B Grade");
        break;
    case 7:
        console.log("C Grade");
        break;
    case 6:
        console.log("D Grade");
        break;
    case 5:
        console.log("E Grade");
        break;    
    default:
        console.log("F Grade");
        break;
}

// Activity 4: Conditional (Ternary) Operator
// . Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

a=3;
a%2==0 ? console.log("Even"): console.log("Odd") ;

// Activity 5: Combining Conditions
// . Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year=2000;

if (year % 4 == 0) {
    if (year % 100 != 0 || year % 400 == 0){
        console.log("Leap Year");
    }    
}
else{
    console.log("Not a Leap year");
}

// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.

