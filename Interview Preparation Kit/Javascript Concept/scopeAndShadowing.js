// export default function scopeAndShadowing() {
//   var x = 10; // function scope
//   let y = 20; // block scope
//   const z = 30; // block scope

//   if (true) {
//     let y = 50; // shadowing
//     console.log(y); // 50
//   }

//   console.log(y); // 20
// }

// // SyntaxError means that there is an error in the syntax of the code, preventing it from being parsed correctly.

// // ReferenceError means that a variable is being accessed that has not been declared or is out of scope.
// // TypeError means that an operation is being performed on a value of an inappropriate type.
// //example of type error
// typeErrorExample();
// function typeErrorExample() {
//   let num = 5;
//   num.toUpperCase(); // TypeError: num.toUpperCase is not a function
// }

// var x = 10;

// if x is shadowed inside this block it update x value as both point to same memory location
// global scope...
// if (true) {
//   var x = 20; //  x shadowing
//   console.log(x); // 20
// }
// function checkvar() {
//   var x = 20; // x shadowing
//   var x = 30; // points to function scope memory location
//   console.log(x); // 30
// }
// checkvar();
// console.log(x); // 20

// var is always function scoped/global scope not block scoped even defined inside block
//only let and const are block scoped

// var a = 10; // global
// let b = 20; //script
// const c = 30; //  script

// if (true) {
//   var a = 40; // global scope
//   let b = 50; // block scope
//   const c = 60; // block scope
//   console.log(a, b, c); // 40 50 60
// }
// console.log(a, b, c); // 40 20 30

// var a = 10; // global
// let b = 20; //script
// const c = 30; //  script

// function checkscope() {
//   var a = 40; // functional scope
//   let b = 50; // block scope
//   const c = 60; // block scope
//   console.log(a, b, c); // 40 50 60
// }
// checkscope();
// console.log(a, b, c); // 10 20 30

// illegal shadowing examples
// let a = 10; // script scope
// if (true) {
//   var a = 20; // SyntaxError: Identifier 'a' has already been declared
// }
// let a = 10; // script scope
// if (true) {
//   let a = 20; // valid shadowing
//   console.log(a); // 20
// }

// var a = 10; // global scope
// if (true) {
//   const a = 20; // block scope
//   console.log(a); // 20
// }
let a = 10; // script scope
function test() {
  var a = 20; // function scope
  console.log(a); // 20
}
console.log(a); // 10
test();
