interface Named {
  readonly name?: string;
  readonly outputName?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  outputName?: string;
  age = 30;
  constructor(n?: string) {
    this.name = n;
  }
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

let user1: Greetable;

// user1 = {
//   name: "max",
//   age: 22,
//   greet(phrase: string) {
//     console.log(`${phrase} ${this.name}`);
//   },
// };

user1 = new Person("Max");
console.log(user1);

user1.greet("Hi there");
