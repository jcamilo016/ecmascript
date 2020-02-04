let array = [1,2,3,[1,2,3,[1,2,3]]];
console.log(array.flat());
console.log(array.flat(2));

let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value*2]));

let hello = "         hello";
console.log(hello.trimStart());

let entries = [["name","oscar"],["age",32]];
console.log(Object.fromEntries(entries));

let mySymbol = "My Symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);


