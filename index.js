// let name = 'John'; 
// let age = 21;
let person = {
    // object literal
    name: 'John',
    age: 21
};
console.log(person);

// Change name of the person //

// Method 1: Dot Notation (Default)
person.name = 'Alexander'
console.log(person.name);

// Method 2: Bracket Notation
person['name'] = 'Jack Sparrow'
console.log(person.name);

// Method 2: Example where/how it can be used
let gen = 'name'
person[gen] = 'Joe'
console.log(person.name);