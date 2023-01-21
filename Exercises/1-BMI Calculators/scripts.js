// --------------------------------
// ---------BMI Calculator---------
// --------------------------------

var mass , height , bmi;

//Take key board inputs
mass = prompt("Enter Your Mass (kg) ");
height = prompt("Enter Your Height (m) ");

//Calculate BMI value

bmi = mass / (height ** 2) ;

alert("Your BMI Value is " +bmi);