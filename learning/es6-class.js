// class expression
// const Person = class {}

// class declaration
class Person {
    constructor(firstName, birthYear) {
        //properties
        this.firstName = firstName,
        this.birthYear = birthYear
    }
    //methods:
    calcAge() {
        return 2022 - this.birthYear
    }
}

const Adham = new Person("Adham", 1999);
console.log(Adham);
console.log(Adham.calcAge());

Person.prototype.greet = function() {
    return `Hello ${this.firstName}`
}

console.log(Adham.greet());