//-----JS Data types-----

// Number - Floating point numbers, for decimals and integers
// String - Sequence of characters, used for text
// Boolean - Logical data type that can only be true or false
// Undefined - Data type of a variable that does not have a value yet
// Null - Non-existent 

//-----JS variables-----

// JS variables only starts with a letter, underscore or dollar sign

//-----create variables-----

//difine variables

var job , height ;

//declere the variable

var firstName = "Shamal";
var lastName = "Aravinda";
var age = 22;
var isOk = true ;
var text = "Hi";

console.log(firstName);
console.log(lastName);
console.log("My name is "+firstName+" "+lastName);
console.log("My age is "+age);
console.log("Is your information true?.My information is "+isOk);
console.log("My job is "+job);

//find variable type ==> use javascript inbuild function 'typeof'
console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(age));
console.log(typeof(isOk));
console.log(typeof(height));

//define

job = 'Software engineer';
console.log(job);

console.log(text);
//Variable mutation - change a value of variable

text = "Hello";

console.log(text);

//-----alert and prompt-----

// alert - display a Message
// promt - take inputs

height = prompt("What is your height");
alert("My height is "+height+" feet.");

