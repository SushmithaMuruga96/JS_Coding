//map
const arr = [1, 2, 3, 4, 5];

//double
const double = arr.map((double) => double * 2);
console.log(double);

//triple
const triple = arr.map((triple) => triple * 3);
console.log(triple);

//Binary
function toBinary(num) {
  return num.toString(2);
}

const output = arr.map(toBinary);
console.log(output);

//other way of writing
// const binary = arr.map(function toBinary(num) {
//   return num.toString(2);
// });

// const binary = arr.map(function (num) {
//  return num.toString(2);
// });

// console.log(binary);

//filter
const numbers = [10, 15, 20, 25, 30, 35, 40];

//filter numbers greater than 20
const greaterthan20 = numbers.filter((number) => number > 20);
console.log(greaterthan20);

//reduce
const num = [1, 2, 3, 4, 5];

//sum of all numbers

function sum() {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}
console.log("Sum using normal function: ", sum());

//sum using reduce
const sumUsingReduce = num.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log("Sum using reduce: ", sumUsingReduce);

//sample object array
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 30 },
];

//group by age using reduce {30:2,25:1,35:1}
const groupbyAge = users.reduce((acc, user) => {
  if (acc[user.age]) {
    acc[user.age] += 1;
  } else {
    acc[user.age] = 1;
  }
  return acc;
}, {});

console.log("Group by age: ", groupbyAge);

//take name that age less than 30
const nameslessThan30 = users
  .filter((user) => user.age < 30)
  .map((user) => user.name);
console.log("Names with age less than 30: ", nameslessThan30);

const fetchnames = users.reduce((acc, user) => {
  if (user.age < 30) {
    acc.push(user.name);
  }
  return acc;
}, []);
console.log("Names with age less than 30 using reduce: ", fetchnames);
