// Singleton (Constructor Methods)
// Object.create (Constructor Methods)

//**************Object literals**************//

const mySym = Symbol("key1") //Declaring a symbol


const JsUser = {
    name: "Salman",
    "full name": "Salman Najah",
    [mySym]: "mykey1",
    age: 18,
    location: "Bengaluru",
    email: "salman@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]) //Just Another way to access the elements of an object
console.log(JsUser["full name"]) //If we have spaces in between  in keys, we have no option other than using sqaure notation
console.log(JsUser[mySym])

// JsUser.email = "salman@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email = "salman@microsoft.com"
// // console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());