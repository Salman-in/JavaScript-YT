// const tinderUser = new Object() //Singleton object
const tinderUser = {} //Non Singleton object (Both are Same)

tinderUser.id = "123abc"  //Adding key value pairs to the empty object
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    //****Nesting Objects****//
    fullname: {
        userfullname: {
            firstname: "Salman",
            lastname: "Najah"
        }
    }
}
// console.log(regularUser.fullname); //Prints the object fullname 
// console.log(regularUser.fullname.userfullname); //Prints the object userfullname 
// console.log(regularUser.fullname.userfullname.firstname); //Prints Salman 
// console.log(regularUser.fullname.userfullname.lastname); //Prints Najah 

//***********Merging Objects**********//

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //Will print the objects inside an object as it is(As we saw the same in array), so it is better to use the below one (Line 32).
const obj3 = {...obj1, ...obj2} //Will return a single object.(Will use mostly)

// const obj3 = Object.assign({}, obj1, obj2, obj4) //Another syntax for the same(Read the docs).
//In the above syntax "{}" acts as a 'source object' to which 'target objects' need to be merged.

// const obj3 = Object.assign( obj1, obj2, obj4) //In this Case it returns 'True' for Line 41.

// console.log(obj3);

// console.log(obj3 === obj1); 
//It returns 'false' in the case of using an empty object '{}'(Line 34),[ because the new object assigned is "{}", so all the objects will get merged into the newly defined empty object. Hence, obj1 is not equal to obj3]
//NOTE: Read the docs //


//********Array of Objects*********//
const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "a@gmail.com"
    },
]
// console.log(users[0].email) //Accessing values inside an array.

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //Prints as Array of keys of the object(tinderUser).
console.log(Object.values(tinderUser)); //Prints as Array of values of the object(tinderUser).
console.log(Object.entries(tinderUser)); //Prints an array with collection of arrays of 'key-value pairs' of the object(tinderUser).

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //Returns 'True' //
 

const course = {
    coursename: "JS-Course",
    price: "999",
    courseInstructor: "Salman"
}

// console.log(course.courseInstructor); //General way of calling

//Another way of calling //
const {courseInstructor : instructor} = course // Helps in DeStrucutring 'courseInstructor' to 'instructor' //

// console.log(courseInstructor);
console.log(instructor); //Calling DeStructured value//

//****************JSON - JavaScript Object Notation(API Calls)*****************/
//FORMAT 01//
// {
//     "name": "Salman",
//     "coursename": "JS-Course",
//     "price": "free"
// }

//FORMAT 02//(Objects inside Array)
// [
//     {},
//     {},
//     {}
// ]

