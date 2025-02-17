// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const first = 'Jacob';

function name (){
  let last = 'Williams';
  console.log(`You can call me ${first}, ${first} ${last}`)
}

name();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => ++ count;
};
const newCounter = counter();
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  let increment = () => ++ counter;
  let decrement = () => -- counter;
  let num = {increment , decrement};
  return num;
  
};

const math = counterFactory();
  
console.log(math.decrement());
console.log(math.decrement());
console.log(math.decrement());
console.log(math.increment());
console.log(math.increment());
console.log(math.increment());
