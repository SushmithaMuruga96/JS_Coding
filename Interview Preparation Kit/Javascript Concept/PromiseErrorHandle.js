const cart = ["shirt", "kurta", "jeans", "sneakers"];

const promise = createOrder(cart)
  .then(function (orderId) {
    console.log("Order id:", orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log("paymentInfo:", paymentInfo);
  })
  .catch(function (err) {
    console.log("Error:", err.message);
  })
  .then(function () {
    console.log("Thank you for shopping with us!");
    //Nomatter if there is an error or not, this block will always execute
  });

console.log(promise);

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!cartisValid(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });
}

function cartisValid(cart) {
  return false;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment successful for order id: " + orderId);
    // reject(new Error("Payment failed due to network error"));
  });
}

//key Takways:
//1. Promises can be chained using .then() method.
//2. Each .then() returns a new promise, allowing for further chaining.
//3. Errors in any part of the chain can be caught using a single .catch() at the end.
//4. A final .then() can be used to execute code regardless of success or failure, similar to a finally block.
//5. we have control over the flow of asynchronous operations and error handling in a clean and readable manner.
//6. it is important to return promises in each .then() to maintain the chain.
//7. promise states (pending, fulfilled, rejected) and it will either
//  resolve or reject based on the operations performed within it.
