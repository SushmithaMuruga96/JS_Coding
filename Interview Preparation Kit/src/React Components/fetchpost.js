document.getElementById("clickme").addEventListener("click", fetchPost);

async function fetchPost() {
  console.log("calling function");
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
