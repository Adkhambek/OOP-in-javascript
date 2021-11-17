// const programmer = {
//     firstName: "Adham",
//     age: 23,
//     profession: "Student",
//     experience: 1,
//     technologies: ["HTML", "CSS", "SASS", "Javascript", "Nodejs", "Expressjs"],
//     get allTech() {
//         return this.technologies.forEach(val => console.log(val))
//     },
//     set addTech(val) {
//         return this.technologies.push(val)
//     }
// }

// programmer.allTech;
// programmer.addTech = "Sequelize";
// programmer.allTech;

class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName,
        this.birthYear = birthYear
    }
    get calcAge() {
        return 2022 - this.birthYear
    }
    set checkAge(currentYear) {
        if(currentYear - this.birthYear > 18) this.age = currentYear - this.birthYear;
        else this.error = "You are younger" 
    }
    get result() {
        if(this.age) return this.age
        else return this.error
    }
}
const Adham = new Person("Adham", 1999)
// console.log(Adham.calcAge);
Adham.checkAge = 2010;
console.log(Adham.result);
