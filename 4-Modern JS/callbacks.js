//-----Call backs-----

// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

console.log("Init");

function myFunction(number, callback) {
  console.log(`The number is ${number}`);
  callback();
}

myFunction(10, () => {
  console.log(`Hello. I am a callback function!`);
});

console.log(`End`);
//-------------------------------------------------------------------------------------------------
