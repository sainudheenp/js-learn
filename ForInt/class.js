class Student {
    name
    yob
    constructor(n,a){
        this.name= n
        this.yob =a

    }
    getAge() {
        return new Date.getFullYear() - this.yob
    };
    getName() {
        return this.name
    }
}

const studnet1 =  new Student("sainu",2003)
const student2 = new Student("Shifa",2003)
console.log(studnet1, student2)