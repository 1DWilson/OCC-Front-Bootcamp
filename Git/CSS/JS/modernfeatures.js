//Modern JS features

function greet() {
    console.log('Hello.');
}

//Arrow Functions
const greet = () => {
    console.log('Hello.')
}

const square = (a) => a *a;
console.log(square(5));

// Enhanced Object Literals
const person = {
    name: "TJ",
    age: 21, 

    greeting() {
        //code block
    }
}

// Spread and Rest Operators
// Rest

function myFunction(firstArg,...restofArgs) {
    console.log(firstArg);
    console.log(restofArgs);
}

myFunction('one', 'two', 'three', 'four');

// Spread
function sum(x,y,z) {
    return x+y+z;
}

const numbers = [1,2,3];
console.log(sum(...numbers));

// Common Built-in Methods
// Arrays
// Filter

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = nums.filter((number) => number % 2== 0 );
console.log(even);

const odd = nums.filter((number)=> number%2 == 1)
console.log(odd);

// Strings
// Split

const message = "Hello, World!";
const words = message.split(",");
console.log(words);

// Includes
const sentence = "The quick brown fox jumps over the lazy dog.";
const containsWord = sentence.includes("fox");
console.log(containsWord);

// length
const sampleString = "Welcome to Modern JS Features!";
console.log(sampleString.length);

// Objects
// keys
const keys = Object.keys(person);
console.log(keys);

// values
const values = Object.values(person);
console.log(values);

console.log(person);

// Math
// max and min
console.log(Math.max(10,5,20));

console.log(Math.min(2,1,55));

// rounding
console.log(Math.round(3.6));

// floor
console.log(Math.floor(3.9));

//ceil
console.log(Math.ceil(3.0001));

// random
console.log(Math.random());

// Nested math methods
console.log(Math.round(Math.random() *100));

// Other Methods
// to fixed

const pi = 3.141592;
console.log(pi.toFixed(3));

// date
const currentDate = new Date();

const christmas = new Date(2024, 11, 25);

// toString
const numString = 38;
const parsedString = numString.toString();
console.log(parsedString +1);




