export class Cat {
  constructor(breed, petName, owner, age) {
    this.breed = breed;
    this.petName = petName;
    this.owner = owner;
    this.age = age;
  }
  makeNoice(sound = "Loud noice") {
    console.log(`Sound of ${this.petName} : ${sound}`);
  }
}
