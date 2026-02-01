

class Teacher {
    constructor(subject, salary){
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

    print(){
        console.log('ClassName = Teacher, ' + this + '');
    }


    toString(){
        return `Subject: ${this._subject}, Salary: ${this._salary}`;
    }
    
}


module.exports = Teacher;