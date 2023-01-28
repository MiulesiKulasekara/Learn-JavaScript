// HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.
// <element event='some JavaScript'> ex: <button id="event-btn" onclick="btnPress(this.textContent)">Events</button>

function btnPress(x){
    alert(x);
}

//Best method - event listners

//unnamed function
var eventListnerBtn = document.getElementById("event-btn1").addEventListener("click",function(){
    alert("Event listners");
});

//named function
document.getElementById("event-btn1").addEventListener("mouseout" , textCgange);

function textCgange(){
    alert("Mouse out");
    document.getElementById("event-btn1").innerHTML = "Submit";
}

//parameterized function

document.getElementById("event-btn2").addEventListener("click",function(){
    change("Submited");
});

function change(msg){
    document.getElementById("event-btn2").innerHTML = msg; 
    document.getElementById("event-btn2").style.backgroundColor = "rgb(146, 150, 151)" ;
    document.getElementById("event-btn2").style.border = "rgb(146, 150, 151)" ;
}



