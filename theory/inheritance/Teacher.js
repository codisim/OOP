const Person = require('./Person');

class Teacher extends Person {
    
    constructor(name, email, subject, salary){
        super(name, email);
        this._subject = subject;
        this._salary = salary;
    }

    get salary(){
        return this._salary
    }

    set salary(value){
        this._salary = value;
    }

    get subject(){
        return this._subject;
    }

    set subject(value){
        this.subject = value;
    }


    // overrideed method
      print(){
        super.print();
        console.log(`Subject: ${this._subject}, Salary: ${this._salary}`);
    }


    // toString(){
    //     return `Subject: ${this._subject}, Salary: ${this._salary}`;
    // }
    
}


module.exports = Teacher;