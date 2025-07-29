//Create a Function that Adds Numbers

import React from "react";

const ClosureProblems = () => {
  const add = (a) => {
    return function (b) {
      return a + b;
    };
  };

  const addTwoNumbers = add(10);

  const createCounter = () => {
    let count = 0;

    return {
      increment: () => ++count,
      decrement: () => --count,
      getValue: () => count,
    };
  };

  const ccfunct = createCounter();
  console.log(ccfunct.increment());
  console.log(ccfunct.getValue());
  console.log(ccfunct.decrement());

  const sum = (a) => {
    return function (b) {
      return function (c) {
        return function () {
          return a + b + c;
        };
      };
    };
  };

  const callMultipleSum = sum(2)(3)(100)();

  const multiply = (a, b) => {
    return a * b;
  };

  const memoization = (fn) => {
    const result = fn(10, 30);
    return result;
  };

  const memoizeResult = memoization(multiply);

  return (
    <>
      <h1>ClosureProblems</h1>
      {addTwoNumbers(50)} <br />
      {addTwoNumbers(100)} <br />
      ------------------------------------- <br />
      {ccfunct.increment()} ---
      {ccfunct.increment()} ---
      {ccfunct.decrement()} ---
      {ccfunct.getValue()} <br />
      --------------------------------
      <br />
      {callMultipleSum}
      <br />
      -------------------------------------
      <br />
      {memoizeResult}
    </>
  );
};

export default ClosureProblems;
