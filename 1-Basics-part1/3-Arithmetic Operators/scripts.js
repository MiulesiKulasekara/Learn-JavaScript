// Arithmetic Operators

//Single Operators

var myAge = 22 ;
var sisAge = 14 ;
var year = 2023 ;
var result ;

// Substraction

result = year = myAge ;
console.log("I was bron in "+result);

// Addition
result = myAge + sisAge ;
console.log("Total of my and my sister's ages "+result);

// Multipication
console.log("Multipication of my and my sister's ages "+(myAge*sisAge));

// Division
console.log("Division of my and my sister's ages "+(myAge/sisAge));

// Modulus
console.log("Modulus of my and my sister's ages "+(myAge%sisAge));

// Exponentiation
console.log("Exponent of my age "+(myAge**3));

// -----Increment-----
console.log(myAge);//22
//pre increment
console.log(++myAge);//23
//post increment
//now myAge = 23 
console.log(myAge++);//
console.log(myAge)//24

// -----Decrement-----
//pre decrement
//now myAge = 24
console.log(--myAge);//23

//post decrement
//now myAge = 23
console.log(myAge--);//23
console.log(myAge);//22

// Operator Precedence
/*
() 
**
/
*
+
-
*/

var cal = (20+30)/10+4.5-2*4**2;
console.log(cal);

// Multiple Operators
var ans1, ans2;
ans1 = ans2 = (((30+40-29)*2)/8)**4; // Assignment operator ==> right to left
console.log(ans1+' , '+ans2);
