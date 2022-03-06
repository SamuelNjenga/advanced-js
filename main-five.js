// Prototypes

function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

const person1 = new Person("Sam", "Njenga");
const person2 = new Person("Jeff", "Bezzos");

// JS is a dynamic language and it allows us to attach new properties to an object at any given time
person1.getFullName = function () {
  return this.firstName + " " + this.lastName;
};
console.log(person1.getFullName());
// console.log(person2.getFullName());

// What if we wanted to attach a property or a function that should be applied to every instance of the Person function
// In JS every function has a property called prototype that points to an object
// We can make use of that prototype object to determine all our sharable properties

// Prototypes are used to share properties and methods across instances
Person.prototype.getFullNameTwo = function () {
  return this.firstName + " " + this.lastName;
};
console.log(person1.getFullNameTwo());
console.log(person2.getFullNameTwo());

// In JS, inheritance is supported through the concept of prototypes & is referred to as prototypal inheritance
function SuperHero(fName, lName) {
  // this = {}
  Person.call(this, fName, lName);
  this.isSuperHero = true;
}

SuperHero.prototype.fightCrime = function () {
  console.log("Fighting Crime");
};
//Creates an object that has the specified prototype or that has null prototype
// Helps to inherit method through the prototype chain
SuperHero.prototype = Object.create(Person.prototype);
const batman = new SuperHero("Kevin", "Kimaru");
// Cleanup -> Ensure that SuperHero.prototype.constructor = SuperHero
// Because otherwise JS thinks that a SuperHero is created from Person which is incorrect
SuperHero.prototype.constructor = SuperHero;
console.log(batman.getFullNameTwo()); // batman has inherited getFullNameTwo function from person
