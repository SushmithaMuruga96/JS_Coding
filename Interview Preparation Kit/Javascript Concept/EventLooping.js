const eventLooping = () => {
  //normal EventLooping
  console.log("start"); //added to call stack executes 1
  setTimeout(() => {
    console.log("timeout1"); // added to task queue execute 3
  }, 0);
  setTimeout(() => {
    console.log("timeout2"); // added to task queue execute 4
  }, 0);
  console.log("End"); // added to call stack execute 2

  //Microtasks and Macrotasks
  console.log("start"); //added to call stack
  setTimeout(() => {
    console.log("timeout1"); // it is a macro task in the task queue
  }, 0);
  Promise.resolve().then(() => {
    console.log("promise");
    //  it is a micro task in the task queue micro task always has high priority
    // so promise execute before rendering
  });
  console.log("End"); // added to call stack
};
eventLooping();

// export default EventLooping;
