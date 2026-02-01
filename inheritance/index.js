const Person = require("./Person");
const Student = require("./Student");
const Teacher = require("./Teacher");


// const p = new Person("Farhana", "farhana@gmail.com");
// const s = new Student(["Math", "Science"], 2000);
// console.log(p);
// console.log(s);



const t = new Teacher("Mirza", "mirza@gmail.com", "Mathematics", 50000);
console.log(t);
console.log(t instanceof Person);
console.log(t instanceof Teacher);