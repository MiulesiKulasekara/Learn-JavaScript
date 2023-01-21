// -----Let & Const (ES6)------

console.log("========var========");

// var - var is the functional scope. That means we cannot access the variables 
// declared inside the function from outside the function.

var num1 = 10 ;

function numberA(){
    var num2 = 20 ;

    console.log(num1);
    console.log(num2);

    // var num1 = 100 ;
    // console.log(num1);

    num1 = 1 ;
    console.log(num1); // Even if the variable is declared outside the function, 
                       // we can modify the variable while inside the function scope.   
}

numberA();
// console.log(num2); //Can not print . bcuz num 2 is decleared inside the function
console.log(num1);

if( num1 > 5 ){ // block scope
    var num3 = 9 ;
}

console.log(num3); //undefined

console.log("==============================================================================================================");