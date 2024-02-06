// Task 1:
const square = (a) => a *a;
console.log (square(8));

// Task 2:
const person = {
    firstName: 'Lamar',
    lastName: 'Jackson',
    age: 26,
};

person.introduce = function () {

    console.log('Hello, my name is', this.firstName, 'Nice to meet you.')
};
person.introduce();

// Task 3
console.log(person.firstName, person.lastName);

// Task 4
let array1 = [1,3,5,7,9];
let array2 = [11,13,15,17,19]
console.log([...array1, ...array2]);

// Task 5
function calculate(a,b){
    const rectangle=a*b
    return rectangle;
}
console.log(calculate(8,4));

// Task 6
const person2 = {
    firstName: "Lamar",
    lastName: "Jackson",
    age: 26,
    

    introduce: function () {
        console.log(`Hello, my name is ${this.firstName} and I am ${this.age}.`)
    }
}
// person2.introduce()
console.log(person2)




    