// Loops

//Loops are control structures that runs code block with a condition until condition false

//for loop

console.log("Acending order --> for loop")
for( var i = 1 ; i <= 10 ; i++ ){
    console.log(i);
}

/*

i = 1     1 <= 10    true     print 1     i++
i = 2     2 <= 10    true     print 2     i++
i = 3     3 <= 10    true     print 3     i++
i = 4     4 <= 10    true     print 4     i++
i = 5     5 <= 10    true     print 5     i++
i = 6     6 <= 10    true     print 6     i++
i = 7     7 <= 10    true     print 7     i++
i = 8     8 <= 10    true     print 8     i++
i = 9     9 <= 10    true     print 9     i++
i = 10   10 <= 10    true     print 10    i++
i = 11   10 <= 10    false    exit from the loop. Loop is terminated

*/

console.log("Descending order --> for loop");
for( var i = 10 ; i > 0 ; i-- ){
    console.log(i)
}

//Iterate an array

var student = ["Shamal" , "Pubudu" , "Amali" , "Dulani" , "Gihan"]; //length = 5 , index = 0 , 1 , 2 , 3, 4
var marks = new Array( 45 , 67 , 89, 72, 82);

console.log("Display array-student --> for loop");
for( var i = 0 ; i < student.length ; i++){
    console.log(student[i]);
}

//for in - Iterate properties of an object

var myInfor = {name : "Miulesi" , age : 22 , city : "Colombo"}

var i;


console.log("Display object --> for in loop");
for(i in myInfor){
    console.log(myInfor[i]);
}

// for of - Iterate array , string , map (data structures)

var name = "Miulesi Kulasekara"

var i ;

console.log("Display characters of a string --> for of loop");
for( i of name){
    console.log(i);
}

console.log("Display array-marks --> for of loop");
for( i of marks){
    console.log(i);
}

//while loop

var count = 0 ;

console.log("Acending order --> while loop");
while(count < 5 ){
    console.log(count+1);

    count ++ ;
}

//do while loop
var j = 10 ;
console.log("Descending order --> do while loop");
do{
    console.log(j);
    j--
}
while(j >= 1)

// Continue & Break
// The break and the continue statements are the only JavaScript statements that can "jump out of" a code block.
var data = ["Shamal","Colombo",2000,"Chemistry",true,"Pizza"];

// Continue
// If a specified condition occurs, and continues with the next iteration in the loop.
console.log("=====Continue=====");
for(var i = 0; i < data.length; i++){
    if(typeof(data[i]) !== 'string'){
        continue ;
    }

    console.log(data[i]);
    
}

// Break
// Breaks the loop and continues executing the code after the loop (if any)
console.log("=====Brake=====");
for(var i = 0; i < data.length; i++){
    if(typeof(data[i]) !== 'string'){
        break;
    }

    console.log(data[i]);
}