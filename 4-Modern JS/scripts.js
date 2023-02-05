//-----Template literals-----

//old
// let fname = "Shamal";
// let lname = "Aravinda";

// let fullname = fname + " " + lname ;

// console.log(fullname);

//new
let fname = "Shamal";
let lname = "Aravinda";

let fullname = `${fname} ${lname}`;

console.log(fullname);

//old
// let text = "Hello \n" + "World"

// console.log(text);

//new
let text = "Hello\nworld";

console.log(text);

//-------------------------------------------------------------------------------------------------

//-----Object Destructuring-----

const personalDetails = {
  fristName: "Shamal",
  lastName: "Aravinda",
  city: "Colombo",
};

//old
// console.log(personalDetails.fristName);
// console.log(personalDetails.lastName);
// console.log(personalDetails.city);

//new
const { fristName: fn, lastName: ln, city: c } = personalDetails;
console.log(fn);
console.log(ln);
console.log(c);

//-------------------------------------------------------------------------------------------------

//-----Array Destructuring-----

//old

// let myArray = ["Shamal" , "Aravinda" , "Saman" , "Kumari" , "Kusum"]

// console.log(myArray[0]);
// console.log(myArray[2]);
// console.log(myArray[4]);

// myArray[0] = "Malith";
// console.log(myArray[0]);

//new

let [item1, item2, item3] = ["Shamal", "Aravinda", "Saman", "Kumari", "Kusum"];

item2 = "Jenny";

console.log(item1);
console.log(item2);
console.log(item3);

//-------------------------------------------------------------------------------------------------

//-----Object Literal-----

//old
// function addressMaker(city , state){
//     const newAddress = { myCity: city , myState: state}

//     console.log(newAddress)
// }

// addressMaker("Austin" , "Texas")

function addressMaker(city, state) {
  const newAddress = { city, state }; //same as function parameters

  console.log(newAddress);
}

addressMaker("Austin", "Texas");

//-------------------------------------------------------------------------------------------------

//-----Challenge-----

// function addressMaker(address){
//     const newAddress = {
//         city:address.city,
//         state:address.state,
//         country:"US"
//     };

//     console.log(newAddress);
// }

// addressMaker({city:"Austin" , state:"Texas"});

function addressMaker(address) {
  const { city, state } = address;

  const newAddress = {
    city,
    state,
    country: "US",
  };

  console.log(newAddress);
}

addressMaker({ city: "Austin", state: "Texas" });

//-------------------------------------------------------------------------------------------------

//-----For of loop-----

//old
// let income = [1000 , 500 , 3600 , 748]

// let total = 0 ;

// for( let i = 0 ; i < income.length ; i++ ){
//     console.log(income[i]);
//     total = total + income[i];

// }

// console.log(`My income is ${total}`);

// new
let income = [1000, 500, 3600, 748];

let total = 0;

let i;

for (i of income) {
  console.log(i);

  total = total + i;
}

console.log(`My income is ${total}`);

let text1 = "Shamal Aravinda";

let j;

for (j of text) {
  console.log(j);
}

//-------------------------------------------------------------------------------------------------

//-----Spred operator-----

let number = [2, 12, 10, 49, 01];
console.log(number);

let newArray = Array(...number, 3, 5, 6);
console.log(newArray);

let data = {
  item1: "jnscn",
  item2: "mcdnks",
};

let data1 = {
  ...data,
  item3: "vndkss",
};

console.log(data1);

//-------------------------------------------------------------------------------------------------

//-----Rest operator-----

//old
// function addingNumbers(num){
//     console.log(arguments);
// }

// addingNumbers(5 , 4);

//new
function addingNumbers(...num) {
  console.log(num);
}

addingNumbers(5, 4, 8);

//-----Arrow functions-----

function addNumbers(...num) {
    console.log(num);
  
    //old
    // let total = num.reduce(function (x , y){
    //     return x + y;
    // });
    // console.log(`The total is : ${total}`);
  
    let total = num.reduce((x, y) => x + y);
    console.log(`The total is : ${total}`);
  }
  
  addNumbers(5, 4, 8, 7, 10, 17);
  
  // reduce()
  
  // executes a reducer function for array element.
  
  // returns a single value: the function's accumulated result.
  
  // method does not execute the function for empty array elements.
  
  // method does not change the original array.
  
//-------------------------------------------------------------------------------------------------
