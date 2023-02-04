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
let text = 'Hello\nworld'

console.log(text);

//-------------------------------------------------------------------------------------------------

//-----Object Destructuring-----

const personalDetails = {
    fristName : "Shamal",
    lastName : "Aravinda",
    city : "Colombo"
}

//old
// console.log(personalDetails.fristName);
// console.log(personalDetails.lastName);
// console.log(personalDetails.city);

//new
const {fristName: fn , lastName: ln , city: c} = personalDetails
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

let [item1 , item2 , item3] = ["Shamal" , "Aravinda" , "Saman" , "Kumari" , "Kusum"];

item2 = "Jenny" ;

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

function addressMaker(city , state){
    const newAddress = { city ,state }//same as function parameters

    console.log(newAddress)
}

addressMaker("Austin" , "Texas")

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

function addressMaker(address){

    const { city , state } = address;

    const newAddress = {
        city ,
        state ,
        country:"US"
    }
    
    console.log(newAddress);
}

addressMaker({city:"Austin" , state:"Texas"});

//-------------------------------------------------------------------------------------------------





