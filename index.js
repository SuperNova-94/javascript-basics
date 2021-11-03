function greeting() {
    console.log('Bienvenue');
}
greeting(); // function call

// Functions below are all performing a task //
// Example 1:
function greet(name){
    console.log('Hello' + ' ' + name);  // + concatinates
}
let input = prompt('Enter your name');
greet(input);

// Example 2:
function welcome(firstName, lastName) {
    console.log('Hello' + ' ' + firstName + ' ' + lastName);
}
let a = prompt('Enter your first name');
let b = prompt('Enter your last name');
welcome(a,b);

// Example 2: Without getting input from the user
function simple(x, y) {
    console.log(x + ' ' + y + ' just joined this server!');
}
simple('James', 'Nikolas');
