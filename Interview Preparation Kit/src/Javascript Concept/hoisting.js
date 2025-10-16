const Hoisting = () => {
  printHello(); // will hoist
  sayBye(); // will not hoist throw not a function error
  //   console.log(x);
  //   console.log(y);
  //   console.log(z);
  var x = 5; // return undefined not hoist
  let y = 10; // return cannot access before initialization  not hoist
  const z = 15; // same as the previous one

  function printHello() {
    console.log("printing hello");
  }

  var sayBye = function () {
    console.log("I am saying bye to you");
  };
  return <div>helllo</div>;
};

export default Hoisting;
