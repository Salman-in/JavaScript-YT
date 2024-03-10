// For Arrays
const coding = ["js", "ruby", "java", "python", "cpp"]
//***************BASIC SYNTAX*****************//
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

// Using regular function //
// coding.forEach( function (val){
//     console.log(val);
// } )

// Using Arrow function //
// coding.forEach( (item) => {
//     console.log(item);
// } )

// Using other methods of function //
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// Applying to objects inside an array //

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
    console.log(item.languageFileName);
} )