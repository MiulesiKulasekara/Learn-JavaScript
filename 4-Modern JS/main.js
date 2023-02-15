import { Cat } from "./cat.js";

console.log(Cat);

const cat1 = new Cat("Siamese", "kitty", "Jhon Piliphs", 2);
const cat2 = new Cat("Ragdoll", "timmy", "Anne Georgus", 4);

console.log(cat1);
console.log(`Breed of cat 1 : ${cat1.breed}`);
console.log(`Breed of cat 1 : ${cat1.petName}`);
console.log(`Breed of cat 1 : ${cat1.owner}`);
console.log(`Breed of cat 1 : ${cat1.age}`);
cat1.makeNoice("Meow");
console.log(" ");

console.log(cat2);
console.log(`Breed of cat 1 : ${cat2.breed}`);
console.log(`Breed of cat 1 : ${cat2.petName}`);
console.log(`Breed of cat 1 : ${cat2.owner}`);
console.log(`Breed of cat 1 : ${cat2.age}`);
cat2.makeNoice();
console.log(" ");
