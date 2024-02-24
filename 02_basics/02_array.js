const marvelHeros = ["thor", "Ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

//***************CONCAT****************//
// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);
// ---------------OR---------------
// console.log(marvelHeros.concat(dcHeros)); //PRINTS the same and existing array remains intact

//*******************SPREAD OPERATOR********************//
const all_new_heros = [...marvelHeros, ...dcHeros] //Spreads the element individually and then creates an array "..." are used to spread an array.
// console.log(all_new_heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const realAnotherArray = anotherArray.flat(3) //Give the depth no. inside this () bracket , if the depth is uncountable use "Infinity"
// const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);

//***********Some more ARRAY Properties*************
console.log(Array.isArray("Salman")) //Returns a boolean value
console.log(Array.from("Salman")) //Converts any object into an array
console.log(Array.from({name: "salman"})) // Interesting Case , PRINTS an Empty Array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //Returns an ARRAY

//Read the Documentation (MDN Docs)