export default class Person {
  constructor(name: string) {
    console.log(`Constructor ${name} calling`);
  }
}

let myGuy = new Person('Bob');