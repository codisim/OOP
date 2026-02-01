const Person = require("./Person");


class Student extends Person{
    constructor(name, email, subjects, fee){
        super(name, email);
        this._subjects = subjects;
        this._fee = fee;
    }

    get subjects(){
        return this._subjects;
    }
    
    set subjects(value){
        this._subjects = value;
    }

    get fee(){
        return this._fee;
    }
    
    set fee(value){
        this._fee = value;
    }
}


module.exports = Student;