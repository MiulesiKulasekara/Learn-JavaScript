// Switch case

var name = "Shamal" ;
var job = "Programmer" ;

switch(job.toLocaleLowerCase()){
    case "teacher":
        console.log(name+" is a teacher");
        break;
    case "doctor":
        console.log(name+" is a doctor");
        break;
    case "programmer":
        console.log(name+" is a programmer");
        break;  
    case "manager":
        console.log(name+" is a manager");
        break;
    default:
        console.log(name+" is doing something else");
        break; 
}

// * When we do not add the brake keyword, after the correct
// condition, every lines are executed .

var sis = "Amali" ;
var jobSis = "Teacher" ;

switch(jobSis.toLocaleLowerCase()){
    case "engineer":
        console.log(sis+" is a engineer");
    case "teacher":
        console.log(sis+" is a teacher");
    case "manager":
        console.log(sis+" is a manager");
        break;
    case "doctor":
        console.log(sis+" is a doctor");
    default:
        console.log(sis+" is doing something else");
}

var myAge = 22 ;

switch(true){
    case myAge <= 12:
        console.log("You are a child.");
        break;
    case myAge > 12 && myAge <= 17:
        console.log("You are a teenage.");
        break;
    default:
        console.log("You are an adult.");
}