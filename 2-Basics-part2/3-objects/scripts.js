// Objects

/*
    In Javascript objects are variables that has many values.
    Those values written as name:value pairs called properties or methods.
*/

// Create a object ==> Object literals

// Comma-separated list of name-value pairs wrapped in curly braces.

var student = {
    firstName : "Shamal",
    lastName : "Aravinda",
    age : 22,
    isMarried : false,
    job : "Software Engineer",
    //Array
    interestedSubjects : ["Java programming" , "Artificial intelligence" , "Database Management"],
    //Object
    degree : {
        name : "BSc(Hons) in IT specialising in SE",
        duration : "4 years",
        campus : "SLLIT"
    },
    //Object Array
    project : [
        {
            name : "Vehical Rental System",
            technology : "HTML,CSS,JS,PHP",
        },
        {
            name : "Vehical Spare Part System",
            technology : "Java",
        },
        {
            name : "Paharmacy Management System",
            technology : "MERN",
        }
    ],
    //fuction
    yearOfBirth : function(year){
        return year-this.age;
    }

}

// get values
console.log(student);
console.log(student.firstName);
console.log(student.age);
console.log(student.isMarried);

console.log(student["lastName"]);

console.log("===========================================");

// array
console.log(student.interestedSubjects);
console.log(student.interestedSubjects[0]);
console.log(student.interestedSubjects[1]);
// console.log(student.interestedSubjects[2]);

console.log(student["interestedSubjects"][2]);

console.log("===========================================");

 // object
console.log(student.degree);
console.log(student.degree.name);
console.log(student.degree.duration);
// console.log(student.degree.campus);
console.log(student["degree"].name);
console.log(student["degree"]["duration"]);
console.log(student.degree["name"]);

console.log("===========================================");

// object array
console.log(student.project);
console.log(student.project[0]);
console.log(student.project[1]);
// console.log(student.project[2]);
console.log(student)

console.log(student.project[0].name);
console.log(student.project[1].technology);
console.log(student.project[0].technology);

console.log(student["project"]);
console.log(student["project"][0].name);
console.log(student["project"][1]["technology"]);
console.log("===========================================");

// function
console.log(student.yearOfBirth);

console.log("===========================================");

// modify values
student.job = "Developer";
console.log(student.job);

student["isMarried"] = "yes";
console.log(student["isMarried"]);

// Create a object ==> new object syntax
var book = new Object();

// Add properties

book.name = "Madol Duuwa";
book.autor = "Mr.Martin Wikramasinghe";
book.price = 500.00;
book.availableBookshops = ["Sarasavi","Godage","Vidura"];

console.log(book);