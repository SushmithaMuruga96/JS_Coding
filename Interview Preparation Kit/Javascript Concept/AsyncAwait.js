// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 1 resolved");
//   }, 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 2 resolved");
//   }, 10000);
// });

// async function getData() {
//   console.log("Fetching data..."); //1
//   const res1 = await p1; // waits here until p1 is resolved
//   console.log(res1); //2

//   const res2 = await p2; // waits here until p2 is resolved
//   console.log(res2); //3
//   console.log("All data fetched"); //4
// }

// getData();

// async function getData() {
//   //   return "Namaste";
//   return p;
// }
// const dataPromise = getData();
// console.log(dataPromise);
// dataPromise.then((res) => console.log(res));

// Without async-await normal promise chaining
// function getData() {
//   console.log("Fetching data..."); // 1
//   p1.then((res1) => {
//     console.log(res1); //3
//   });

//   console.log("All data fetched"); // 2
// }
// getData();

//keytakeaways
// 1. async function always returns a promise
// 2. await can be used only inside async function
// 3. await makes suspended code until that promise settles and returns its result
// 4. promises willnot block the main thread but
//await suspends the code and continues to execute from there when the promise is settled
//thats developer uses async-await than normal promise chaining
//for better understanding of code flow

// const API_URL = "https://api.github.com/users/SushmithaMuruga96";
const API_URL = "https://someinvalidurl.com/data"; // to test error handling
async function getData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("Error occurred:", err);
  }
}
getData();
