const Closure = () => {
  const outer = () => {
    const outerVariable = "I am an outer variable";

    function inner() {
      console.log("outerVariable", outerVariable);
    }
    return inner;
  };
  const myFunction = outer();
  myFunction();

  //create private variables
  //Closures are often used to create private variables that cannot be accessed directly from outside a function

  function createCounter() {
    let count = 0;

    return {
      increment: function () {
        count++;
        return count;
      },
      decrement: function () {
        count--;
        return count;
      },
      getValue: function () {
        return count;
      },
    };
  }

  const counter = createCounter();
  console.log(counter.increment());
  console.log(counter.decrement());

  console.log(counter.getValue());

  //Function Factories  Closures can create functions with preset arguments
  //Here, greet creates a closure that retains the greeting argument, allowing sayHello and sayHi to be customized greeting functions.

  function greet(greeting) {
    return function (name) {
      console.log(`${greeting},${name}`);
    };
  }

  const sayhello = greet("hello");
  const sayhi = greet("hi");
  sayhello("Alice");
  sayhi("bob");

  //Maintaining State in Asynchronous Operations
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }

  return <div>hello</div>;
};

export default Closure;
