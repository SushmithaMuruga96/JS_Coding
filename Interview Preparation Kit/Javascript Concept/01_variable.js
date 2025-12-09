console.log(name); //aceessbile
console.log(age); //not accessible
console.log(isMarried); //not accessible

var name = "Sushm";
let age = 30;
const isMarried = true;

age = 35;
// isMarried = false;
name = "anand";

// this is global scope these variables are declared in global scope
const handleClick = () => {
  let graduated = true;

  function secondFunc() {
    let college = "AU";
    graduated = false;
  }
  graduated = false;
  console.log(graduated);
};

handleClick();
