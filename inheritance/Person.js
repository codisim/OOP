

class Person {
    constructor(name, email){
        this._name = name;
        this._email = email;
    }


    get name(){
        return this._name;
    }
    

    set name(value){
        if (value.toString() === "farhana") return;
        this._name = value;
    }

    get email(){
        return this._email;
    }
    
    set email(value){
        this._email = value;
    }


    print(){
        console.log('ClassName = Person, ' + this + '');
    }


    toString(){
        return `Name: ${this._name}, Email: ${this._email}`;
    }

     static isValid(age){
        return age >= 18;
    }


}


const p1 = new Person("Habiba", "habiba@gmail.com");
const p2 = new Person("Farhana", "farhana@gmail.com");

p2.print();

console.log(p2 + '');



module.exports = Person;