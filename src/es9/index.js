const obj = {
  name: "oscar",
  age: 32,
  country: "MX"
};

let { name, ...all } = obj;
console.log(all);

let obj2 = {
  name: "Oscar",
  age: 31
};

let obj3 = {
  ...obj2,
  country: "MX"
};

console.log(obj3);

const holaMundo = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hola mundo bonito! :)"), 3000)
      : reject(new Error("Test error"));
  });
};

holaMundo()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log("Finalizó!!"));

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
