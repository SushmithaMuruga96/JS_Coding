//concate two strings
const str1 = "Sushmitha";
const str2 = "Muruganantham";

console.log("concat", str1.concat(str2));
const str3 = str1 + " " + str2;
console.log("using +", str3);

const str4 = `${str1} ${str2}`;
console.log("using template Literal", str4);

const str5 = [str1, str2].join(" ");
console.log("using join with array", str5);

const str6 = "".concat(str1, " ", str2);
console.log("concat multiple arguments", str6);

const str7 = [str1, str2].reduce((acc, val) => acc + " " + val);
console.log("Array.reduce", str7);

//convert string to upper/lowercase

console.log("lower", str1.toLowerCase());
console.log("upper", str2.toUpperCase());

//non - English languages
console.log("toLocaleLowerCase", str1.toLocaleLowerCase());
console.log("toLocaleUpperCase", str2.toLocaleUpperCase());

//Reverse a string
console.log("reverse", str1.substring(-1, 0));

for (let i = str1.length - 1; i <= str1.length; i--) {
  let arr = [];
  arr.push(str1[i]);
  console.log("reverse an string", arr);
}

//wrong
