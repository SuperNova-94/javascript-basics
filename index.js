/*
Logical AND (&&)
Returns TRUE if both operands are TRUE
*/
console.log(true && false);

// Example:
let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;

console.log('Are you eligible for loan:', eligibleForLoan);

/*
Logical OR (||)
Returns TRUE if one of the operands is TRUE
*/

//Example: 
let highIncome2 = true;
let goodCreditScore2 = true;
let eligibleForLoan2 = highIncome2 || goodCreditScore2;

console.log('Are you eligible for loan:', eligibleForLoan2);

// NOT (!)
let applicationRefused = !eligibleForLoan;
console.log('Application Refused:', applicationRefused);