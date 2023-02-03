/*

// -------------------------------------------
// ------------Array Methods(ES5+)------------
// -------------------------------------------

// -----Filter-----
// Creates a new array with all elements that pass the test implemented by the provided function.

const students = [
    {name : "Chamara", age : 22},
    {name : "Kasun", age : 25},
    {name : "Saman", age : 32},
    {name : "Prasad", age : 28},
    {name : "Sarath", age : 45}
];

const filterStd = students.filter((std) => std.age < 30);

console.log(filterStd);

// -----Map-----
// Creates a new array populated with the results of calling a provided function on every element in the calling array.

const students = [
    {name : "Chamara", age : 22},
    {name : "Kasun", age : 25},
    {name : "Saman", age : 32},
    {name : "Prasad", age : 28},
    {name : "Sarath", age : 45}
];

const filterNames = students.map((std) => std.name);

console.log(filterNames);

// -----Find-----
// Returns the value of the first element in the provided array that satisfies the provided testing function.

const students = [
    {name : "Chamara", age : 22},
    {name : "Kasun", age : 25},
    {name : "Saman", age : 32},
    {name : "Prasad", age : 28},
    {name : "Sarath", age : 45}
];

const foundItem = students.find((std) => std.name == "Saman");

console.log(foundItem);

// -----ForEach-----
// Executes a provided function once for each array element.

const students = [
    {name : "Chamara", age : 22},
    {name : "Kasun", age : 25},
    {name : "Saman", age : 32},
    {name : "Prasad", age : 28},
    {name : "Sarath", age : 45}
];

let sum = 0;

students.forEach((std) => console.log(getSum(std.age)));

function getSum(x){
    sum = sum + x;
    return sum;
}

// -----Some-----
// Tests whether at least one element in the array passes the test implemented by the provided function

const students = [
    {name : "Chamara", age : 22},
    {name : "Kasun", age : 25},
    {name : "Saman", age : 32},
    {name : "Prasad", age : 28},
    {name : "Sarath", age : 45}
];

const aboveAge = students.some((std) => std.age > 29);

console.log(aboveAge);

// -----Every-----
// Tests whether all elements in the array pass the test implemented by the provided function

const students = [
    {name : "Chamara", age : 22},
    {name : "Kasun", age : 25},
    {name : "Saman", age : 32},
    {name : "Prasad", age : 28},
    {name : "Sarath", age : 45}
];

const allAboveAge = students.every((std) => std.age > 20);

console.log(allAboveAge);

// -----Reduce-----
//  Executes a reducer function (that you provide) on each element of the array, resulting in single output value.

const students = [
    {name : "Chamara", age : 22},
    {name : "Kasun", age : 25},
    {name : "Saman", age : 32},
    {name : "Prasad", age : 28},
    {name : "Sarath", age : 45}
];

const totalAge = students.reduce((total, std) => {
    return std.age + total;
}, 0);

console.log(totalAge);

// -----Sort-----
//  Sorts the elements of an array. The default sort order is ascending.

const ages = [33,45,21,66,7,5,21,4,88];
ages.sort(compFunc);
console.log(ages);
// Array elements are converted in to strings, then sorted according to each character's Unicode code point value.

function compFunc(a, b){
    return a - b;
}

// With Array of objects
const students = [
    {name : "Chamara", age : 22},
    {name : "Kasun", age : 25},
    {name : "Saman", age : 32},
    {name : "Prasad", age : 28},
    {name : "Sarath", age : 45}
];

const sortedStd = students.sort((std1, std2) => {
    return std1.age - std2.age;
});

console.log(sortedStd);

// -----Includes-----
// Determines whether an array includes a certain value among its entries

let numbers = [1,2,3,4,5,6,7];
console.log(numbers.includes(0));

let names = ["Chamara", "Kasun", "Sanduni"];
console.log(names.includes("Chamal"));

let user = "Kasun Perera";
console.log(user.includes("P"));

*/
