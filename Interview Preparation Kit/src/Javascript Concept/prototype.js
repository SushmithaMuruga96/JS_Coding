function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
  this.getFullName = function () {
    console.log(this.firstName + "" + this.lastName);
  };
}

const person1 = new Person("sush", "As");
const person2 = new Person("Anand", "As");
person1.getFullName();
person2.getFullName();
