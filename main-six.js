// Class
class Person {
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }
  sayMyName() {
    return this.firstName + " " + this.lastName;
  }
}
const classP1 = new Person("Bruce", "Johns");
console.log(classP1.sayMyName());

class SuperHero extends Person {
  constructor(fName, lName) {
    super(fName, lName);
    this.isSuperHero = true;
  }
  fightCrime() {
    console.log("Fighting Crime");
  }
}
const batman = new SuperHero("B", "C");
console.log(batman.sayMyName());
batman.fightCrime();
