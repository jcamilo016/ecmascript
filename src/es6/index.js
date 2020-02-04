//antes
function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 32;
  var country = country || "MX";
  console.log(name, age, country);
}

//es6
function newFunction2(name = "oscar", age = 32, country = "MX") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Juan", 23, "CO");

let hello = "Hello";
let world = "World";

//antes
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//antes
let lorem =
  "Quiero escribir una frase epica que pueda separar \n" +
  "otra frase epica que necesitamos.";
console.log(lorem);

//es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica`;
console.log(lorem2);

let person = {
  name: "oscar",
  age: 32,
  country: "MX"
};

console.log(person.name, person.age, person.country);

//es6
let { name, age, country } = person;
console.log(name, age, country);

let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yessica", "Camila"];
let education = ["David", ...team1, ...team2];
console.log(education);

let name = "Juan";
let age = 32;

//antes
obj = {
  name: name,
  age: age
};
console.log(obj);

//es6
obj2 = { name, age };
console.log(obj2);

const names = [
  { name: "Oscar", age: 31 },
  { name: "Yesica", age: 27 }
];

//antes
let listofNames = names.map(function(item) {
  console.log(item.name);
});

//es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => console.log(name, age, country);
listOfNames3("Camilo", 31, "CO");

const square = num => num * num;
console.log(square(3));

//Promesas en es6
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Hey!");
    } else {
      reject("Ups!!!!");
    }
  });
};

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log("hola"))
  .catch(error => console.log(error));

class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new Calculator();
console.log(calc.sum(2, 2));

import { hello } from "./module";

//hello();

//generator
function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }

  if (true) {
    yield "World";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
