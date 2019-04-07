// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

var x = 10;

function printX() {
  console.log(x);
}

printX();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
var counterInt = 0
const counter = () => {
  counterInt ++;
  console.log(counterInt);
  // Return a function that when invoked increments and returns a counter variable.
};

counter();
counter();
counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

// const counterFactory = () => {
//   increment: function() {
//     counterInt++;
//     console.log(counterInt);
//   }

//   increment: function() {
//     counterInt--;
//     console.log(counterInt);
//   }
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
// };

// counterFactory.increment();
// counterFactory.increment();
// counterFactory.decrement();