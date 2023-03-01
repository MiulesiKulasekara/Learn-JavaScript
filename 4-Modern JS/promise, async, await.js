console.log("Start");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Reject");
  }, 3000);
});
promise
  .then((sucsess) => {
    console.log(sucsess);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("End");

// console.log(promise);

//Promise (object)==> function with 2 parameters
//then(property of a promise object - collect the sucsess scenario) => function with 1 parameter
//catch(property of a promise object - collect the error scenario) => function with 1 parameter
