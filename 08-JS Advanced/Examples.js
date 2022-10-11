// ES5
var x = function(x, y) {
  return x * y;
}

// ES6

const x = (x, y) => { return x * y };
const x = (x, y) => x * y

const cars1 = ["Saab", "Volvo", ..."BMW"];
const cars2 = ["Fiat", "Toyota"];

const combined = [cars1, cars2];

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const {eyeColor, ...person2} = person

// export
const retrieveSession = () => { console.log("retrieve")}

module.exports = { retrieveSession}


// to import using 
//const session = require("./retrieveSession.js")

// exports
export const retrieveSession2 = () => { console.log("retrieve")}

//import to another file
import { retrieveSession2 } from "./retrieveSession.js"


const retrieveSession2 = () => { console.log("retrieve")}


// greeting.js
export let message = 'Hi';

export function setMessage(msg) {
  message = msg;
}

// app.js
import {message, setMessage } from './greeting.js';
import { resolve } from "path";


const error = true
// Promise and await
const waitingSavingDatabase = new Promise((resolve, reject) => {
  //database got error 
  if(error){
    reject("Doesn't work")
  }
  // resolve("I am done!")
  setTimeout(() => resolve("I am done!"), 5000)
})
waitingSavingDatabase
.then((value) => {
  console.log("value", value)
  return "hel"
})
.catch((err) =>{ console.log("error", err)})
//////////
async function getUsers(){
  try{
    const result = await waitingSavingDatabase
    console.log("I'm inside the try block")
  }catch(err){
    console.log("Error in try")
  }
}

/// METHOD 2
waitingSavingDatabase
.then((value) => {
  console.log("value", value)
},
(err) =>{ console.log("error", err)})

console.log("exceuted")

const fruits = ["Apple", "Banana", "Mango", "Pineapple"]

// fruits[1] // "Banana"
// let mango, pineapple
const [mango,pineapple] = fruits

console.logs("fruits: ", fruits)
console.logs("Mango: ", mango)
console.logs("Pineapple: ", pineapple)

// to find Mango
console.log("Mango Found ", fruits.indexOf("Mango"))
console.log("Mango Found ", fruits[fruits.indexOf("Mango")])

//Does it exist in the array
console.log("Mango Found ", fruits.includes("Mango"))

const fruits2 = ["Apple", "Banana", "Mango", "Pineapple", "Berry"]

console.log("filter: ",  fruits2.filter((f) => f.startsWith("B")))