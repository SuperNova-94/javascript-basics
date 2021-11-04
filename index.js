let myRank = 20000;
switch (myRank) {
    case 10000:
        console.log('You are a member!');
        break;
    case 20000:
        console.log('You are an addict!');
        break;
    case 60000:
        console.log('You are VIP!');
        break;

    default:
        console.log('Power-User')
}

// Personal preference:
let x = 60000;
if (x === 10000)
    console.log('You are a member!');
else if (x === 20000)
    console.log('You are an addict!');
else if (x === 60000)
    console.log('You are a VIP!');
else 
    console.log('Power-User')