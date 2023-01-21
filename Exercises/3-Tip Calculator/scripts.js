// ---------------------------
// --------Tip Calculator-------
// ---------------------------

/*
    Dasun and his freinds went on a picnic. To get food they went to 3 different restaurants for each meal. 
    The bills are Rs. 1230, Rs. 982, Rs. 1640.
    To tip the waiter a fair amount, Dasun created a simple tip calculator (as a function). 
    He likes to tip 20% of the bill 
        when the bill is grater than Rs. 1500, 
        15% when the bill is between Rs. 1000 and Rs. 1500, 
        and 10% if the bill is less than Rs. 1000.
    In the end, Dasun would like to have 2 arrays:
    1. Containing all 3 tips
    2. Containing all three final paid amounts (bill + tip)
*/

//Get 3 bills as inputs

// var restaurant1 , restaurant2 , restaurant3 ;
var tipArray = new Array();
var totalBillArray = new Array();

// restaurant1 = prompt("Enter the bill of restaurant 1 : ");
// restaurant2 = prompt("Enter the bill of restaurant 2 : ");
// restaurant3 = prompt("Enter the bill of restaurant 3 : ");

function tipCalculator(bill){

    var tip , tot ;

    if(bill > 1500){
        tip = bill * 0.2 ; 
    }
    else if(bill > 1000 && bill <= 1500){
        tip = bill * 0.15 ;
    }
    else if(bill <= 1000){
        tip = bill * 0.1 ;
    }
    else{
        console.log("Enter sutaible values");
    }

    tot = bill + tip ;

    tipArray.push(tip);
    totalBillArray.push(tot);
    
    return tip ;
}

console.log("Tip 1 : "+tipCalculator(1000));
console.log("Tip 2 : "+tipCalculator(1500));
console.log("Tip 2 : "+tipCalculator(2000));

console.log(tipArray);
console.log(totalBillArray);




