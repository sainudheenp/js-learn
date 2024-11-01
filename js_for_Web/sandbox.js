let user = {
    name: "jude",
    age: 30,
    email: "jude@gmail.com",
    projects: ["crud", "toDo", "Xlien"],
    hello : function () {
        console.log("hello");
    } ,
    // theses error
    theses:this.email  
}


console.log(user)
console.log(user.name)
console.log(user["name"])

//update name
user["name"] = "Don"
console.log(user.name)
user.hello();
console.log(typeof user["name"])
console.log(theses)
// theses error




console.log(Math)
console.log(Math.PI)
let area =4.4
console.log(Math.round(area ))

const random = Math.random()
console.log(random)
