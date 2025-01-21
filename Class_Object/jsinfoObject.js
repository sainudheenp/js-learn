let user={}
let cons_user = new Object ()

user.name = "Allen"
user.surName = "Rintoul"
console.log(user.name)

console.log(user)
delete user.name
console.log(user)

let ref={
    name:'sainu'
}

let ref2 = ref;
console.log(ref)
console.log(ref2)
ref2.name="Sainu changed"

console.log(ref)
console.log(ref2)

