// Function

function myAge(age){
    console.log(`My age is ${age}`); 
}

// Function expressions

var myname = function(name){
    console.log(`My name is ${name}`);
}

myAge(22);
myname("Miulesi");

//Arrow functions

// var subject = () => {
//     console.log("My subject is software engineering");
// }

var subject = () => console.log("My subject is software engineering");

subject();

var sum = ( a , b ) => {
    return a + b ;
}

var sub = ( a , b ) => a - b ;

console.log(`Sum is ${sum(1,4)}`);
console.log(`Difference is ${sub(3,9)}`);

// set time out function

setTimeout(function(){
    console.log(`Hello......`)
},5000);

setTimeout(() => console.log(`Hi...`),3000);

//factotial

let findFactorial = (n) => {
    let j = 1;

    if( n == 0 ){
        j = 1 ;
    }
    else{
        for( let i = 1 ; i <= n ; i++ ){
            j *= i ;
        }
    }
    return j ;
}

console.log(findFactorial(5));

let calSal = (salary , allowance = 5000) => {
    return  salary + allowance ;
}

console.log(`My salary ${calSal(100000)}`);
console.log(`Nishu's salary ${calSal(200000,6000)}`);