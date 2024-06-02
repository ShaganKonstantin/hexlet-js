import _ from "lodash";

console.log("Hello, Hexlet!");
console.log(_.last(["one", "two"]));

const numbers = [1, 3, 6, 2, -11];
const result = numbers.sort((a, b) => a - b);
console.log(result);
