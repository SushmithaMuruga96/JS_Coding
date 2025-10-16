// setTimeout + closure

// example 1
function x() {
  var i = 3;
  console.log("Javascript start");

  setTimeout(() => {
    console.log(i);
  }, 3000);
  console.log("Javascript end");
}
x();

//output
// Javascript start
// Javascript end
// 3

// example 2
for (var i = 0; i <= 5; i++) {
  console.log("log-outside-timeout", i);
  setTimeout(() => {
    console.log("log-inside-timeout", i);
  }, i * 1000);
}

// output
// log-outside-timeout 0
// log-outside-timeout 1
// log-outside-timeout 2
// log-outside-timeout 3
// log-outside-timeout 4
// log-outside-timeout 5
// log-inside-timeout 6
// log-inside-timeout 6
// log-inside-timeout 6
// log-inside-timeout 6
// log-inside-timeout 6
// log-inside-timeout 6

// example 3
for (var i = 0; i <= 5; i++) {
  console.log("log-outside-timeout", i);
  setTimeout(() => {
    console.log("log-inside-timeout", i);
  }, i * 1000);
}

// output
// log-outside-timeout 0
// log-outside-timeout 1
// log-outside-timeout 2
// log-outside-timeout 3
// log-outside-timeout 4
// log-outside-timeout 5
// log-inside-timeout 0
// log-inside-timeout 1
// log-inside-timeout 2
// log-inside-timeout 3
// log-inside-timeout 4
// log-inside-timeout 5

// Note var hold use reference of i in loop

// but let create new reference in loop

// because let is an block scoped variable

// var: Same reference throughout loop.

// let: New reference per iteration (block scoped)

function testVar() {
  const arr = [];

  for (let i = 0; i < 3; i++) {
    arr.push(() => console.log("var i:", i));
  }

  arr.forEach((fn) => fn());
}

testVar();
// Output: var i: 3 (3 times)
