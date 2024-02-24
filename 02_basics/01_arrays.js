// Array

const myArr = [0, 1, 2, 3, 4, 5]
// const myHeros = ["shaktiman", "superman"]

const myAr2 = new Array(1, 2, 3, 4) //Another method to define array
// console.log(myArr[1]);

// ************** Array methods *****************

// myArr.push(6) // Adds from Ending of an array
// myArr.pop() // Removes from Ending of an array

// myArr.unshift(9) // Adds from Beginning of an array
// myArr.shift()  // Removes from Beginning of an array

// console.log(myArr.includes(9)); //Used to get to know a particular thing , here for eg is 9 included in the array , returns a boolean.
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() //Converts array into a string 
// const newArr = myArr.join("-") // Adds a "-" inbetween arrays and converts it into a string

// console.log(myArr); //PRINTS Array methods
// console.log( newArr);
// console.log(typeof newArr);


// ****************Slice, Splice****************

console.log("A ", myArr);

// const myArr1 = myArr.slice(1, 3);
// console.log(myArr1);
// console.log("B ", myArr); //Does not change the original array


// const myArr2 = myArr.splice(1, 3);
// console.log("C ", myArr);  // Returns the original array by removing the indexes from 1 to 3 i.e, Changes the original array
// console.log( "Removed elements" , myArr2); // Prints the removed elements

const myArr3 = myArr.splice(1, 3, 3333,5555); //Here 1 is the position to add new elements, 3 is the length to be removed from the array , other two spaces filled are the new elements to be added to the array which.
console.log("D - New Array ", myArr);
console.log( "Removed elements" , myArr3); // Prints the removed elements

//OTHER ONE
// const num = [1,2,3,4,5]
// console.log(num.splice(1,3,22,44));
// console.log(num);