const add = require("@sgh/add");
const subtract = require("@sgh/subtract");

const run = (a = 1, b = 1, c = 2) => subtract(add(a, b), c);

console.log(run(4, 7, 10));
