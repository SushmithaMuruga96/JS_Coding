/* eslint-disable no-undef */
const cart = ["apple", "banana", "orange"];

//callback hell
// eslint-disable-next-line no-undef
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function (orderInfo) {
      updateWallet(orderInfo, function () {
        console.log("done");
      });
    });
  });
});

const GITHUB_API_URL = "https://api.github.com/users/octocat";
const user = fetch(GITHUB_API_URL);

console.log(user);

createOrder(cart)
  .then(function (orderId) {
    proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    showOrderSummary();
  })
  .then(function (orderInfo) {
    updateWallet();
  })
  .catch((error) => console.error("Error:", error));

// other way to write the same code using arrow functions

createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((orderInfo) => updateWallet(orderInfo))
  .catch((error) => console.error("Error:", error));
