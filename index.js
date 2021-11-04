// Stricts Equality: Must be of same Type + same Value [Default]
console.log(1 === 1);
console.log('1' === 1); // false as a string and a number is being compared

// Lose Equality: Does not care about what types you have, will be converted to ensure equal Type. [NOTE: Will only check if the Values are equal] 
console.log(2 == 2);
console.log('2' == 2);