// Arrays

// Array is a single variable that stores lists of elements

// Difine arrays - method1

var students = ["Shamal" , "Aravinda" , "Amali" , "Sachitha" , "Kusum" , "Nithya"];
var marks = new Array(70, 82, 65 , 96 , 54 , 77 , 70);

//Print array
console.log(students);
console.log(marks)

console.log(students.length);
console.log(marks.length);

//Acsess array elements

console.log(students[3]+" gets "+marks[1]+" for maths.")

//Array mutation
students[4] = "Kasuni";
marks[2] = 69 ;

console.log(students);
console.log(marks);

// Add elements
students.push("Surendra"); // add elements ===> last ==> push
students.unshift("Pawani"); // add elements ===> first ==> unshift
console.log(students);

// Remove elements
students.pop() // remove elements ===> last ==> pop
students.shift(); // remove elements ===> first ==> shift
console.log(students);

students.pop() // remove elements ===> last ==> pop
students.shift(); // remove elements ===> first ==> shift
console.log(students);

// Get array index
console.log(marks.indexOf(54)); //54 is in the array
console.log(marks.indexOf(88)); // 88 is not in the array. Therefore it will print -1

// Defferent data types arrays

var details = ["Saman" , 53 , "Store keeper" , 50000.00]
console.log(details);





