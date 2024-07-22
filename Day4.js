// Day 4: Loops
// Tasks/Activities:
// Activity 1: For Loop

// . Task 1: Write a program to print numbers from 1 to 10 using a for loop.

let num = 10;
for (let i = 1; i < num; i++) {
    console.log(i);
}

// . Task 2: Write a program to print the multiplication table of 5 using a for loop.

for (let index = 1; index <= num; index++) {
    console.log(index*5);
}

// Activity 2: While Loop

// . Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let s =0;
let sum=0;
while (s<=num) {
    sum= sum + s;
    s++;
}
console.log(sum);

// . Task 4: Write a program to print numbers from 10 to 1 using a while loop.

// Activity 3: Do ... While Loop

let n=10;
do {
    console.log(n);
    n--;
} while (n>=0);

// . Task 5: Write a program to print numbers from 1 to 5 using a do ... while loop.

let ser=0;
do {
    console.log(ser);
    ser++;
} while (ser<=5);

// . Task 6: Write a program to calculate the factorial of a number using a do ... while loop.

let f=5;
let fact=1;
do {
    fact=fact*f;
    f--;
} while (f>0);
console.log(fact);

// Activity 4: Nested Loops

// . Task 7: Write a program to print a pattern using nested for loops:
// *
// **
// ***
// ****

let rows = 5;
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
   // print stars for n number of times in each row
   for (let num = 1; num <= n; num++) {
      pattern += "*";
   }
   pattern += "\n";
}
console.log(pattern);

// Activity 5: Loop Control Statements

// . Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let i = 0; i < num; i++) {
    if (i==5) {
        continue;
    }
    console.log(i);        
}

// . Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let i = 0; i < num; i++) {
    if (i==7) {
        break;
    }
    console.log(i);        
}

// Feature Request:
// 1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
// 2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
// 3. Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
// 4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
// 5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do ... while loop.