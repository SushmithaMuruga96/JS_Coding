const CallbackFunction = () => {
  calculator(5, 5, printSum);
  function calculator(x, y, callback) {
    const sum = x + y;
    // callback(sum);  /// normal callback function s
    setTimeout(() => {
      callback(sum); //set timeout callback function  ==> async operation
    }, 1000);
  }

  function printSum(result) {
    console.log("result", result);
  }

  //==> async operation using promise
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { name: "john" };
        resolve(data);
      }, 1000);
    });
  };

  fetchData()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  const getData = async () => {
    try {
      const result = await fetchData();
      console.log(result, "result");
    } catch (error) {
      console.log(error);
    }
  };
  getData(); // aync operation using async await
  return <div>hello</div>;
};
export default CallbackFunction;
