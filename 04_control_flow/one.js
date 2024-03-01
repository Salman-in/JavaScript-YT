// If-else //
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } 
// else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); //Here the variable power is not defined , as the variable power is defined inside the block scope


const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); //Directly without any scope(Unreadable & not a good practice)

// if (balance < 500) {
//     console.log("less than 500");
// }
// else if (balance < 750) {
//     console.log("less than 750");

// }
// else if (balance < 900) {
//     console.log("less than 750");

// }
// else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy the course");
} //In this case , even if one condition is false then the code will not be executed(Here its 2 == 3),basically 'AND' statement.

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
} //Basically 'OR' Statement.