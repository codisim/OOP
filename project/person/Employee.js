const UniPerson = require("./UniPerson");

const _employeeID = Symbol("_employeeID");
const salary = Symbol("salary");



class Employee extends UniPerson {
    constructor(id, name, employeeID){
        super(id, name);
        this[_employeeID] = employeeID;
        this[salary] = null;
    }

    get employeeID(){
        return this[_employeeID];
    }

 
   
    get salary(){
        return this[salary];
    }


    set salary(amount){
        this[salary] = amount;
    }

    toString(){
        return `${super.toString()}, employeeID: ${this[_employeeID]}, Salary: ${this[salary]}`;
    }
}


module.exports = Employee;