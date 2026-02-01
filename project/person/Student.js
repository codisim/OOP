const UniPerson = require("./UniPerson");


const _studentID = Symbol("studentID");
const _guardian = Symbol("guardian");
const _exams = Symbol("exams");
const _fees = Symbol("fees");



class Student extends UniPerson {
    constructor(id, name, studentID, guardian){
        super(id, name);
        this[_studentID] = studentID;
        this[_guardian] = guardian;
        this[_exams] = [];
        this[_fees] = null;
    }

    get studentID(){
        return this[_studentID];
    }

    get guardian(){
        return this[_guardian];
    }

    set guardian(guardian){
        this[_guardian] = guardian;
    }

    get exams(){
        return this[_exams];
    }

    addExam(exam){
        this[_exams].push(exam);
    }

    get fees(){
        return this[_fees];
    }

    payFees(amount){
        this[_fees] += amount;
    }

    toString(){
        return `${super.toString()}, StudentID: ${this[_studentID]}, Exams: ${this[_exams]}, Fees Paid: ${this[_fees]}`;
    }
}


module.exports = Student;