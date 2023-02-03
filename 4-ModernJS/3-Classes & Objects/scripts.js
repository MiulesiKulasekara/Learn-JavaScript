// Classes & Objects

function Course(subject){
    this.mySubject = subject ;
    this.getMarks = () => {
        console.log(`My marks of  ${this.mySubject} is : 89`);
    }
}

let object1 = new Course("Maths");
console.log(object1);

// ES6

class myCourse{
    constructor(sub){
        this._sub = sub ;
    }

    getMyMarks(){
        console.log(`My marks of  ${this.mySubject} is : 89`);
    }
}

let object2 = new myCourse("SE");
console.log(object2);
object2.getMyMarks;

