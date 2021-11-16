const Person = function(firstName, age) {
    // instance properties
    this.firstName = firstName;
    this.age = age;
};

const adham = new Person("Adham", 21);
const hasan = new Person("Hasan", 18);

console.log(adham.age, hasan);
console.log(hasan instanceof Person);

