const MakeCounter = () => {
  const makeCounter = (initialValue = 0) => {
    let count = initialValue - 1;

    return () => {
      count += 1;
      return count;
    };
  };

  const counter = makeCounter();

  return (
    <div>
      {counter()}
      {counter()}
      {counter()}
      {counter()}
    </div>
  );
};
export default MakeCounter;
