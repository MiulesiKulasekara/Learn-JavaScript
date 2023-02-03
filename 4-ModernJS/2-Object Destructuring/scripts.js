var student = {
    firstName : "Shamal",
    lastName : "Aravinda",
    age : 22,
    town : "Colombo",
    nationality : "Sinhala",
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

}

const {firstName} = student ;
const {lastName:lname} = student ;
const {age , job} = student ;
const {town:t , nationality:n} = student ;

console.log(`My name is ${firstName} ${lname}. I am ${age} years old. I am a ${n} person. From ${t}. I am a ${job}.`);

const {interestedSubjects} = student

for( i of interestedSubjects){
    console.log(i);
}

const {degree:{name} , degree:{duration}} = student 
console.log(`My degree is ${name}`);