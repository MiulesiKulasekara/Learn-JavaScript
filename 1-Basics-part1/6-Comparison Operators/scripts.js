// Comparison Operators

var a = 2 ;
var b = "2" ;
var c = 3 ;
var d = 5 ;
var e = 6 ;
var f = 8 ;
var g = 33 ;
var h = 11 ;

// Equal to

if( a == b ){
    if( a === b ){ // check both type and value are equal
        console.log("Both type and value of a is equl to b") ;
    }
    else{ // check  type or value are equal
        console.log("Only type or value of a is equl to b") ;
    }
}

// Grater than or equal to

if( d >= c ){
    if( d >= 5 ){
        console.log("d is greater than or equals to 5");
    }
    else if( d == 4 ){
        console.log("d is 4");
    }
    else{
        console.log("Both c and d are 3")
    }
}

// Less than or equal to

if( e <= f ){
    if( e <= 6 ){
        console.log("e is less than or equals to 6");
    }
    else if( e == 7 ){
        console.log("d is 7");
    }
    else{
        console.log("Both c and d are 8")
    }
}

// Not equal to

if( g != h ){
    // if( g > h ){
    //     console.log("g is greater than h");
    // }
    // else{
    //     console.log("g is less than h");
    // }

    //Ternary operator

    g > h ? console.log("g is greater than h") : console.log("g is less than h");

    // conditon ? true part(IF) : false part(ELSE)
}