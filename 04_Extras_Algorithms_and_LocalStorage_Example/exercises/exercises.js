//////////////////////////////////////////////////////////////////////////

// Exercise 1: Implement an algorithm to find the maximum value from the array

// const findMax = list => {
//     // code here
//     return max;
//   };

//   const listOfValues = [1, 6, 3, 4, 6, 3, 5, 7, 4, 9];
//   console.log(findMax(listOfValues));

//////////////////////////////////////////////////////////////////////////

// Exercise 2: Implement an algorithm that finds the index of the given target
// From the given array. If the target is not found in the array,
// return -1

// const linearSearch = (array, target) => {
//   // code here
// };

// const searchIndexValue = linearSearch(["Hello", "World", "world"], "Hello");
// console.log(
//     searchIndexValue !== -1
//       ? "Item found at position " + searchIndexValue
//       : "Item not found in array"
//   );

//////////////////////////////////////////////////////////////////////////

// Exercise 3: Write methods for this stack class

class Stack {
  // What is a Class?
  // https://javascript.info/class
  // In shorts, when developing an application you are likely to use a lot the same data structure for different things (e.g. users, products)
  // Classes allow you to create the basic structure (First Name, Last Name, Address etc.) and to not have to recreate this structure every time
  constructor(stack) {
    this.stack = stack ? stack.getStack() : [];
  }
  push(element) {
    // use JavaScript array .push method or write a verbose way to add an element to the stack
    return -1; // remove this
  }
  pop() {
    // use JavaScript .pop method to read while removing the last added element from the stack
    return -1; // remove this
  }
  peek() {
    // Shows the last inserted element in a stack
    // e.g. the stack has 5 elements, so we know that the stack has elements in index positions 0 1 2 3 and 4
    // So when we count the length of the stack we receive 5 and if we subtract by 1 (because the first index is 0, not 1!)
    // we get the position of the last element in the stack

    return -1; // remove this
  }
  getStack() {
    return this.stack;
  }
}

// Exercise 4: Create an algorithm that checks parethesis balance

const checkParenthesisBalance = parenthesis => {
  // const stack = new Stack(); // Bonus points if you use the previously created Stack
  // Steps:
  // - iterate through the string parenthesis the same way you would iterate with an array
  // - use the stack or a simple array to add opening parethesis
  // - check that the item you're adding to the stack is an opening parenthesis or not
  // - if not, check if the very last item added to the stack is the correspective opening parenthesis
  // - make sure that you accept/consider only parenthesis values
  // - in case of unbalanced parenthesis, return false
  // - in case of balanced parenthesis, return true
  return false; // remove this
};

const parenthesisResult = checkParenthesisBalance("{[()()]}")
  ? "Parenthesis are balanced"
  : "Parenthesis are not balanced";

console.log(parenthesisResult);

//////////////////////////////////////////////////////////////////////////

// Utils: you can use these two functions to interact with the following exercises

// const swap = (array, i, j) => {
//   let temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// };

// const cloneArray = array => {
//   return array.slice(0);
// };

//////////////////////////////////////////////////////////////////////////

// Exercise 5: Implement your own written version of the Bubblesort Algorithm

const bubbleSort = array => {
  return "Let's write this"; // remove this
};

console.log(bubbleSort([5, 3, 7, 4, 2, 3, 8, 0]));

//////////////////////////////////////////////////////////////////////////

// Exercise 6: Implement your own written version of the Insertion Sort Algorithm

const insertionSort = array => {
  return "Let's write this"; // remove this
};

console.log(insertionSort([5, 3, 7, 4, 2, 3, 8, 0]));

//////////////////////////////////////////////////////////////////////////

// Exercise 7: Implement your own written version of the Quicksort Algorirthm

const quickSort = array => {
  return "Let's write this"; // remove this
};

console.log(quickSort([5, 3, 7, 4, 2, 3, 8, 0]));

//////////////////////////////////////////////////////////////////////////

// Bonus exercise: Find the longest sequence of consequent letters in a string

//////////////////////////////////////////////////////////////////////////
