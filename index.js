/*
    Scenario:
    If a user has reached 60,000 rank points, they are 'VIP', otherwise 'Member'
*/

let rankPoints = prompt('Enter rank points:');
let type = rankPoints >= 60000 ? 'VIP' : 'Member';
console.log(type);