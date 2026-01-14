(function outer(o) {
  return (function inner(i) {
    console.log("Inner parameter: " + i);
  })("World");
})("Hello");
//this is an example of IIFE (Immediately Invoked Function Expression)

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
