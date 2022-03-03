// Closure
function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  inner();
}
outer();
outer();

function outer_two() {
  let counter = 0;
  function inner_two() {
    counter++;
    console.log(counter);
  }
  return inner_two;
}
const fn = outer_two();
fn();
fn();
fn();
