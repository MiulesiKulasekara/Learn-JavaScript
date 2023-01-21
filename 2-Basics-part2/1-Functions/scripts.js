// -----Functions-----

// A function is a reusable code segment that does a special task.

// Declare a fubction => functionfunctionName( argument1 , argument2 ){}

// Define a function - without return

function addTwoNumbers( num1 , num2){
    var answer = num1 + num2 ;
    console.log("Addition of the "+num1+" and "+num2+" is "+answer);
}

// call function

addTwoNumbers(2 , 5);

// Define a function - with return

function multiplyTwoNumbers( num3 , num4 ){
   return num3*num4;
}

// call function

console.log("Multipication is : "+multiplyTwoNumbers( 8 , 11 ));

//=====================================================================================

function calculateAge( yourBirthYear ){
    return 2023 - yourBirthYear
}

console.log("My age is : "+calculateAge(2000));

function yearOfRetirement( byr ){
    var age = calculateAge( byr );

    return ( 55 - age ) + 2023;
    
}

console.log("My year of retirment is : "+yearOfRetirement( 2000 ));

// Function expressions

var checkJob = function( job , name ){
    switch(job.toLocaleLowerCase()){
        case "doctor":
            console.log(name+" is a "+job);
            break;
        case "teacher":
            console.log(name+" is a "+job);
            break;
        case "engineer":
            console.log(name+" is a "+job);
            break;
        default:
            console.log(name+" is doing something else"); 
            break; 
    }
    
}

checkJob("Programmer" , "Shamal");