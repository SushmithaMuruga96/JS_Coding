// currying transfroms a function with multiple arguments
// into sequence of multiple functions with one argument at a time.

function sum(a, b, c) {
  return a + b + c;
}

sum(2, 3, 5); // normal function call

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
console.log(curriedSum(2)(3)(5)); // one way of calling nested function with one arg at a time
// other way

const add2 = curriedSum(2);
const add3 = add2(3);
const add5 = add3(5);
console.log(add5);
