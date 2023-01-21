// ---------------------------
// --------Winning Team-------
// ---------------------------

/*
    Sri Lanka & England both played 3 match one day cricket series. In last 3 games Sri Lanka scored 250, 277, 300 runs, while England scored 185, 244, 360 runs.
    1. Calculate the average score for each team
    2. Decide which teams wins in average (highest average score), and display the winner with the average score
    3. Then change scores to show different winners. Don't forget to take into account there might be a draw (same average score)
*/

var lankaM1 , lankaM2 , lankaM3 , englandM1 ,  englandM1 , englandM2 , englandM3 , lankaAvg , englandAvg;

lankaM1 = prompt("Enter score of 1st match of Sri Lanka");
lankaM2 = prompt("Enter score of 2nd match of Sri Lanka");
lankaM3 = prompt("Enter score of 3rd match of Sri Lanka");

englandM1 = prompt("Enter score of 1st match of England");
englandM2 = prompt("Enter score of 2nd match of England");
englandM3 = prompt("Enter score of 3rd match of England");

lankaAvg = ( lankaM1 + lankaM2 + lankaM3 ) / 3.0 ;

englandAvg = ( englandM1 + englandM2 + englandM3 ) / 3.0 ;

if( lankaAvg > englandAvg ){
    console.log("The winner is SRI LANKA.Crongratulations!"); 
    alert("The winner is SRI LANKA.Crongratulations!");
}
else if( lankaAvg < englandAvg ){
    console.log("The winner is ENGLAND.Crongratulations!"); 
    alert("The winner is ENGLAND.Crongratulations!");
}
else{
    console.log("The match is drawn."); 
    alert("The match is drawn.");
}