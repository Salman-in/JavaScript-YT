var c = 300 //Globally scoped 

let a = 300
if (true) {
    let a = 10 //Block scoped
    const b = 20 //Block scoped
    var c = 30 //Globally scoped 
    // console.log("INNER: ", a); 
}
// console.log(a); //Prints only 300 , as a = 10 is block scoped.
// console.log(b);
// console.log(c); //As var keyword is globally scoped , the variable declared inside the "if block" will be executed outside the block.

//Scope in FUNCTIONS
function one(){
    const username = "salman"

    function two(){
        const website = "youtube"
        console.log(username); //Will be able to print the 'username'//
    }
    // console.log(website); //Will throw an error as 'website' is block scoped in fn 'two'//

      two() //Calling the fn 'two' //
}
// one() //Calling the fn 'one' //

//Scope in IF-ELSE
if (true) {
    const username = "salman"
    if (username === "salman") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); //Will throw an error//
}

// console.log(username); //Will throw an error//


// ++++++++++++++++++ Interesting cases(Function Hoisting basics) ++++++++++++++++++ //

// console.log(addone(5)) //In this case the declaration can be made before the function initialization//

function addone(num){
    return num + 1
}


// console.log(addTwo(5));  //In this case the declaration cannot be made before the function initialization,as the function defined here is a bit different i.e, the function is declared to a variable 'addTwo' //

const addTwo = function(num){
    return num + 2
}


