/* 
    Operators:
        Operators Variables --> Expressions --> Algorithms
            Types:
                Arithmetic ✔
                Assignment  ✔
                Comparison
                Logical
                Bitwise
*/

// Arithmetic //
let x = 10;
let y = 3;

console.log(x + y); // Addition Operator
console.log(x - y); // Subtraction Operator
console.log(x * y); // Multiplication Operator
console.log(x / y); // Division Operator
console.log(x % y); // Remainder of division Operator
console.log(x ** y); // Exponentiation Operator

// Increment (++)
console.log('x = ' + x);
console.log('x incremented: ' + ++x);  // Increments current value then displays
console.log(y++); // Displays current value first and then increments
console.log(y); // Displays the incremented value of y

// Decrement (--)
console.log('x is: ' + x);
console.log('x is now: ' + --x);

// Assignment //
let x = 20;

x = x + 5; 
x += 5; // Alternative to line 36

x = x * 3;
x *= 3; // Alternative to line 39