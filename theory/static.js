

class Person {

    static className = 'Farhana';
    static PI = 3.1416;

    constructor(name, email){
        this._name = name;
        this._email = email;
    }

    static isValid(age){
        return age >= 18;
    }

}



console.log(Person.className);
console.log(Person.PI);



const mirza = {
    name: 'Mirza',
    email: 'mirza@gmail.com',
    age: 24
}


let p = null;

if (Person.isValid(mirza.age)) {
    p = new Person(mirza.name, mirza.email);
}


console.log(p);



