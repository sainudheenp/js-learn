// pass by value
let n = 19;
function mod(x) {
    x = 11;
    console.log("Inside fucn:", x)
}

mod(n)
console.log("Outside func: ", n)


//pass by reffresnde

let obj = { name: "Ravi" }

function modRef(O) {
    O.name = "Joxx"
    console.log("Inside func :", O.name)
}
modRef(obj)
console.log("Outside func: ", obj.name)


// IIF function

// IIF function
// (function iif() {
//     console.log("I'm IIF");
//   })();

//   // IIF function
// (() => {
//     console.log("I'm IIF arrrow" );
//   })();