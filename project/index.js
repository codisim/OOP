const { Guardian, Student } = require("./person");
const { Contact, Address } = require("./contact");
const { Department, Subject } = require("./university");


// Guardian
const guardian = new Guardian(1, 'MIrza', 'Teacher', 50000);
guardian.blood = 'O+';

guardian.contact = new Contact({
    id: 1,
    email: 'mirza@gmail.com',
    phone: '01711111111'
})


guardian.contact.address = new Address({
    id: 1,
    roadNo: '12C',
    city: 'Satkhira Sadar',
    region: 'Satkhira',
    country: 'Bangladesh',
    postalCode: '8200'
})


// console.log(guardian.toString());



// student
const student = new Student(2, 'Farhana', 'ST001', guardian);
student.blood = 'O+';

student.contact = new Contact({
    id: 2,
    email: 'farhana.fwt@gmail.com',
    phone: '01722222222',
    alternatePhone: student.guardian.contact.phone,
    address: student.guardian.contact.address, 
})




// dept
const dept = new Department({id: 1, name: 'FWT'});

student.department = dept;


console.log(student);
