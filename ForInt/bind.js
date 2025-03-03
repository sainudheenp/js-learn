const person = {
    Fname: "John",
    Lname: "Doe",
    fullname: function () {
        return this.Fname + " " + this.Lname
    }
}

const member = {
    fistName : "Hege",
    lastName : "Koe"
}

let fullnamee = person.fullname.bind(member)

console.log(fullnamee)