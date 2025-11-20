//calculate area of circle, circumference and diameter using normal functions

const arr = [3, 5, 7, 9];

// function areaOfCircle(radius) {
//   const result = [];
//   for (let i = 0; i < radius.length; i++) {
//     result.push(Math.PI * radius[i] * radius[i]);
//   }
//   return result;
// }

// console.log("Area of Circle: ", areaOfCircle(arr));

// function circumference(radius) {
//   const result = [];
//   for (let i = 0; i < radius.length; i++) {
//     result.push(2 * Math.PI * radius[i]);
//   }
//   return result;
// }

// console.log("circumference of Circle: ", circumference(arr));

// function diameter(radius) {
//   const result = [];
//   for (let i = 0; i < radius.length; i++) {
//     result.push(2 * radius[i]);
//   }
//   return result;
// }

// console.log("diameter of Circle: ", diameter(arr));

//calculate area of circle, circumference and diameter using higher order functions

function area(radius) {
  return Math.PI * radius * radius;
}
function circumferenceLogic(radius) {
  return 2 * Math.PI * radius;
}
function diameterLogic(radius) {
  return 2 * radius;
}

function calculate(radius, logic) {
  const result = [];
  for (let i = 0; i < radius.length; i++) {
    result.push(logic(radius[i]));
  }
  return result;
}

console.log(calculate(arr, area));
console.log(calculate(arr, circumferenceLogic));
console.log(calculate(arr, diameterLogic));

//logic is callback function
//calculate is higher order function
//Hoc is function that takes another function as an argument or returns a function as a return value

//using prototype method
Array.prototype.calculate = function (logic) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(logic(this[i]));
  }
  return result;
};
//using map HOC method
console.log(arr.map(area));

console.log(arr.calculate(area));
console.log(arr.calculate(circumferenceLogic));
console.log(arr.calculate(diameterLogic));

//calculate now becomes a method of array after adding it to prototype
// calculate higher order function and the method access the array using 'this' keyword
// and access globally in the application like array method
//not recommended to modify prototype of built-in objects like Array, String etc.
// as it may lead to conflicts with other libraries or future versions of JavaScript

// but useful to understand how HOC works and how to create custom methods for built-in objects

//advantages of HOC
//1. Code Reusability: HOC allows you to reuse logic across different functions without duplicating code.
//2.Modularity: HOC promotes modular code by separating logic from data processing.
//3. Abstraction: HOC abstracts away complex logic, making it easier to understand and maintain code.
//4. Functional Programming: HOC encourages a functional programming style, leading to cleaner and more predictable code.
