// Falsy (false)
// undefined
// null
// 0 
// false
//  ''
//  NaN

// Anything that is not Falsy is Truthy

// Example:
let userColor = 'violet';
let defaultColor = 'indigo'
let currentColor = userColor || defaultColor;

console.log(currentColor);

let userColor2 = null;
let defaultColor2 = 'indigo'
let currentColor2 = userColor2 || defaultColor2;

console.log(currentColor2);