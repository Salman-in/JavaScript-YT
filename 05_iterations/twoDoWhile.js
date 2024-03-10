//*********WHILE LOOP**********//
let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ['flash', "batman", "superman"]
let arr = 0
while (arr < myArray.length) {
    // console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1 //Condition for the loop to run by increments//
}

//*********DO WHILE LOOP**********//
//In this loop the loop runs atleast once w/o checking any condition, then after executing for once the conditon in while is checked and further proceessed//
let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10); //This is the condition that need to be checked//