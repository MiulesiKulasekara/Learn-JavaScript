//-----Call backs-----

// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

console.log("Init");

function myFunction(number, suc, err) {
  if (number % 2 == 0) {
    suc();
  } else {
    err();
  }
}

myFunction(
  11,
  (sucsess) => {
    console.log("Even number");
  },
  (error) => {
    console.log("Odd number");
  }
);

console.log(`End`);

//-------------------------------------------------------------------------------------------------
