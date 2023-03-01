//-----Call backs-----

// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

console.log("Init");

function myFunction(number) {
  console.log(`The number is ${number}`);
}

function helloFunction(){
    console.log(`Hello!`);
}
console.log(`End`);
//-------------------------------------------------------------------------------------------------
