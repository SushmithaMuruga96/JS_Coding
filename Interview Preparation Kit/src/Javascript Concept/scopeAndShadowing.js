export default function scopeAndShadowing() {
  var x = 10; // function scope
  let y = 20; // block scope
  const z = 30; // block scope

  if (true) {
    let y = 50; // shadowing
    console.log(y); // 50
  }

  console.log(y); // 20
}

// SyntaxError means that there is an error in the syntax of the code, preventing it from being parsed correctly.

// ReferenceError means that a variable is being accessed that has not been declared or is out of scope.
// TypeError means that an operation is being performed on a value of an inappropriate type.
//example of type error
typeErrorExample();
function typeErrorExample() {
  let num = 5;
  num.toUpperCase(); // TypeError: num.toUpperCase is not a function
}
