const fruits = ["apple", "orange"];
fruits.push("mango");
fruits.unshift("banana");
fruits.pop();
console.log(Array.isArray(fruits));
fruits[3] = "strawberries";
console.log(fruits.indexOf("kiwi"));
console.log(fruits);
