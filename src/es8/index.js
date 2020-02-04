import hello from "../es6/module";

const data = {
  frontend: "Oscar",
  backend: "Isabel",
  design: "Ana"
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data = {
  frontend: "Oscar",
  backend: "Isabel",
  design: "Ana"
};

const values = Object.values(data);
console.log(values);

const cadena = "hello";
console.log(cadena.padStart(7, "*"));
console.log(cadena.padEnd(12, "-------"));

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World!"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error){
      console.log(error);
  }
};

anotherFunction();