const Guardian = require("./person/Guardian");



const guardian = new Guardian(1, 'Mr. Saiful');
guardian.profession = 'Teacher';
guardian.income = 500000;

console.log(guardian.toString());
