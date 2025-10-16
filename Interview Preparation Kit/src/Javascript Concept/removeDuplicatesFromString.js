function removeDuplicatesFromString(str) {
  //convert string into array
  const splittedStr = str.split("");
  //apply set to the string
  const newSet = new Set(splittedStr);
  //convert to array
  const toarr = Array.from(newSet);
  //convert to string
  const arr = toarr.join("");
  console.log(arr);
}

// using spread operator

function removeDuplicatesFromStringFun2(str) {
  const newstr = [...new Set(str.toLowerCase())].join("");
  console.log(newstr);

  return newstr;
}

//using ArrayFrom
function removeDuplicatesFromStringFun3(str) {
  const newstr = Array.from(new Set(str)).join("");
  console.log(newstr);

  return newstr;
}

removeDuplicatesFromStringFun3("Javascript Interview Preparations");
removeDuplicatesFromStringFun2("Javascript Interview Preparations");
removeDuplicatesFromString("Javascript Interview Preparations");
