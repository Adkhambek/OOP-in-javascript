const Person = function(firstName, birthYear ) {
    // instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    return 2022 - this.birthYear
}

const adham = new Person("Adham", 1999);
console.log(adham.calcAge());
console.log(adham.__proto__);

Person.prototype.lastName = "Muzaffarov"
console.log(adham.lastName);
console.log(adham.hasOwnProperty("lastName"));

// 5-video