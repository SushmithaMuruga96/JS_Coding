// function TheArrays() {
let result;
let fruits = ["Orange", "Mango", "Apple", "Pineapple", "Jackfruit"];
let childFruits = ["plums", "cherry", "guava"];

// sort the array ascending
const asc = fruits.sort();
console.log(asc, "asc");

// sort the array descending
console.log(asc.reverse());

//filter the array where keyword has ang
result = fruits.filter((item) => item.toLowerCase().includes("apple"));

//append character - wow at the send of each value in array
result = fruits.map((item) => {
  return `${item}-wow`;
});
console.log(result);

// list the array based on the search characters starts with J and endswith e
const searchArr = fruits.filter(
  (item) =>
    item.toLowerCase().startsWith("j") || item.toLowerCase().endsWith("e")
);

console.log(searchArr);

// add new value to array
fruits.push("Banana");

// remove item to array
fruits.pop();

// add a value to specific position in array
fruits.splice(1, 0, "Kiwi");
//2nd position is delete count

// replace a value from specific to the position
fruits.splice(3, 2, "grapes", "lemon");
console.log("fruits", fruits);

// remove a value from specific index to the position
fruits.splice(3, 1);
console.log("fruits", fruits);

// merge two array
const mergedFruits = fruits.concat(childFruits);
console.log("mergedFruits", mergedFruits);

// count the values in array
console.log(mergedFruits.length);

// reverse the array
let arr = [100, 3, 5, 10];

console.log(arr.reverse());

// remove space in the array
const trimarray = fruits.map((item) => item.trim());
console.log(trimarray, "trimarray");

// count of repeat words in array
let numericArr = [100, 3, 5, 10, 5, 10, 100, 500, 3];

numericArr.filter((x, index, arr) => {
  const indexValue = arr.indexOf(x);
  console.log(indexValue, x, "indexValue");
});

// bring distinct value from array

let distinctArray = numericArr.filter((x, index, arr) => {
  return arr.indexOf(x) === arr.lastIndexOf(x);
});

//// bring unique or remove duplicates value from array

let uniqueArray = [...new Set(numericArr)];
console.log("uniqueArray", uniqueArray);

// export default TheArrays;
