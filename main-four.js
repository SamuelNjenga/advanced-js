// this
function sayMyName(name) {
  console.log(`My name is ${name}`);
}

sayMyName("Samuel Njenga");
sayMyName("JavaScript");

// Implicit Binding -> Tells you what 'this' refers to most of the times
const person = {
  name: "Samuel Njenga",
  sayMyNameTwo: function () {
    console.log(`My name is ${this.name}`);
  },
};
person.sayMyNameTwo();
// Use dot notation to invoke function
// When a function is invoked with a dot notation the object to the left of the dot is what 'this' keyword is referencing
// Js will treat this.name as person.name

// Explicit Binding -> Function is now separated from person object
// You have to explicitly separate the context when the function is called
// Use built in call method -> Allows you to specify context with which a function is called
function sayMyNameThree() {
  console.log(`My name is ${this.name}`);
}
sayMyNameThree.call(person);

// New Binding -> we can invoke a function with the new keyword
function Person(name) {
  // this = {} = Empty Object = Done by the new keyword behind the scenes
  this.name = name;
}
// Person is known as a constructor function
const p1 = new Person("Kevin");
const p2 = new Person("Lydia");

console.log(p1.name);
console.log(p2.name);

// Default Binding -> Fallback Binding when none of the above 3 rules are matched
// JS defaults to or relies on global scope
const name = "Dhan Kims"; // For Browser
globalThis.name = "Jeff Bezzos"; // For Node.js
sayMyNameThree();
