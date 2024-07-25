// Day 5: Functions
// Tasks/Activities:
// Activity 1: Function Declaration

// . Task 1: Write a function to check if a number is even or odd and log the result to the console.

function oddEven(num) {
    if (num % 2 == 0) {
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}

oddEven(5);

// . Task 2: Write a function to calculate the square of a number and return the result.

function squareOfNum(num) {
    console.log(num * 2);
    return num * 2;
}

squareOfNum(5);

// Activity 2: Function Expression

// . Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const max = (a, b) => {
    const result = Math.max(a, b);
    console.log(result);
    return result;
};

max(4,5);

// . Task 4: Write a function expression to concatenate two strings and return the result.

const concatStrings = (str1, str2) => str1 + str2;

concatStrings("Hello","World");

// Activity 3: Arrow Functions
// . Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

let addNum = (num1, num2) => {
    console.log(num1 + num2);
    return num1 + num2;
}

addNum(4,5);

// . Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

let strFind = (str1, str2) => {
    let str = new String(str1);
    let find = new String(str2);

    res = str.indexOf(find);
    if (res>=0) {
        console.log(true);        
    } else {
        console.log(false);        
    }
    return res;
}

strFind("Hello My name is Biraj" , "B");

// Activity 4: Function Parameters and Default Values
// . Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.



// . Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

// Activity 5: Higher-Order Functions

// . Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
// . Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

// Feature Request:
// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.
// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.
