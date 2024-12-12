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
  console.log("name :", this.name = name);
  console.log("Age :", this.age = age);
}
let person1 = Person("shifa", 21)


// 2
console.log("second part")
const playerOneName = 'tim'
const playerTwoName = 'kum'
const playerOneMarker = 'X'
const playerTwoMarker = 'O'


const playerOne = {
  name: 'tim',
  marker: "X"
}
const playerTwo = {
  name: "jenn",
  marker: 'O'
}
function printName(player) {
  console.log(player.name)
}
printName(playerOne)

// object constructors

function Player(name, marker) {
  this.name = name;
  this.marker = marker

}

const amal = new Player("amal", "p")
console.log(amal)
console.log(amal.name)
