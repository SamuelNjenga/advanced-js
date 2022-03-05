function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(1, 2, 3));

// sum(2,3,5)  sum(2)(3)(5)
// nest function where each function takes one argument at a time

// Currying is used to compose reusable functions
function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
console.log(curriedSum(20)(30)(40));

const add20 = curriedSum(20);
const add30 = add20(40);
const add50 = add30(50);
console.log(add50);
