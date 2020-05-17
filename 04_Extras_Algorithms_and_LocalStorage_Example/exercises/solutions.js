//////////////////////////////////////////////////////////////////////////

// Exercise 1: Implement an algorithm to find the maximum value from the array

const findMax = list => {
  let max = list[0];
  for (let i = 0; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i];
    }
  }
  return max;
};

const listOfValues = [1, 6, 3, 4, 6, 3, 5, 7, 4, 9];
console.log(findMax(listOfValues));

//////////////////////////////////////////////////////////////////////////

// Exercise 2: Implement an algorithm that finds the index of the given target
// From the given array. If the target is not found in the array,
// return -1

const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

const searchIndexValue = linearSearch(["Hello", "World", "world"], "Hello");

console.log(
  searchIndexValue !== -1
    ? "Item found at position " + searchIndexValue
    : "Item not found in array"
);

//////////////////////////////////////////////////////////////////////////

// Exercise 3: Write methods for this stack class

class Stack {
  constructor(stack) {
    this.stack = stack ? stack.getStack() : [];
  }
  push(element) {
    this.stack.push(element);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  getStack() {
    return this.stack;
  }
}

const checkParenthesisBalance = parenthesis => {
  const stack = new Stack();
  for (let i = 0; i < parenthesis.length; i++) {
    const current = parenthesis[i]; // We assign the value in the stack at position i to a variable called 'current'
    if ((current === "{") | (current === "(") | (current === "[")) {
      // We check whether our variable current is either of these three brackets
      // We do this check to make sure that we're actually comparing brackets and not other values
      // If it's any of these three values, we add it to the stack that we created
      stack.push(current);
    } else {
      // If we are not having any of the three opening brackets, we might have a closing bracket (or a wrong character)
      const popped = stack.pop(); // In that case, we assign the last value inserted in the stack to a variable called 'popped' and we remove it from the stack
      // if current is ) popped needs to be ( etc
      if (
        (popped === "(" && current !== ")") ||
        (popped === "[" && current !== "]") ||
        (popped === "{" && current !== "}") ||
        !popped
      ) {
        return false;
      }
    }
  }
  return !stack.pop();
};

const parenthesisResult = checkParenthesisBalance("{[()()]}")
  ? "Parenthesis are balanced"
  : "Parenthesis are not balanced";

console.log(parenthesisResult);

//////////////////////////////////////////////////////////////////////////

// Utils: you can use these two functions to interact with the following exercises

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const cloneArray = array => {
  return array.slice(0);
};

//////////////////////////////////////////////////////////////////////////

// Exercise 4: Implement your own written version of the Bubblesort Algorithm

const bubbleSort = array => {
  const newArray = cloneArray(array);
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
      if (j > 0 && newArray[j] < newArray[j - 1]) {
        swap(newArray, j, j - 1);
      }
    }
  }
  console.log(newArray);
  return newArray;
};

console.log(bubbleSort([5, 3, 7, 4, 2, 3, 8, 0]));

//////////////////////////////////////////////////////////////////////////

// Exercise 5: Implement your own written version of the Insertion Sort Algorithm

const insertionSort = array => {
  const newArray = cloneArray(array);
  let i = 1;
  while (i < newArray.length) {
    let j = i;
    while (j > 0 && newArray[j - 1] > newArray[j]) {
      swap(newArray, j, j - 1);
      j = j - 1;
    }
    i = i + 1;
  }
  return newArray;
};

console.log(insertionSort([5, 3, 7, 4, 2, 3, 8, 0]));

//////////////////////////////////////////////////////////////////////////

// Exercise 6: Implement your own written version of the Quicksort Algorirthm

const quickSort = array => {
  const newArray = cloneArray(array);
  const partition = (array, low, high) => {
    let pivot = array[high];
    let i = low;
    for (let j = low; j <= high; j++) {
      if (array[j] < pivot) {
        swap(array, i, j);
        i = i + 1;
      }
    }
    swap(array, i, high);
    return i;
  };
  const sort = (subArray, low, high) => {
    if (low < high) {
      const p = partition(subArray, low, high);
      sort(subArray, low, p - 1);
      sort(subArray, p + 1, high);
    }
  };
  sort(newArray, 0, newArray.length - 1);
  return newArray;
};

console.log(quickSort([5, 3, 7, 4, 2, 3, 8, 0]));

//////////////////////////////////////////////////////////////////////////

// Bonus exercise: Find the longest sequence of consequent letters in a string

const findLongestSequence = arrayLike => {
  let currentSequence = 0;
  let longetsSequence = 0;
  let currentElement = "";
  let previousElement = "";
  for (let i = 0; i < arrayLike.length; i++) {
    currentElement = arrayLike[i];
    if (previousElement === "" || currentElement === previousElement) {
      currentSequence += 1;
    } else if (currentElement !== previousElement) {
      if (currentSequence > longetsSequence) {
        longetsSequence = currentSequence;
      }
      currentSequence = 1;
    }
    previousElement = currentElement;
  }
  return longetsSequence > currentSequence ? longetsSequence : currentSequence;
};

const letters = "aabbbcc";
console.log(
  "The longest sequence for " +
    letters +
    " is long " +
    findLongestSequence(letters) +
    " characters."
);

//////////////////////////////////////////////////////////////////////////
