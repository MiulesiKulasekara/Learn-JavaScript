// Error Handling

// Try Catch
/*
    try - Let you test a block of code for errors
    catch - Lets you handle the error
    throw -  lets you create custom errors
    finally - lets you execute code, after try and catch, regardless of the result
*/

function findLargestNumber(a,b,c){
    try{
        if(a > b && a > c){
            console.log("a is the largest number");
        }
        else if( b > a && b > c){
            console.log("b is the largest number");
        }
        else if( c > a && c > b){
            console.log("c is the largest number");
        }
        else if( a == b || a == c || c == b ){
            console.log("At least 2 numbers are equal");
        }
        else{
            console.log("Invalid inputs");
        }
    }
    catch(err){
        console.log(err)
    }
    finally{
        console.log(`Inputs : ${a} , ${b} and ${c}`);
    }
}

findLargestNumber(21,17,10)