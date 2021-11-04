// Hour
// If hour is between 1am and 12pm: Good morning!
// If it's between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

/*  Format:

    if (condition) {
        statement
    }
    else if (anotherCondition) {
        statement
    }
    else if (yetAnotherCondition) {
        statement
    } else {
        statement
    }

 */
let hour = prompt('Enter current time in 24hr format:');

if (hour >= 1 && hour < 12)
    console.log('Good morning!');
else if (hour >= 12 && hour < 18) 
    console.log('Good afternoon!');
else 
    console.log('Good evening!');