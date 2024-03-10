// **********for of loop*********** //

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

//Applying for Strings
const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);
for (const [key, value] of map) {
    // console.log(key, ':', value);
}

// Applying for Objects(We cannot , it will throw an error)
// Use ForIn loop (In next file[fourForin.js])
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    // console.log(key, ':', value);
    
}