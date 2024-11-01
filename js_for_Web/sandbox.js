let user = {
    name: "jude",
    age: 30,
    email: "jude@gmail.com",
    projects: ["crud", "toDo", "Xlien"],
    hello : function () {
        console.log("hello");
    } ,
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