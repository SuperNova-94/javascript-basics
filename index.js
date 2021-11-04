// 1 = 00000001
// 2 = 00000010
// R = 00000011
console.log(1 | 2); // Bitwise OR

// 1 = 00000001
// 2 = 00000010
// 3 - 00000011
// R = 00000000
console.log(1 & 2); // Bitwise AND

// Example: Access Control System //
/* Read, Write, Execute
    Read = 00000100 
    Write = 0000010
    Execute = 00000001 
*/

const readPermission = 4;
const writePermission = 2; 
const exectutePermission = 1; 

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission; // Bitwise OR
console.log(myPermission);

let message = 
    (myPermission & writePermission) ? 'Yes':'No' // Bitwise AND
console.log(message);

// Take-away:
/* 
    --> With the bitwise OR operator we can add permission.

    --> With the bitwise AND operator we can check to see if we have a given permission.
*/