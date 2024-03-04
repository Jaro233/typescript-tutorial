interface FirstName {
  fistName: string;
}

interface LastName {
  lastName: string;
}

interface Combined extends FirstName, LastName {}

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

let man: Admin & Employee = {
  name: "max",
  privileges: ["admin"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  // type guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Max", "Schwarz");
result.split(" ");

const fetchedUserData = {
  id: "u1",
  name: "Max",
  // job: {title: "CEO", description: "my own company"},
};

// console.log(fetchedUserData?.job?.title);

const userInput = null;
const storedData = userInput ?? "DEFAULT";
console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("name: " + emp.name);
//   if ("privileges" in emp) {
//     console.log("privileges: " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("startDate: " + emp.startDate);
//   }
// }

// printEmployeeInformation({name: "manu", startDate: new Date()});

// class Car {
//   drive() {
//     console.log("driving");
//   }
// }

// class Truck {
//   drive() {
//     console.log("driving a truck");
//   }
//   loadCargo(amount: number) {
//     console.log("loading cargo " + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }
// interface Horse {
//   type: "horse";

//   runningSpeed: number;
// }
// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log("moving at speed with speed " + speed);
// }

// moveAnimal({type: "bird", flyingSpeed: 30});

// // const userInputElement = <HTMLInputElement>(
// //   document.getElementById("user-input")!
// // );
// const userInputElement = document.getElementById(
//   "user-input"
// ) as HTMLInputElement;

// userInputElement.value = "hi there";

// interface ErrorContainer {
//   // { email: "not a valid email", username: "must start with a character"}
//   [prop: string]: string;
// }
// const errorBag: ErrorContainer = {
//   email: "not a valid email",
//   username: "must start with a capital character",
// };
