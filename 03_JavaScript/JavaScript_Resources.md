# Resources to get familiar with JavaScript

To have a better experience throughout the workshop, we need you to be familiar with JavaScript syntax.

This section will go through the basics of JavaScript providing useful resources and will help you familiarize with the code syntax.

Some understanding of the concepts (maybe with another programming language) is assumed, but if you are not familiar with all of the concepts or want to freshen your memory, there will be links for getting more information. And if some things are too simple or obvious for you, feel free to skip the easy parts and move forward!

The material includes short introductions, examples and simple exercises, that will familiarise you with JavaScript's syntax and the way the language works. We will not cover everything or go through every little detail and quirk of the language (which there are plenty of!).

Start by opening the file exercises.js in this folder and read the exercises. If you can't figure out how to do the exercises even after reading the following resources, ask help from one of our coaches or other workshop participants.

---

## Vocabulary

| word           | description                                                                                                                                                                                            | example                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- |
| value          | Different types of data, for example numbers, strings (text) and booleans (true or false).                                                                                                             | `1` <br>`"some text"` <br> `true` |
| variable       | Containers for storing data values.                                                                                                                                                                    | `var x = 5;`                      |
| operator       | Used for performing actions on variables and values, for example assignment (`=`) and arithmethics (`+ - *`).                                                                                          | `a = 2;` <br> `b = a + 1;`        |
| expression     | A combination of values, variables and operators, which computes to a single value (a number, a string, or a logical value). [Read more about expressions here](http://lib.ru/JAVA/javascr/expr.html). | `b * 2;` <br> `alert(a);`         |
| statement      | A group of words, numbers and operators that performs a specific task. Consists of one or more expressions.                                                                                            | `a = b * 2;`                      |
| data structure | A data structure is a particular way of organizing data in a computer so that it can be used effectively.                                                                                              | stack, list, array                |
| algorithms     | A step by step method of solving a problem.                                                                                                                                                            |                                   |

---

## Syntax, coding conventions and styles

- Most JavaScript statements end in a semicolon `x = 2 + 5;`
- JavaScript is case sensitive, so `variableName` is different to `variablename`. A common practice is to use lower camel case, where you start with a lower case letter and make the other words upper case, as in `myVariableName`.
- Variable and function names cannot start with numbers or include hyphens.
- Strings can be defined with single or double quotes, but a good practice is to decide one of them and use that consistently.
- Nowadays editors have great tools, which will format the code for you (like Prettier), so you don't have to worry about semicolons and which quotes to use. If you forget a semicolon, you can configure the tool to add it automatically when you save the file. They can also convert all your quotes to be the same and do many other useful things for you.

To familiarize with JavaScript syntax more, please [read this page on how JavaScript syntax works](https://www.w3schools.com/js/js_syntax.asp), [this one about best practices](https://www.w3schools.com/js/js_best_practices.asp) and [this page about coding styles](https://www.w3schools.com/js/js_conventions.asp).

### Different JavaScript versions

Javascript version ES6 (ECMAScript 6 or ECMAScript 2015) was released in 2015. It introduced some new features, which we will be using in this workshop. It will not work in all older browsers without being converted to the older syntax (ES5), but this conversion is usually automated in web development projects.

This material will show some examples of the older syntax too, just so you know what it is if you see it in someone else's code and know how to convert it to the newer syntax.

---

## Chapter 1 - Commenting and uncommenting

In JavaScript, you can comment code lines with `//` to comment one single line, and `/*` with `*/` to mark more than one line of code to comment.

`// I'm a single commented line`

```
/*
and multiple lines like this
and multiple lines like this
and multiple lines like this
*/
```

It's useful to comment code when you are testing different things and want to see different outcomes, as well as when you want to add a description about what your code does.

**To comment code, use cmd + k and while still pressing cmd press c**  
**To uncomment code, use cmd + k and while still pressing cmd press u**

Great! Now you're able to comment and uncomment code!

---

## Chapter 2 - Console and console.log()

Let's learn about console.log() and first, what's the [Chrome devtools console](https://developers.google.com/web/tools/chrome-devtools/console/javascript).

You can have it print any value or text, for example to see what is the value of a variable at a specific point of your code or to check when a function is called or see if the code goes to a specific conditional.

The output is visible in the browser's console, which you can see by pressing `option-cmd-j` on Mac or `ctrl-shift-j` on Windows computers. You can also right click the page, choose _inspect_ and navigate to the _console_ tab.

But while we're using Code Sandbox, we can open the built-in console tab!

`console.log("Hi, this is a console log message");`

You can also write direct statements in the console log, such as `2 + 2`.

Other examples:

```
const myValue = 42;
console.log(myValue); // will print out 42

if (myValue === 42) {
  console.log("Yes, it is 42");
} else {
  console.log("Nope, it's ", myValue);
}
```

The console allows you to also test arbitrary code that is not written within the page:

**JavaScript ES5**  
`function multiplyNumbers(x, y) { return x * y; }`

**JavaScript ES6**  
`const multiplyNumbersES6 = (x, y) => { return x * y; };`

Note: ES6 syntax works only in the actual Chrome Dev tools console, but that's the better way to write code, as ES5 lacks few good features. You can of course write ES6 code in the actual code editor of CodeSandbox.

Write/Copy the following function inside the console:

`function multiplyNumbers(x, y) { return x * y; }`

The console will return a message **undefined** because the entered code didn't generate any value to display, but if you now type

`multiplyNumbers(2, 3)`

the console will reply with 6.

While working with algorithms, using `console.log()` becomes useful to check that the code is looping the information correctly and that your code is returning the right values at all the stages.

---

## Chapter 3 - Operators

#### Assignment

An assignment operator assigns a value to its left operand based on the value of its right operand. The basic assignment operator is equal `=`, which assigns the value of its right operand to its left operand.

`a = 2`

#### Comparison operators

| operator | description                       |
| -------- | --------------------------------- |
| `==`     | equal to                          |
| `===`    | equal value and equal type        |
| `!=`     | not equal                         |
| `!==`    | not equal value or not equal type |
| `>`      | greater than                      |
| `<`      | less than                         |
| `>=`     | greater than or equal to          |
| `<=`     | less than or equal to             |
| `?`      | ternary operator                  |

#### Arithmetic operators

| operator | description                  |
| -------- | ---------------------------- |
| `+`      | Addition                     |
| `-`      | Subtraction                  |
| `*`      | Multiplication               |
| `**`     | Exponentiation (ES2016)      |
| `/`      | Division                     |
| `%`      | Modulus (Division Remainder) |
| `++`     | Increment                    |
| `--`     | Decrement                    |

#### Logical operators

| operator | description |
| -------- | ----------- |
| `&&`     | logical and |
| `\|\|`   | logical or  |
| `!`      | logical not |

You can read more on [this page about operations in JavaScript](https://www.w3schools.com/js/js_operators.asp).

---

## Chapter 4 - Types and variables

Time to move on to variables! Surprisingly enough, there's so much to say about variables and their types, which is why we're linking [JavaScript.info page about JavaScript Data Types](https://javascript.info/types). What we need to get out of this page is that there are 7 basic data types in JavaScript, and in our workshop we're going to use almost all of them.

The 7 types are:

| type      | description                                                                                                                                   | example                                               |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| string    | A series of characters, aka text. Defined with quotes, which can be single or double quotes.                                                  | `"this is a string"`<br>`'this is a string too'`      |
| number    | Numbers can be written with or without decimals.                                                                                              | `3`<br>`10.99`<br>`100000.1`                          |
| undefined | A variable without a value has the type and value `undefined`.                                                                                | `const a;`<br>`b = undefined;`                        |
| boolean   | A boolean type can have only two values, `true` and `false`.                                                                                  | `a = false;`<br> `pageIsLoading = true;`              |
| object    | Values that hold other values at specific named locations called properties. Arrays and functions are also objects (but more on those later). | `const cat = {name: "Max", age: 5, color: "orange"};` |
| symbol    | A new type in ES6. Used for providing a unique identifier for object properties.                                                              | `const symbol = Symbol('description')`                |

You can check the type of a specific value with the `typeof` operator.

```
a = 42;
typeof a;   // number

a = true;
typeof a;   // boolean
```

### Variables

Variable is a container that can hold any value. In older JavaScript versions it can be defined with the keyword `var`, but ES6 introduced two new ways, `let` and `const`. The variable defined with `let` can change, but `const` cannot be reassigned.

`let myChangingValue = "cat";`

`const onePoundInKg = 0,453592;`

A variable can be first declared without or without a value:

`let numberOfCats;`

`let numberOfDogs = 2;`

A value can be assigned or changed with a statement, that does not include the `let` keyword anymore:

`numberOfCats = 3;`

`numberOfDogs = numberOfDogs + 3;`

JavaScript is dynamically typed, so you don't have to define a type for each variable, like you do in languages that use static typing.

If you are familiar with another programming language, or if you have time and feel curious, I suggest reading [this article about JavaScript variable declarations and scope](https://blog.pragmatists.com/let-your-javascript-variables-be-constant-1633e56a948d) to familiarize with variable scope and better understand the difference between the old `var`, `const` and `let`. For the sake of this workshop, you mainly need to know that you can declare variables with `const` and `let` keywords.

---

## Chapter 5 - Arrays

Array is a variable, that can be used for storing multiple values.

`const cities = ["Helsinki", "Stockholm", "London", "Berlin"];`

`const numberOfDaysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];`

You can access a specific value in an array by its index. (Note: the first index is 0!)

`cities[0] // "Helsinki"`

`cities[3] // "Berlin"`

`numberOfDaysInMonths[2] // 31`

### Array properties

One array property commonly used for arrays is `.length`, and as you might guess it allows us to access the number of items contained in the array.

```
const fruits = ['Banana', 'Apple', 'Lemon'];
console.log(fruits.length); // will return the number of fruits
```

### Array methods

In the Section 2 of this repository, you will encounter these two methods.

`push()` function is used to insert an element at the top of the stack.
The element is added to the stack container and the size of the stack is
increased by 1.

`pop()` function is used to remove an element from the top of the
stack(newest element in the stack). The element is removed to the stack
container and the size of the stack is decreased by 1.

JavaScript arrays have a lot of other properties and methods that you can use for interacting with the array. Here's are some more examples of them:

| property or method | description                                                                                             | example                                                                                                              |
| ------------------ | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `length`           | Returns the number of values in an array.                                                               | `cities.length; // 4`                                                                                                |
| `indexOf`          | Returns the first index at which a given element can be found in the array, or -1 if it is not present. | `numberOfDaysInMonths.indexOf(30); // 3` <br>`cities.indexOf("Oslo"); // -1`                                         |
| `find`             | Returns the value of the first element in an array that pass a test                                     | [See examples here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)     |
| `splice`           | Adds/Removes elements from an array                                                                     | [See examples here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)   |
| `concat`           | Joins two or more arrays, and returns a copy of the joined arrays                                       | [See examples here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)   |
| `toString`         | Converts an array to a string, and returns the result                                                   | [See examples here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) |
| `join`             | Joins all elements of an array into a string                                                            | [See examples here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)     |
| `push`             | Adds new elements to the end of an array, and returns the new length                                    | [See examples here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)     |
| `pop`              | Removes the last element of an array, and returns that element                                          | [See examples here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)      |
| `sort`             | Sorts the elements of an array                                                                          | [See examples here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)     |
| `reverse`          | Reverses the order of the elements in an array                                                          | [See examples here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)  |
| `forEach`          | Calls a function for each array element                                                                 | [See examples here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)  |
| `some`             | Checks if any of the elements in an array pass a test                                                   | [See examples here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)     |
| `every`            | Checks if every element in an array pass a test                                                         | [See examples here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)    |
| `map`              | Creates a new array with the result of calling a function for each array element                        | [See examples here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)      |
| `filter`           | Creates a new array with every element in an array that pass a test                                     | [See examples here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)   |
| `reduce`           | Reduce the values of an array to a single value (going left-to-right)                                   | [See examples here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)   |

Part of the content from [w3school array methods page](https://www.w3schools.com/jsref/jsref_obj_array.asp).

For more information, read [this page about arrays](https://www.w3schools.com/js/js_arrays.asp). There's also [this page for a more in-depth reading about arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

You can also read [this page on how to use array methods](https://www.w3schools.com/js/js_array_methods.asp) and check this page for [a list of other methods applicable to arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods).

---

## Chapter 6 - Objects

[Read more about objects here](https://www.w3schools.com/js/js_objects.asp).

---

## Chapter 7 - If condition

Please [read this page about If statement](https://www.w3schools.com/js/js_if_else.asp).

---

## Chapter 8 - Switch statement

Please [read this page about Switch statement](https://www.w3schools.com/js/js_switch.asp).

---

## Chapter 9 - For loop

```
for (let i = 0; i < 10; i++) {
    console.log(i);
  }
```

---

## Chapter 10 - Functions

Functions are used to reuse code, you define what the code should do once and use it as many times as needed with different arguments (parameters) to produce different results.

A [good explanation about functions can be found here](https://www.w3schools.com/js/js_functions.asp), however please notice that the guide uses ES5 syntax. Check the following code examples to see how to use ES6 syntax.

```
const exampleFunctionWithoutParameters = () => {
const result = 1;
return result;
};
```

```
const exampleFunctionWithTwoNumberParameters = (
firstParameter,
secondParameter
) => {
return firstParameter + secondParameter;
};
```

```
const printTenTimes = () => {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
};
```

Above [examples taken from quarian github](https://github.com/quarian/mimmit-koodaa-trak-beginner).

---

## Chapter 11 - Maps

Maps are used to map keys to values.

```
const m0 = new Map();
m0.set("frog", "awesome");
console.log(` ${m0.get("frog")}`);
```

Iterating through the contents is simple and works as expected.

```
const m = new Map();
m.set("hello", ["a", "b", "c"]);
m.set("berries", ["blueberry", "strawberry", "greenberry"]);

// Iterate through the keys in the map
for (const key of m.keys()) {
  console.log(`found key ${key}`);
}

// Iterate through the values in the map
for (const value of m.values()) {
  console.log(`found value ${value}`);
}

// Iterate through the key/value pairs in the map, using modern js destructuring syntax
for (const [key, value] of m.entries()) {
  console.log(`key = [${key}] value: ${value}`);
}


```

---

## Chapter 12 - Merge all this knowledge to create your own thing

This is an example that summarizes all the things we've been working on so far. Take it as a guideline to create your own set of scripts!

```
let products = [
  {
    name: "chair",
    inventory: 5,
    unit_price: 45.99
  },
  {
    name: "table",
    inventory: 10,
    unit_price: 123.75
  },
  {
    name: "sofa",
    inventory: 2,
    unit_price: 399.50
  }
];
function listProducts(prods) {
  let product_names = [];
  for (let i=0; i<prods.length; i+=1) {
   product_names.push(prods[i].name);
  }
  return product_names;
}
console.log(listProducts(products));
function totalValue(prods) {
  let inventory_value = 0;
  for (let i=0; i<prods.length; i+=1) {
    inventory_value += prods[i].inventory * prods[i].unit_price;
  }
  return inventory_value;
}
console.log(totalValue(products));
```

This [example code was taken from teamtreehouse](https://teamtreehouse.com/library/create-an-array-of-objects).

## More material and sources

- The good old [W3Schools](https://www.w3schools.com/js/default.asp) has a lot of material about JavaScript. It was one of the sources for this introduction.

- If you like to learn from a book format, the [You don't know JS book series](https://github.com/getify/You-Dont-Know-JS) is a great way get a deeper understanding of JavaScript. You can read the books online for free.
  There's also a [Gitbooks page](https://maximdenisov.gitbooks.io/you-don-t-know-js/content/) of the first edition of the series. Some of this material is based on the first book.

- [Wes Bos has great courses](https://wesbos.com/courses/), some of which are free.
  For example the [JavaScript30 course](https://javascript30.com/) will give you a lot of practice using the language.

- [Codecademy](www.codecademy.com) keeps trying to make you become a paying pro member, but they do also have some free courses, like Introduction to JavaScript and Learn ReactJS. They have a really nice online learning environment, with an editor, a preview and instructions with tasks that you have to compelete to move forward.

- [Awesome JavaScript](https://github.com/micromata/awesome-javascript-learning), a curated list of resources for learning more.
