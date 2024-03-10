// FOR LOOPS //

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}
// *********Loop inside loop*********
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    // console.log(`Multiplication table of ${i}`);
   for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and outer loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j );
    // console.log(`${i} * ${j} = ${i*j} `); //Clean code
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


// ********break and continue*********

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break //Breaks the loop at a given index//
//     } //NOTE: If we don't use break it will also print the given index//
//    console.log(`Value of i is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue //Continues the loop after skipping the given index//
    }
   console.log(`Value of i is ${index}`);  
}