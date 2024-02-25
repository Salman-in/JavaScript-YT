const user = {
    username: "Salman",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to the website!`);
        // console.log(this); //Prints the given context//
    }
}
// user.welcomeMessage() //First context //
// user.username = "Sam" //Context is changed //
// user.welcomeMessage() //Second context //

// console.log(this); //Prints an empty object as there is no given context//



// function chai(){
//     let username = "salman"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "salman"
//     console.log(this.username);
// }

// chai()

//***************ARROW FUNCTION**************//
const chai = () => {
    let username = "salman"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } //Explicit return 

// const addTwo = (num1, num2) =>  num1 + num2 //Implicit return (No need to write return keyword)
// const addTwo = (num1, num2) => ( num1 + num2 ) //Implicit return (No need to write return keyword)
const addTwo = (num1, num2) => ({username: "salman"}) //Returning an object

console.log(addTwo(3, 4))
