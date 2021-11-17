class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName,
        this.birthYear = birthYear
    }
    // instance methods
    calcAge() {
        return 2022 - this.birthYear
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
    //static methods
    static greeting() {
        console.log("Hey there");
    }
}

Person.greeting();
const Adham = new Person("Adham", 1999);