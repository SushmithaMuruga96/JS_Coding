export function CustomSort(arr) {
  if (arr.length === 0) return [];

  const stringarr = arr.filter((x) => typeof x === "string");
  const numericarr = arr.filter((x) => typeof x === "number");

  // custom sort for strings (case-sensitive)
  const sortStrings = (arr) => {
    const result = [];
    for (const current of arr) {
      let inserted = false;
      for (let i = 0; i < result.length; i++) {
        if (current < result[i]) {
          // JS compares strings lexicographically, and case-sensitive
          result.splice(i, 0, current);
          inserted = true;
          break;
        }
      }
      if (!inserted) {
        result.push(current);
      }
    }
    return result;
  };

  // custom sort for numbers
  const sortNumbers = (arr) => {
    const result = [];
    for (const current of arr) {
      let inserted = false;
      for (let i = 0; i < result.length; i++) {
        if (current < result[i]) {
          result.splice(i, 0, current);
          inserted = true;
          break;
        }
      }
      if (!inserted) {
        result.push(current);
      }
    }
    return result;
  };

  const sortedStrings = sortStrings(stringarr);
  const sortedNumbers = sortNumbers(numericarr);

  return sortedStrings.concat(sortedNumbers);
}

// const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
// CustomSort(input);
