// ----------------------------------------------
// ------------Getters & Setters(ES6)------------
// ----------------------------------------------

// Getters - Access properties | Setters - Mutate them. JavaScript can secure better data quality when using getters and setters.

// -----Normal function inside an Object-----

// const Person = {
//     fname : "Kasun",
//     lname : "Tharaka",
//     fullName(){
//         return `${this.fname} ${this.lname}`;
//     }
// };

// console.log(Person.fullName());

// -----------------------------------

// -----Getters & Setters inside an Object-----

const Person = {
    fname : "Kasun",
    lname : "Tharaka",
    // Getter
    get fullName(){
        return `${this.fname} ${this.lname}`;
    },
    // Setter
    set fullName(name){
        const parts = name.split(' ');
        this.fname = parts[0];
        this.lname = parts[1];
    }
};

console.log(Person.fullName);

Person.fullName = "Chamal Silva";

console.log(Person.fullName);

// -----------------------------------

// -----Getters & Setters inside a Class-----

class Shape{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    // Getter
    get area(){
        return this.width * this.height;
    }

    // Setter
    set area(values){
        const val = values.split(',');
        this.width = Number(val[0]);
        this.height = Number(val[1]);
    }
}

let sh = new Shape(10, 5);

console.log(sh.area);

sh.area = "2,10";

console.log(sh.area);