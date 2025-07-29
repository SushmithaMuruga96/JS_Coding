//1.Array methods (Higher Order Functions)

let numMultiply = [1, 2, 3, 4, 5].map(function (num) {
  return num * 2;
});
console.log(numMultiply, "numMultiply");

[1, 2, 3, 4].forEach(function (num) {
  console.log(num * 3);
});

const filtered = [1, 2, 3].filter(function (num) {
  return num > 1;
});

console.log(filtered);

//2.Callbacks can be used Asynchronous

//timers

setTimeout(function () {
  console.log("Called after 2 seconds");
}, 2000);

let timer = 0;

// setInterval(function () {
//   ++timer;
//   console.log("Called Every second", timer);
// }, 1000);

//3.Event Listeners

// document.getElementById("clickMe").addEventListener("click", function () {
//   console.log("Button Clicked");
// });

//4.API fetch/ AJAX
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    // console.log(response[0], "response");
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
  });

function dosomething(callback) {
  callback();
}

dosomething(function () {
  console.log("I am an callback function");
});

new Promise(function (resolve, reject) {
  resolve("Success");
})
  .then(function (result) {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// async function fetchPosts() {
//   const promise = fetch("https://jsonplaceholder.typicode.com/posts");
//   console.log("Promise object:", promise); // Still <pending>

//   const response = await promise;
//   console.log("Response after await:", response);

//   const data = await response.json();
//   console.log("Parsed JSON data:", data);
// }

// fetchPosts();
