// Objects and Object Constructors

const Obj = {
  Property: "value",
  otherProperty: 77,
  obnoxius: function () {
    console.log("Hello Object Function");
  },
};

// There are also 2 ways to get information out of an object: dot notation and bracket notation.
Obj.obnoxius();
// Obj[obnoxius]

function Person(name, age) {
  console.log("name :", this.name=name);
  console.log("Age :", this.age=age);
}
let person1 = Person("shifa",21)

