const Person = require("./Person");
const Student = require("./Student");
const Teacher = require("./Teacher");


const p = new Person("Farhana", "farhana@gmail.com");
const t = new Teacher("Mathematics", 50000);
const s = new Student(["Math", "Science"], 2000);



console.log(p);
console.log(t);
console.log(s);