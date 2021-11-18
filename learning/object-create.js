const PersonProto = {
    calcAge() {
        return 2022 - this.birthYear
    }
};

const Adham = Object.create(PersonProto);
Adham.birthYear = 1999;
console.log(Adham.calcAge());