const { Guardian, Student, Teacher } = require("./person");
const { Contact, Address } = require("./contact");
const { Department, Subject } = require("./university");

// Guardian
const guardian = new Guardian(1, "MIrza", "Teacher", 50000);
guardian.blood = "O+";

guardian.contact = new Contact({
  id: 1,
  email: "mirza@gmail.com",
  phone: "01711111111",
});

guardian.contact.address = new Address({
  id: 1,
  roadNo: "12C",
  city: "Satkhira Sadar",
  region: "Satkhira",
  country: "Bangladesh",
  postalCode: "8200",
});

// console.log(guardian.toString());

// student
const student = new Student(2, "Farhana", "220511", guardian);
student.blood = "O+";

student.contact = new Contact({
  id: 2,
  email: "farhana.fwt@gmail.com",
  phone: "01722222222",
  alternatePhone: student.guardian.contact.phone,
  address: student.guardian.contact.address,
});

// dept
const dept = new Department({ id: 1, name: "FWT" });

student.department = dept;

dept.subjects = [
  new Subject(1, "Research Methodology", 3),
  new Subject(1, "Forest Harvesting & Transportation Engineering", 2),
  new Subject(1, "Research Methodology", 3),

  // new Subject({id:1, name: 'Research Methodology', credit: 3}),
  // new Subject({id:1, name: 'Forest Harvesting & Transportation Engineering', credit: 2}),
  // new Subject({id:1, name: 'Research Methodology', credit: 3})
];


const totalCredit = student.department.subjects.reduce((a, b) => {
  return a + b.credit;
}, 0);


const head = new Teacher(1, 'Eshita', dept.subjects[0], 'EMP0010');
head.blood = 'O+';
head.department = dept;
head.salary = 135000
head.contact = new Contact({
  id: 3,
  email: "eshita@gmail.com",
  phone: "01711111111",
  address: new Address({
    id: 3,
    roadNo: "12C",
    city: "Satkhira Sadar",
    region: "Satkhira",
    country: "Bangladesh",
    postalCode: "8200",
  }),
});


const teacher1 = new Teacher(2, 'Mahbub', dept.subjects[1]);
const teacher2 = new Teacher(3, 'Prarona', dept.subjects[2]);


dept.head = head;
dept.addTeacher(head);
dept.addTeacher(teacher1);
dept.addTeacher(teacher2);


student.department.teachers.forEach((teacher, i) => {
  // console.log(`${i + 1}. ${teacher.name}`);
});



guardian.addChildren(student);



// console.log(student.department);


