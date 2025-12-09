function findSmallest(arr) {
  // your solution here
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return null;
  if (!arr.every(Number.isFinite)) return false;

  const min = arr.reduce((acc, current) => {
    return current < acc ? current : acc;
  }, Infinity);

  return min;
}

// if (Array.isArray(arr)) {
//   if (arr.length === 0) {
//     return null;

//   } else if (arr.filter((x) => typeof (x) !== 'number').length > 0) {
//     return false
//   } else if (arr.includes(NaN) || arr.includes(Infinity) || arr.includes(-Infinity)) {
//     return false
//   } else {
//     const min = arr.reduce((acc, current) => {
//       return current < acc ? current : acc

//     }, Infinity)
//     return min;
//   }
// } else {
//   return false
// }

console.log(findSmallest([34, 15, 88, 2])); // 2
console.log(findSmallest([34, -345, -1, 100])); // -345
console.log(findSmallest({ a: 34, b: 15, c: 88, d: 2 })); // false
console.log(findSmallest("hello world")); // false
console.log(findSmallest([34, 15, "88", 2])); // false
console.log(findSmallest([])); // null
console.log(findSmallest([34, 15, NaN, 2])); // false
console.log(findSmallest([34, 15, Infinity, 2])); // false
console.log(findSmallest([34, 15, -Infinity, 2])); // false
console.log(findSmallest()); // false
