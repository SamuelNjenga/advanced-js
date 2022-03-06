// Iterables & Iterators -> WHY?
// Iteration in JavaScript

// String
const str = "Vishwas";
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}

// Array
const arr = ["V", "i", "s", "h", "w", "a", "s"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// Drawbacks of above iteration are ->
// (i) Difficulty in accessing the element
// (ii) Difficult to manage iteration on the data for various types of data structures

// For..of looping construct iterates over an iterable
console.log("for..of loop");
for (const char of str) {
  console.log(char);
}

for (const item of arr) {
  console.log(item);
}

// Make an object an iterable so that when the object is used with for..of loop it will print 'hello world' one word at a time
const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "World", done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};

for (const word of obj) {
  console.log(word);
}
