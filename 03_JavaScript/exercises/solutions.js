// Exercise 1: Uncomment the following lines of code cmd + k + u

document.write(
  "YAY! IF YOU CAN SEE THIS IN THE PREVIEW, PLEASE COMMENT ME AGAIN! CMD + K + C."
);

//////////////////////////////////////////////////////////////////////////

// Note: for all these exercises, please use console.log() to display the results. Alternatively, feel free to use document.write()

//////////////////////////////////////////////////////////////////////////

// Exercise 2: Write a console.log() statement and have it print your name

console.log("My name");

//////////////////////////////////////////////////////////////////////////

// Exercise 3a: Write variables using either let or const for the following data types: string, number, boolean

let someString = "text here";

const numberOfWeekdays = 7;

let isThereCoffee = true;

// Exercise 3b: Write a string variable using const and display its value with console.log()

const myFavouritePokemon = "Bulbasaur";

console.log(myFavouritePokemon);

//////////////////////////////////////////////////////////////////////////

// Exercise 4a: Sum two number variables, display the result with console.log()

const a = 2;

const b = 8;

console.log(a + b);

// Exercise 4b: Concatenate two strings variables together, display the result with console.log()

const firstWord = "Futu";

const secondWord = "rice";

console.log(firstWord.concat(secondWord));
console.log(firstWord + secondWord);

//////////////////////////////////////////////////////////////////////////

// Exercise 5a: Write an array of people's first name and an array (with the same number of items) of numbers for their age

const people = ["Ash", "Misty", "Brock"];
const age = [10, 10, 15];

// Exercise 5b: Read the number of the people's array with the property .length

console.log(people.length);

// Exercise 5c: Add a person to the people array with the method .push(), and do the same for their age

people.push("May");
age.push(10);

// Exercise 5d: Write a custom more verbose version of the method .push() and add another person (and another age)

people[people.length] = "Iris";
age[age.length] = 14;

console.log(people);
console.log(age);

// Exercise 5e: Use the pop() method to remove and read the last element for both the people and age arrays

console.log(people.pop() + " has been removed");
console.log(age.pop() + " has been removed");

console.log(people);
console.log(age);

//////////////////////////////////////////////////////////////////////////

// Exercise 6a: Create a person object with firstName, lastName and age (remember that age is a number and not a string)

const person = { name: "Ash", lastName: "Ketchum", age: 10 };

console.log(person);

// Exercise 6b: The person you just created has had a sudden birthday, add +1 to the age using operations

person.age++;
// person.age = person.age + 1;

console.log(person);
console.log(person.age);

// Exercise 6c: Create an array of person objects like the one we created before (All people need to have firstName, lastName and age)

const persons = [
  { name: "Ash", lastName: "Ketchum", age: 10 },
  { name: "Misty", lastName: "Kasumi", age: 10 },
  { name: "Brock", lastName: "Takeshi", age: 15 }
];

console.log(persons);
console.log(persons[1]);

//////////////////////////////////////////////////////////////////////////

// Exercise 7: Create a number variable and determine whether it's bigger than 10 with an If statement

const checkThisNumber = 5;
// const checkThisNumber = 11; // try also this

if (checkThisNumber > 10) {
  console.log(checkThisNumber + " is bigger than ten");
} else {
  console.log(checkThisNumber + " is not bigger than ten");
}

//////////////////////////////////////////////////////////////////////////

// Exercise 8: Create a string variable and determine if the value is either 'morning' 'afternoon' or 'evening' with a switch statement.

const greeting = "morning";
// const greeting = "night"; // check also this

switch (greeting) {
  case "morning":
    console.log("Good morning to you too!");
    return;
  case "afternoon":
    console.log("Good afternoon, girl!");
    return;
  case "evening":
    console.log("Good evening!");
    return;
  default:
    console.log("I'm not sure about what you're asking");
  // no return here or the rest of the code won't work!
}

//////////////////////////////////////////////////////////////////////////

// Exercise 9: Show 10 times the word 'Hello'

const lotsOfHellos = () => {
  for (let i = 0; i < 10; i++) {
    console.log("Hello ");
  }
};

console.log(lostOfHellos);

//////////////////////////////////////////////////////////////////////////

// Exercise 10a: Create a function that will sum two parameters

const sumNumbers = (a, b) => {
  return a + b;
};

console.log(sumNumbers(2, 5));

// Exercise 10b: Create a function that takes an array as a parameter and displays all the elements in an array with their index number
// Example:
const fruits = ["Banana", "Apple", "Lemon"];
const listItems = items => {
  for (let i = 0; i < items; i++) {
    console.log(i + ". " + items[i]);
  }
};
// console.log();
// Expected output:
// 0. Banana
// 1. Apple
// 2. Lemon

// Feel free to ask to your coach for more challenges!
