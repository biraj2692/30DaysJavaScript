const name = "Biraj"
const id = 50;

// console.log(name + id + " Value"); not preferable
console.log(`My name is ${name} and id is ${id}`);

const gameName = new String("PUBG-COD");

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('P'));


const newStr = gameName.substring(0,4);
console.log(newStr);
const secStr = gameName.slice(-7,4);
console.log(secStr);

