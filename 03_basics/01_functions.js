//****Function syntax****//
function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("L");
    console.log("M");
    console.log("A");
    console.log("N");
}
// sayMyName() //Execution(Calling a function)


// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2); //This only PRINTS and does not return.
// }
// addTwoNumbers(3, 5) //Execution(Here numbers are 'argument' and "num1" and "num2" are 'parameters')

function addTwoNumbers(num1, num2){
    return num1 + num2  //Here the solution is Returned.
    // let result = num1 + num2 //Here the result variable is Block scoped//
    // return result
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter your Username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Salman"))
// console.log(loginUserMessage())

//**********************************************************************************************/
//NOTES:
//1.Here username = "sam" is the default value which is given,So in this condition 'if statement' will never be executed as the username will never be undefined and if any other name is executed it will overwrite 'sam'.

//2.'!username' refers to 'not equal/false' , in the sense whenever user does not enter any values it will be the condition of 'username === undefined' which is shortly written as '!username'.

//3.In line 31 after 'return' is executed , it will exit and will not check for the line 33.

//4." return `${username} just logged in`" just returns the executed value by the argument.
//**********************************************************************************************/ 

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000));
//Here 200 and 400 is taken by parameters val1 and val2 respectively and remaining numbers by the parameter "...num1".


//************Functions for OBJECTS************/
const user = {
    username: "salman",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
//Here, Parameter is "anyobject" and Argument is "user".

// handleObject({
//     username: "sam",
//     price: 399
// })
//Another way to call the function//


//************Functions for ARRAYS************/

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//**********Execution(Calling the function)************//
console.log(returnSecondValue(myNewArray)); 
//--------------------------------OR-------------------------------//
const secondVal = returnSecondValue(myNewArray)
console.log(secondVal);
//--------------------------------OR-------------------------------//
console.log(returnSecondValue([200, 400, 500, 1000])); //Passing the array directly//