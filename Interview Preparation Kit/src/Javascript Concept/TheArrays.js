// function TheArrays() {
let result;
let fruits = ["Orange", "Mango", "Apple", "Pineapple", "Jackfruit"];
let childFruits = ["plums", "cherry", "guava"];
let numericArr = [100, 3, 5, 10, 5, 10, 100, 500, 3];

function sortArray(arr) {
  // sort the array ascending
  const asc = arr.sort();
  // sort the array descending
  console.log(asc.reverse());
}

function filterByKeyword(arr, key) {
  //filter the array where keyword has ang
  result = arr.filter((item) => item.toLowerCase().includes(key));
  return result;
}

function search(arr) {
  // list the array based on the search characters starts with J and endswith e
  const searchArr = arr.filter(
    (item) =>
      item.toLowerCase().startsWith("j") || item.toLowerCase().endsWith("e")
  );

  console.log(searchArr);
}

function appendText(arr) {
  //append character - wow at the send of each value in array
  result = arr.map((item) => {
    return `${item}-wow`;
  });
  console.log(result);
}

function otherArrayFunc(arr) {
  // add new value to array
  arr.push("Banana");

  // remove item to array
  arr.pop();

  // add a value to specific position in array
  arr.splice(1, 0, "Kiwi");
  //2nd position is delete count

  // replace a value from specific to the position
  arr.splice(3, 2, "grapes", "lemon");

  // remove a value from specific index to the position
  arr.splice(3, 1);

  // merge two array
  const mergedFruits = arr.concat(childFruits);
  console.log("mergedFruits", mergedFruits);

  // count the values in array
  console.log(mergedFruits.length);

  // reverse the array
  let reverseArr = [100, 3, 5, 10];

  console.log(reverseArr.reverse());

  // remove space in the array
  const trimarray = arr.map((item) => item.trim());
  console.log(trimarray, "trimarray");
}

function findCountOfValue(arr) {
  // count of repeat words in array

  let findingCount = [];

  for (const element of arr) {
    const countArray = arr.filter((item) => element === item);
    const found = findingCount.find((item) => item[element] !== undefined);
    if (!found) {
      findingCount.push({ [element]: countArray.length });
    }
  }
  console.log(findingCount, "findingCount");
}

function findDistinctValue(arr) {
  // bring distinct value from array

  let distinctArray = arr.filter((x, index, arr) => {
    return arr.indexOf(x) === arr.lastIndexOf(x);
  });
  return distinctArray;
}

function removeDuplicates(arr) {
  //// bring unique or remove duplicates value from array

  let uniqueArray = [...new Set(arr)];
  console.log("uniqueArray", uniqueArray);
}

removeDuplicates(numericArr);
findDistinctValue(numericArr);
findCountOfValue(numericArr);
filterByKeyword(fruits, "apple");
sortArray(fruits);
appendText(fruits);
search(fruits);
otherArrayFunc(fruits);
// export default TheArrays;
