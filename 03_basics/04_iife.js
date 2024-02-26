// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    //Unnamed IIFE
    console.log(`DB CONNECTED TO ${name}`);
} )('SALMAN');

//*********NOTES*********//
/*Syntax:
** ()() ----> 1st parenthesis is for function definition , 2nd parenthesis is for execution call for defined fn. Also,don't forget to use ; at the end **
**This method is to execute the code immediately.
**Also to eradicate global scope pollution in the code.
*/
//Hello nijad