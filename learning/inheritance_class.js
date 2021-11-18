// 1. Constractor function 

// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function (currentYear) {
//     return currentYear - this.birthYear
// }

// const Student = function(firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear);
//     this.course = course;
// }

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.intro = function () {
//     return `My name is ${this.firstName}. I study ${this.course}`;
// }

// const Adham =new Student("Adham", 1999, "Logistics");
// console.log(Adham.intro());
// console.log(Adham.calcAge(2021));
// console.log(Student.prototype.constractor);

// 2. Class:

// class Person {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName,
//         this.birthYear = birthYear
//     }
//     calcAge(currentYear) {
//         return currentYear - this.birthYear
//     }
//     set checkAge(currentYear) {
//         if(currentYear - this.birthYear > 18) this.age = currentYear - this.birthYear;
//         else this.error = "You are younger" 
//     }
//     get result() {
//         if(this.age) return this.age
//         else return this.error
//     }
//     static greeting() {
//         console.log("Hey there");
//     }
// }

// class Student extends Person {
//     constructor(firstName, birthYear, course) {
//         super(firstName, birthYear);
//         this.course = course;
//     }
//     intro() {
//         return `My name is ${this.firstName}. I study ${this.course}`
//     }
// }

// const Adham = new Student("Adham", 1999, "Logistics");

// console.log(Adham);
// console.log(Adham.intro());
// console.log(Adham.calcAge(2021));

// 16 video
